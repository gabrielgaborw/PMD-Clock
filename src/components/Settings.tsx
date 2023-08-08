import React, { createContext, useState } from 'react'

import { IoCloseSharp } from 'react-icons/io5'

const Settings = (props: { visibility: boolean, setVisibility: React.Dispatch<React.SetStateAction<boolean>>}) => {
	const { visibility, setVisibility } = props
	const [autoMode, setAutoMode] = useState<boolean>(true)
	const [pomodoroTime, setPomodoroTime] = useState<number>(1500)
	const [breakTime, setBreakTime] = useState<number>(300)
	// TODO: KEYBINDS
	// Start or stop timer
	const [ssTime, setSSTime] = useState("")
	// Reset timer
	const [reset, setReset] = useState("")
	// Break key
	const [breakKey, setBreakKey] = useState("")

  return visibility ? (
    <div className="popup-background">
			<div className="popup-content">
				<h3 className="text-3xl">Settings</h3>
				<button onClick={() => setVisibility(false)}>
					<IoCloseSharp color="red" className="absolute top-2 right-2 h-8 w-8" />
				</button>
			</div>
		</div>
  ) : "";
}

export default Settings