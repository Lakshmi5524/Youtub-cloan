import React from 'react'
import './videorow.css'
const VideoRow = ({ views, subs, description, timestamp, channel, title, image }) => {
	return (
		<div className='videorow'>
			<img src={image} alt="" />
			<div className='videoRow_text'>
				<h3>{title}</h3>
				<p className='videoRow_headline'>
					{channel}. <span className='videoRow_subnumber'>{subs}</span> Subscibers{views}.{timestamp}
				</p>
				<p className='videoRow_description'>{description}</p>
			</div>
		</div >
	)
}

export default VideoRow
