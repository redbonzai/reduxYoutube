import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
	console.log(video);
	
	const imageUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;
	const videoEtag = video.etag;
	const videoId = video.id.videoId;
	//const video = props.video;
	
	return (
			<li onClick={ () => onVideoSelect(video) } className="list-group-item" id={ videoId }>
				<div className="video-list-media">
					<div className="media-left">
						<img className="medi-object" src={ imageUrl } />
					</div>
						
					<div className="media-body">
						<div className="media-heading">{ videoTitle }</div>
					</div>
				</div>
			</li>
	);
};

export default VideoListItem;