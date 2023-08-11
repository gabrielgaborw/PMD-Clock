import React, { useEffect, useState } from 'react'

import { FaScrewdriverWrench, FaRegCircleQuestion } from 'react-icons/fa6'
import { BsSun, BsMoon } from 'react-icons/bs'

import About from './About';
import Settings from './Settings';

const Navbar = () => {
	const [darkMode, setDarkMode] = useState<boolean>(true);
	const [visibleSettings, setVisibleSettings] = useState<boolean>(false);
	const [visibleAbout, setVisibleAbout] = useState<boolean>(false);
	
	//Setting dark mode by default
	useEffect(() => {
		localStorage.setItem("theme", "dark")
		document.documentElement.classList.add("dark")
	}, [])

	// Dark mode switch
	const handleModeToggle = () => {
		if(darkMode) {
			document.documentElement.classList.remove("dark")
			localStorage.setItem("theme", "light") 
			setDarkMode((prevMode) => !prevMode)
		}
		else {
			localStorage.setItem("theme", "dark")
			document.documentElement.classList.add("dark")
			setDarkMode((prevMode) => !prevMode)
		}
	}

	// Show about page
	const handleShowAbout = () => {
		setVisibleAbout(true);
	}

	// Show settings menu
	const handleShowSettings = () => {
		setVisibleSettings(true);
	}
	
	return (
    <div className="h-[10vh] flex items-center justify-between flex-row dark:bg-slate-800 bg-slate-100">
			<h1 className="title dark:text-white text-black">
				🍅Pomodoro Clock
			</h1>
			<div className="flex flex-row items-center justify-center mr-8">
				<button className="nav-btn group" onClick={handleShowAbout}>
					<FaRegCircleQuestion className="w-6 h-6 dark:text-white text-black" />
					<span className="tooltip group-hover:scale-100">
						About
					</span>
				</button>
				<button className="nav-btn group" onClick={handleShowSettings}>
					<FaScrewdriverWrench className="w-6 h-6 dark:text-white text-black" />
					<span className="tooltip group-hover:scale-100">
						Settings
					</span>
				</button>
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