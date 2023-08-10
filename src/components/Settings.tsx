import React, { useState, useContext } from 'react'

import { IoCloseSharp } from 'react-icons/io5'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md'
import { ImWarning } from 'react-icons/im'

import { SettingsContext } from '../context/SettingsContext'

const Settings = (props: { visibility: boolean, setVisibility: React.Dispatch<React.SetStateAction<boolean>>}) => {
	const { visibility, setVisibility } = props
	const { settings, setAuto, setPomodoroTime, setBreakTime } = useContext(SettingsContext)

	const [autoMode, setAutoMode] = useState<boolean>(settings.auto)
	const [pmdInput, setPmdInput] = useState<number | string>(settings.pomodoroTime)
	const [breakInput, setBreakInput] = useState<number>(settings.breakTime)

	const [validatePmd, setValidatePmd] = useState<boolean>(true)
	const [validateBreak, setValidateBreak] = useState<boolean>(true)

	// TODO: KEYBINDS
	// Start or stop timer
	const [timeControlKey, setTimeControlKey] = useState("")
	// Reset timer
	const [resetKey, setResetKey] = useState("")
	// Break key
	const [breakKey, setBreakKey] = useState("")

	const handleAutoMode = () => {
		setAutoMode(!autoMode)
	}

	const handleBreakTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newTime = Number(e.target.value)

		setBreakInput(newTime)

		if(newTime === 0) setValidateBreak(false)
		else {
			if(newTime > 0 && newTime <= 60 ) setValidateBreak(true)
			else {
				setValidateBreak(false)
			}
		}
	}

	const handlePmdTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newTime = Number(e.target.value)

		setPmdInput(newTime)

		if(newTime === 0) setValidatePmd(false)
		else {
			if(newTime > 0 && newTime <= 60 ) setValidatePmd(true)
			else {
				setValidatePmd(false)
			}
		}
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if(validatePmd && validateBreak) {
			setAuto(autoMode)
			setPomodoroTime(Number(pmdInput))
			setBreakTime(breakInput)

			setVisibility(false);
		}
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
						<span className="ml-4">Auto Mode</span>
					</button>
					<div className="mt-8 flex justify-between flex-row">
						<div className="flex flex-col">
							<p>Pomodoro time (in minutes)</p>
							<input
								type="number"
								value={pmdInput !== 0 ? pmdInput : ''}
								className={validatePmd ? "input-valid" : "input-invalid"}
								onChange={handlePmdTimeChange}
							/>
						</div>
						<div>
							<p>Break time (in minutes)</p>
							<input
								type="number"
								value={breakInput !== 0 ? breakInput : ''}
								className={validateBreak ? "input-valid" : "input-invalid"}
								onChange={handleBreakTimeChange}
							/>
						</div>
					</div>
					{!validatePmd ? 
						<p className="flex items-center justify-center mt-4">
							<ImWarning color="red" />
							<span className="ml-4 text-red-500">Pomodoro time must be between 1 and 60 minutes</span>
						</p> : ""
					}
					{!validateBreak ? 
						<p className="flex items-center justify-center mt-4">
							<ImWarning color="red" />
							<span className="ml-4 text-red-500">Break time must be between 1 and 60 minutes</span>
						</p> : ""
					}
					<button type="submit" className="submit-btn group overflow-hidden">
						<span className="absolute bg-slate-800 w-60 h-20 left-0 top-10 group-hover:top-0 ease-out duration-300"></span>
						<span className="relative">Save & Close</span>
					</button>
				</div>
			</div>
		</form>
  ) : "";
}

export default Settings