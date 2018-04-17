import _ from 'lodash';
import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import YoutubeSearch from 'youtube-api-search'; 

//Dev created components
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyAw_FSXyHOuWl5otYcekW6P2jWo9iXjPwY';

class YouTubeApp extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = { videos: [], selectedVideo: null };	
		
		//initialize an initial search using youtube API
		this.videoSearch('I am the way the truth and the life');
		
	}
	
	
	videoSearch(searchTerm) {
		
		//Youtube search will echo out in the console
		YoutubeSearch({ key: API_KEY, term: searchTerm }, (youTubeVideos) => {
			this.setState({ videos: youTubeVideos, selectedVideo: youTubeVideos[0] });
			
			//This refactor works when key and data have the same name.
			//this.setState({ videos: videos }) ==> this.setState({ videos });  
			
			//console.log(data);
		});
		
	}
	
	render() {
		
		const throttledVideoSearch = _.debounce( (searchTerm) => { this.videoSearch(searchTerm) }, 300 );
		
		//changing (term) => this.videoSearch(term) to throttledVideoSearch in order to limit server interaction by throttling response.
		return ( 
				<div>				  
			   	  <SearchBar onSearchTermChange={ throttledVideoSearch } />
			   	  <VideoDetail video={ this.state.selectedVideo }/>
			   	  <VideoList 
			   	  	 onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) }
			   	     videos={ this.state.videos } />
			    </div>
		);
	}
}; //end class


// should Insert APP inserted into the DOM. 
//In other words, put it on the page. 
var app = React.createElement(YouTubeApp, null);
//ReactDom.render(<App/>, document.querySelector('.container') );
ReactDom.render(app, document.querySelector('.container') );