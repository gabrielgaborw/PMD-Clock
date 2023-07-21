import React, { useEffect, useState } from 'react'

const Timer = () => {
	const [time, setTime] = useState<number>(1500)

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => prevTime - 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60)
		const seconds = time % 60
		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
	}

  return (
    <div>
      <h1>🍅</h1>
			<p>{formatTime(time)}</p>
			<button>Start</button>
			<button>Stop</button>
			<button>Reset</button>
    </div>
  )
}

export default Timer