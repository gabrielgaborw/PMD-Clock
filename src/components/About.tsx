import React from 'react'

import { IoCloseSharp } from 'react-icons/io5'

const About = (props: { visibility: boolean, setVisibility: React.Dispatch<React.SetStateAction<boolean>>}) => {
	const { visibility, setVisibility } = props

  return visibility ? (
    <div className="popup-background">
			<div className="popup-content">
				<h3 className="text-3xl">About</h3>
				<button onClick={() => setVisibility(false)}>
					<IoCloseSharp color="red" className="absolute top-2 right-2 h-8 w-8" />
				</button>
				<p className="text-justify">
					The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
					It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. 
					Each interval is known as a pomodoro, from the Italian word for tomato, 
					after the tomato-shaped kitchen timer Cirillo used as a university student.
				</p>
				<br />
				<p className="text-justify">The original technique has six steps:</p>
				<ul className="text-justify list-disc list-outside pl-8">
						<li>Decide on the task to be done.</li>
						<li>Set the Pomodoro timer (typically for 25 minutes).</li>
						<li>Work on the task.</li>
						<li>End work when the timer rings and take a short break (typically 5–10 minutes).</li>
						<li>Go back to Step 2 and repeat until you complete four pomodoros.</li>
						<li>After four pomodoros are done, take a long break (typically 20 to 30 minutes) instead of a short break. Once the long break is finished, return to step 2.</li>
				</ul>
				<p className="text-right italic">— from <a className="underline text-blue-600" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a></p>
			</div>
		</div>
  ) : ""
}

export default About