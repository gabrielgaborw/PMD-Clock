import React, { useEffect, useState } from 'react'

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

	// Formatting time from a number
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
    <div>
      <h1>🍅</h1>
			<p>{formatTime(time)}</p>
			<button onClick={handleStart}>
				Start
			</button>
			<button onClick={handleStop}>
				Stop
			</button>
			<button onClick={handleReset}>
				Reset
			</button>
    </div>
  )
}

export default Timer