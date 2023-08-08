import React, { useState, useContext } from 'react'

import { IoCloseSharp } from 'react-icons/io5'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md'

import { SettingsContext } from '../context/SettingsContext'

const Settings = (props: { visibility: boolean, setVisibility: React.Dispatch<React.SetStateAction<boolean>>}) => {
	const { visibility, setVisibility } = props
	const { settings, setAuto, setPomodoroTime, setBreakTime } = useContext(SettingsContext)
	const [autoMode, setAutoMode] = useState<boolean>(settings.auto)
	const [pmdInput, setPmdInput] = useState<number>(settings.pomodoroTime)
	const [breakInput, setBreakInput] = useState<number>(settings.breakTime)
	// TODO: KEYBINDS
	// Start or stop timer
	const [ssTime, setSSTime] = useState("")
	// Reset timer
	const [reset, setReset] = useState("")
	// Break key
	const [breakKey, setBreakKey] = useState("")

	const handleAutoMode = () => {
		setAutoMode(!autoMode)
	}

	const handleBreakTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newTime = Number(e.target.value)
		setBreakInput(newTime)
	}

	const handlePmdTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newTime = Number(e.target.value)
		setPmdInput(newTime)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setAuto(autoMode)
		setPomodoroTime(pmdInput)
		setBreakTime(breakInput)
		setVisibility(false);
	}

  return visibility ? (
    <form onSubmit={handleSubmit} className="popup-background">
			<div className="popup-content">
				<h3 className="text-3xl">Settings</h3>
				<button onClick={() => setVisibility(false)}>
					<IoCloseSharp color="red" className="absolute top-2 right-2 h-8 w-8" />
				</button>
				<div>
					<button type="button" className="flex items-center flex-row text-xl" onClick={handleAutoMode}>
						{autoMode ? 
							<MdOutlineCheckBox />
							: <MdOutlineCheckBoxOutlineBlank />
						}
						<span className="ml-6">Auto Mode</span>
					</button>
					<div className="mt-8 flex justify-between flex-row">
						<div className="flex flex-col">
							<p>Pomodoro time (in minutes)</p>
							<input
								type="number"
								value={pmdInput}
								className="w-52 px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
								onChange={handlePmdTimeChange}
							/>
						</div>
						<div>
							<p>Break time (in minutes)</p>
							<input
								type="number"
								value={breakInput}
								className="w-52 px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
								onChange={handleBreakTimeChange}
							/>
						</div>
					</div>
					<button type="submit">Submit</button>
				</div>
			</div>
		</form>
  ) : "";
}

export default Settings