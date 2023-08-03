import React from 'react'

import { FaScrewdriverWrench, FaRegCircleQuestion } from 'react-icons/fa6'
import { BsSun, BsMoon } from 'react-icons/bs'

const Navbar = () => {
	return (
    <div className="h-14 flex items-center justify-end flex-row bg-slate-800">
			<h1 className="float-left">
				🍅Pomodoro Clock
			</h1>
			<button>
				<FaRegCircleQuestion className="" />
			</button>
			<button>
				<FaScrewdriverWrench className="" />
			</button>
			<button>
				<BsSun className="" />
				<BsMoon className="" />
			</button>
		</div>
  )
}

export default Navbar