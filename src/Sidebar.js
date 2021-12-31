import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import { Home, Whatshot, Subscriptions, VideoLibrary, History, OndemandVideo, WatchLater, ThumbUpAltOutlined, ExpandMoreOutlined } from '@material-ui/icons';
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<SidebarRow Icon={Home} title='HOME' />
			<SidebarRow Icon={Whatshot} title="Trending" />
			<SidebarRow Icon={Subscriptions} title="Subscription" />
			<hr />
			<SidebarRow Icon={VideoLibrary} title="Library" />
			<SidebarRow Icon={History} title="History" />
			<SidebarRow Icon={OndemandVideo} title="Your Videos" />
			<SidebarRow Icon={WatchLater} title="watch later" />
			<SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
			<SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
			<hr />
		</div>
	)
}

export default Sidebar
