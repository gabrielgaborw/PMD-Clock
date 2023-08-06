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
			<div className="flex flex-row items-center justify-center mr-8">
				{/* TODO: implement an about page that pops up */}
				<button className="nav-btn group">
					<FaRegCircleQuestion color="white" className="w-6 h-6" />
					<span className="tooltip group-hover:scale-100">
						About
					</span>
				</button>
				{/* TODO: make a setting menu */}
				<button className="nav-btn group">
					<FaScrewdriverWrench color="white" className="w-6 h-6" />
					<span className="tooltip group-hover:scale-100">
						Settings
					</span>
				</button>
				{/* TODO: implement dark mode */}
				<button className="nav-btn group"
					onClick={handleModeToggle}>
					{darkMode ? 
						<BsSun color="white" className="w-6 h-6" />
					: <BsMoon className="w-6 h-6" />
					}
					<span className="tooltip group-hover:scale-100">
						{darkMode ? "Light Mode" : "Dark Mode"}
					</span>
				</button>
			</div>
		</div>
  )
}

export default Navbar