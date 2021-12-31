import React from 'react'
import { Icon } from '@material-ui/icons';
import './sidebarow.css'
const SidebarRow = ({ selected, Icon, title }) => {
	return (
		<div className="sidebarrow">
			<Icon className="sidebarRow_icon" />
			<h5 className='sidebarRow_title'	> {title}</h5 >
		</div>

	)
}

export default SidebarRow
