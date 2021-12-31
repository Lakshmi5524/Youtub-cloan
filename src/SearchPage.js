import React from 'react'
import './searchpage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import { TuneOutlined } from '@material-ui/icons';

const SearchPage = () => {
	return (
		<div className='searchpage'>
			<div className='searchPage_filter'>
				<TuneOutlined />
				<h2>Fillter</h2>
			</div>
			<hr />

			<ChannelRow
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDtKjQ4qAUXHkGoyQya4zGwGyja5BJr3ubw&usqp=CAU.png"
				channel="clever Program"
				verified
				subs="660k"
				noOfVideos={302}
				descriptions="You can find Awsome Programms"
			/>
			<hr />

			<VideoRow
				views="1.4m"
				subs="659k"
				description="Do you want to Free one hour Trainning ....Cheack this out"
				timestamp="59 seconds ago"
				channel="Clever Programmer"
				title="Let's Build a ZOOM cloan with React JS for Beginners "
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFuxs333VWmWJM3FxPCn_ohEDy-37baEbXQ&usqp=CAU.png"

			/>
			<VideoRow
				views="1.4m"
				subs="659k"
				description="Do you want to Free one hour Trainning ....Cheack this out"
				timestamp="59 seconds ago"
				channel="Clever Programmer"
				title="Let's Build a ZOOM cloan with React JS for Beginners "
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0l00GqQC5bzgKH8_EOXaJT8VadWCWidOtig&usqp=CAU"

			/>


			<VideoRow
				views="1.4m"
				subs="659k"
				description="Do you want to Free one hour Trainning ....Cheack this out"
				timestamp="59 seconds ago"
				channel="Clever Programmer"
				title="Let's Build a ZOOM cloan with React JS for Beginners "
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpHcWz2PqTO_6luVdBO9H4LJw_aaF12KMAw&usqp=CAU.png"

			/>

		</div>
	)
}

export default SearchPage
