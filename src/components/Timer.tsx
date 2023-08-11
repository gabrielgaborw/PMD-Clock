import React, { useEffect, useState, useContext } from 'react'

import useSound from 'use-sound'

import { LuTimer, LuTimerReset, LuTimerOff } from 'react-icons/lu'
import { GiCoffeeCup } from 'react-icons/gi'
import { LiaHourglassStartSolid, LiaHourglassHalfSolid, LiaHourglassEndSolid } from 'react-icons/lia'
import { BiTimer } from 'react-icons/bi'

import { SettingsContext } from '../context/SettingsContext'

// WIP
// import startSound from "../Sounds/Start.mp3"
// import "../Sounds/Alarm.mp3"

const Timer = () => {
	const { settings } = useContext(SettingsContext)
	const [time, setTime] = useState<number>(settings.pomodoroTime * 60)
	const [breakTime, setBreakTime] = useState<number>(settings.breakTime * 60)
	const [mode, setMode] = useState<string>("pmd")
	const [autoMode, setAutoMode] = useState<boolean>(settings.auto)
	const [started, setStarted] = useState<boolean>(false)
	const [breakStarted, setBreakStarted] = useState<boolean>(false)
	const userTheme = localStorage.getItem("theme")
	// TODO: Add sound effects
	// const [play] = useSound(startSound)

	useEffect(() => {
		
	}, [userTheme])

	// Making the time pass if started is true
	useEffect(() => {
		if(started) {
			setMode("pmd")
			if(time === 0) setTime(settings.pomodoroTime * 60)
			const interval = setInterval(() => {
				setTime((prevTime) => prevTime > 0 ? prevTime - 1 : 0)
			}, 1000)
			if(time === 0) {
				setStarted((prevStarted) => !prevStarted)
				setTime(0)
				setTimeout(() => {
					if(autoMode) {
						setTime(settings.breakTime * 60)
						setBreakStarted((prevBreak) => !prevBreak)
					}
				}, 5000);
			}
			return () => clearInterval(interval)
		}

		if(breakStarted) {
			setMode("break")
			if(time === 0) setTime(settings.breakTime * 60)
			const interval = setInterval(() => {
				setTime((prevTime) => prevTime > 0 ? prevTime - 1 : 0)
			}, 1000)
			if(autoMode && time === 0) {
				setBreakStarted((prevBreak) => !prevBreak)
				setTime(0)
				setTimeout(() => {
					if(autoMode) {
						setTime(settings.pomodoroTime * 60)
						setStarted((prevStarted) => !prevStarted)
					}
				}, 5000);
			}
			return () => clearInterval(interval)
		}
	}, [started, breakStarted, time, autoMode])

	// Updating state if settings changed
	useEffect(() => {
		setTime(settings.pomodoroTime * 60)
		setBreakTime(settings.breakTime * 60)
		setAutoMode(settings.auto)
	}, [settings])

	// Formatting time
	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60)
		const seconds = time % 60
		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
	}

	// Restart time & break
	const handlePmd = () => {
		setTime(settings.pomodoroTime * 60)
		setStarted(true)
		setBreakStarted(false)
	}
	const handleBreak = () => {
		setTime(settings.breakTime * 60)
		setStarted(false)
		setBreakStarted(true)
	}

	// Time control buttons functionality
	const handleStart = () => {
		if(mode === "pmd")	setStarted(true)
		else if(mode === "break") setBreakStarted(true)
	}
	const handleStop = () => {
		if(started) setStarted(false)
		if(breakStarted) setBreakStarted(false)
	}
	const handleReset = () => {
		if(mode === "pmd") {
			setTime(settings.pomodoroTime * 60)
			setStarted(false)
		}
		if(mode === "break") {
			setTime(settings.breakTime * 60)
			setBreakStarted(false)
		}
	}

  return (
    <div className="h-[90vh] flex items-center justify-center flex-col dark:bg-slate-900 bg-slate-50">
			{/* TODO: maybe make an hourglass spin next to time */}
			<p className="relative flex flex-row items-center text-8xl">
				{started || breakStarted ? 
					<LiaHourglassHalfSolid className="dark:text-white text-black" />
					: <LiaHourglassStartSolid className="dark:text-white text-black" />
				}
				<span className="time">
					{formatTime(time)}
				</span>
				<button className="absolute left-[200px] bottom-16 utility-btn group" onClick={handleBreak}>
					<GiCoffeeCup className="w-10 h-10 dark:text-white text-black" />
					<span className="tooltip group-hover:scale-100">
						Break
					</span>
				</button>
				<button className="absolute left-[20px] bottom-16 utility-btn group" onClick={handlePmd}>
					<BiTimer className="w-10 h-10 dark:text-white text-black" />
					<span className="tooltip group-hover:scale-100">
						Pomodoro
					</span>
				</button>
			</p>
			<div className="flex flex-row m-1">
				<button className="relative utility-btn group"
					onClick={handleStart}>
					<LuTimer className="w-10 h-10 dark:text-white text-black" />
					<span className="tooltip group-hover:scale-100">
						Start
					</span>
				</button>
				<button className="relative utility-btn group"
					onClick={handleStop}>
					<LuTimerOff className="w-10 h-10 dark:text-white text-black" />
					<span className="tooltip group-hover:scale-100">
						Stop
					</span>
				</button>
				<button className="relative utility-btn group"
					onClick={handleReset}>
					<LuTimerReset className="w-10 h-10 dark:text-white text-black" />
					<span className="tooltip group-hover:scale-100">
						Reset
					</span>
				</button>
			</div>
    </div>
  )
}

export default Timer