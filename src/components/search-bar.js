import React, { Component } from 'react';

class SearchBar extends Component {
	
	constructor( props ) {
		super(props);
		
		this.state = { term: '' };
	}
	
	render() {
		return ( 
				<div className="search-bar">
				  <input
					  	placeholder="Create a search"
				  		value = { this.state.term }
				     	onChange={ (event) => this.onInputChange(event.target.value) }  /> 
			      <br/> Value of the input: { this.state.term }
				</div>
	    );
	}
	
	/**
	 * Take in users search terms
	 */
	onInputChange(searchTerm) {
		this.setState({ term: searchTerm });
		this.props.onSearchTermChange(searchTerm);
	}
	
}




export default SearchBar;