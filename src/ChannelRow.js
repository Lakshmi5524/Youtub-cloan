import React from 'react'
import './channelrow.css'
import { Avatar } from "@material-ui/core";
import { VerifiedUser } from '@material-ui/icons';

const ChannelRow = ({ image, channel, subs, noOfVideos, descriptions, verified }) => {
	return (
		<div className='chnnelRow'>
			<Avatar className="channelRow_logo" alt={channel} src={image} />
			<div className='channelRow_text'>
				<h4>{channel} {verified && <VerifiedUser />}</h4>

				<p>{subs}subscribers.{noOfVideos}videos</p>
				<p>{descriptions}</p>
			</div>
		</div>
	)
}

export default ChannelRow
