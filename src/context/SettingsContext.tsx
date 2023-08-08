import React, { createContext, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts';

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
		pomodoroTime: 25,
		breakTime: 5,
	},
	setAuto: () => {},
	setPomodoroTime: () => {},
	setBreakTime: () => {},
}

export const SettingsContext = createContext<SettingsContextType>(defaultValue)

export const SettingsProvider = (props: { children: React.ReactNode } ) => {
	const [auto, setAuto] = useLocalStorage<boolean>('auto', defaultValue.settings.auto)
	const [pomodoroTime, setPomodoroTime] = useLocalStorage<number>('pmd-time', defaultValue.settings.pomodoroTime)
	const [breakTime, setBreakTime] = useLocalStorage<number>('break-time', defaultValue.settings.breakTime)

	const settings: Settings = {
		auto,
		pomodoroTime,
		breakTime,
	}

	return (
		<SettingsContext.Provider value={{ settings, setAuto, setPomodoroTime, setBreakTime }}>{props.children}</SettingsContext.Provider>
	)
}