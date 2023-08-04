import React, { useState } from 'react'

import { FaScrewdriverWrench, FaRegCircleQuestion } from 'react-icons/fa6'
import { BsSun, BsMoon } from 'react-icons/bs'

const Navbar = () => {
	const [darkMode, setDarkMode] = useState<boolean>(true);

	const handleModeToggle = () => {
		setDarkMode((prevMode) => !prevMode)		
	}

	return (
    <div className="h-14 flex items-center justify-between flex-row bg-slate-800">
			<h1 className="title">
				🍅Pomodoro Clock
			</h1>
			<div className="flex flex-row items-center justify-center">
				{/* TODO: implement an about page that pops up */}
				<button className="nav-btn">
					<FaRegCircleQuestion color="white" className="w-6 h-6" />
				</button>
				{/* TODO: make a setting menu */}
				<button className="nav-btn">
					<FaScrewdriverWrench color="white" className="w-6 h-6" />
				</button>
				{/* TODO: implement dark mode */}
				<button className="nav-btn"
					onClick={handleModeToggle}>
					{darkMode ? 
						<BsSun color="white" className="w-6 h-6" />
					: <BsMoon className="w-6 h-6" />
					}
				</button>
			</div>
		</div>
  )
}

export default Navbar