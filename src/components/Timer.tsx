import React, { useEffect, useState, useContext } from 'react'

import { LuTimer, LuTimerReset, LuTimerOff } from 'react-icons/lu'
import { GiCoffeeCup } from 'react-icons/gi'
import { LiaHourglassStartSolid, LiaHourglassHalfSolid, LiaHourglassEndSolid } from 'react-icons/lia'

import { SettingsContext } from '../context/SettingsContext'

const Timer = () => {
	const [time, setTime] = useState<number>(1500)
	const [started, setStarted] = useState<boolean>(false)
	const { settings, setAuto, setPomodoroTime, setBreakTime } = useContext(SettingsContext)
	setAuto(false);
	console.log(settings);

	// Making the time pass if started is true
	useEffect(() => {
		if(started) {
			const interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1)
			}, 1000)

			return () => clearInterval(interval)
		}
	}, [started])

	// Formatting time
	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60)
		const seconds = time % 60
		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
	}

	// Buttons functionality
	const handleStart = () => {
		setStarted(true)
	}
	const handleStop = () => {
		setStarted(false)
	}
	const handleReset = () => {
		setTime(1500)
		setStarted(false)
	}

  return (
    <div className="h-screen flex items-center justify-center flex-col bg-slate-900">
			{/* TODO: maybe make an hourglass spin next to time */}
			<p className="flex flex-row text-8xl">
				{!started ? 
					<LiaHourglassStartSolid color="white" />
					: <LiaHourglassHalfSolid color="white" />
				}
				<span className="time">
					{formatTime(time)}
				</span>
				<button className="relative utility-btn group">
					<GiCoffeeCup color="white" className="w-10 h-10" />
					<span className="tooltip group-hover:scale-100 top-14">
						Break
					</span>
				</button>
			</p>
			<div className="flex flex-row m-1">
				<button className="relative utility-btn group"
					onClick={handleStart}>
					<LuTimer color="white" className="w-10 h-10" />
					<span className="tooltip group-hover:scale-100 top-14">
						Start
					</span>
				</button>
				<button className="relative utility-btn group"
					onClick={handleStop}>
					<LuTimerOff color="white" className="w-10 h-10" />
					<span className="tooltip group-hover:scale-100 top-14">
						Stop
					</span>
				</button>
				<button className="relative utility-btn group"
					onClick={handleReset}>
					<LuTimerReset color="white" className="w-10 h-10" />
					<span className="tooltip group-hover:scale-100 top-14">
						Reset
					</span>
				</button>
			</div>
    </div>
  )
}

export default Timer