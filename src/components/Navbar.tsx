import React, { useState } from 'react'

import { FaScrewdriverWrench, FaRegCircleQuestion } from 'react-icons/fa6'
import { BsSun, BsMoon } from 'react-icons/bs'

import About from './About';
import Settings from './Settings';

const Navbar = () => {
	const [darkMode, setDarkMode] = useState<boolean>(true);
	const [visibleSettings, setVisibleSettings] = useState<boolean>(false);
	const [visibleAbout, setVisibleAbout] = useState<boolean>(false);

	const handleModeToggle = () => {
		setDarkMode((prevMode) => !prevMode)		
	}

	const handleShowAbout = () => {
		setVisibleAbout(true);
	}

	const handleShowSettings = () => {
		setVisibleSettings(true);
	}

	return (
    <div className="h-14 flex items-center justify-between flex-row bg-slate-800">
			<h1 className="title">
				🍅Pomodoro Clock
			</h1>
			<div className="flex flex-row items-center justify-center mr-8">
				<button className="nav-btn group" onClick={handleShowAbout}>
					<FaRegCircleQuestion color="white" className="w-6 h-6" />
					<span className="tooltip group-hover:scale-100">
						About
					</span>
				</button>
				<button className="nav-btn group" onClick={handleShowSettings}>
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
			<About visibility={visibleAbout} setVisibility={setVisibleAbout} />
			<Settings visibility={visibleSettings} setVisibility={setVisibleSettings} />
		</div>
  )
}

export default Navbar