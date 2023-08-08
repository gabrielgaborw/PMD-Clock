import React, { createContext, useState } from 'react'

interface SettingsContextType {
	settings: Settings;
	setAuto: React.Dispatch<React.SetStateAction<boolean>>;
	setPomodoroTime: React.Dispatch<React.SetStateAction<number>>;
	setBreakTime: React.Dispatch<React.SetStateAction<number>>;
}

interface Settings {
	auto: boolean;
	pomodoroTime: number;
	breakTime: number;
}

const defaultValue: SettingsContextType = {
	settings: {
		auto: true,
		pomodoroTime: 1500,
		breakTime: 300,
	},
	setAuto: () => {},
	setPomodoroTime: () => {},
	setBreakTime: () => {},
}

export const SettingsContext = createContext<SettingsContextType>(defaultValue)

export const SettingsProvider = (props: { children: React.ReactNode } ) => {
	const [auto, setAuto] = useState<boolean>(defaultValue.settings.auto)
	const [pomodoroTime, setPomodoroTime] = useState<number>(defaultValue.settings.pomodoroTime)
	const [breakTime, setBreakTime] = useState<number>(defaultValue.settings.breakTime)

	const settings: Settings = {
		auto,
		pomodoroTime,
		breakTime,
	}

	return (
		<SettingsContext.Provider value={{ settings, setAuto, setPomodoroTime, setBreakTime }}>{props.children}</SettingsContext.Provider>
	)
}