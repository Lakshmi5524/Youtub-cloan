import React, { useState } from 'react'
import { Menu, Search, VideoCall, Apps, Notifications } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import './header.css'
import { Link } from "react-router-dom"
const Header = () => {

	const [inputSearch, setInputSearch] = useState('')
	return (
		<div className='header'>
			<div className='header_left'>
				<Menu />
				<Link to="/">
					<img className='heder_logo'
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
						alt="Logo"
					/>
				</Link>
			</div>
			<div className='heder_input'>
				<input
					onChange={e => setInputSearch(e.target.value)}
					value={inputSearch}
					placeholder="Search"
					type=" text" />
				<Link to={`/search/${inputSearch}`}>
					<Search className="input_button" />
				</Link>
			</div>

			<div className='header_icon'>
				<VideoCall />
				<Apps />
				<Notifications />
				<Avatar
					alt="Sonny Sangha"
					src="https://i.pinimg.com/236x/2d/a9/a5/2da9a5eb1e6e967faad27d223faa38a2--matthew-pollock-img-models.jpg"
				/>
			</div>
		</div >
	)
}

export default Header
