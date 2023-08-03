import React, { useEffect, useState } from 'react'

import { LuTimer, LuTimerReset, LuTimerOff } from 'react-icons/lu'

const Timer = () => {
	const [time, setTime] = useState<number>(1500)
	const [started, setStarted] = useState<boolean>(false)

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
			<p className="time text-8xl">
				{formatTime(time)}
			</p>
			<div className="flex flex-row m-1">
				<button className="utility-btn hover:bg-slate-800"
					onClick={handleStart}>
					<LuTimer color="white" className="w-10 h-10" />
				</button>
				<button className="utility-btn hover:bg-slate-800"
					onClick={handleStop}>
					<LuTimerOff color="white" className="w-10 h-10" />
				</button>
				<button className="utility-btn hover:bg-slate-800"
					onClick={handleReset}>
					<LuTimerReset color="white" className="w-10 h-10" />
				</button>
			</div>
    </div>
  )
}

export default Timer