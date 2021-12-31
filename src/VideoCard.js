import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './videocard.css'

const VideoCard = ({ image, title, channel, views, timestamp, channelImage }) => {
	return (
		<div className='VideoCard'>
			<img className='videoCard_thumnail' src={image} alt="" />
			<div className='videoCard_info'>
				<Avatar className="VideoCard_avatar" alt={channel} src={channelImage}
				/>

				<div className='video_text'>
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views}.{timestamp}
					</p>
				</div>
			</div>
		</div>
	)
}

export default VideoCard
