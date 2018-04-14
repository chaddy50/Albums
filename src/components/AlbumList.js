import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

	// Default our state to an empty list of Albums
	state = { albums: [] };

	// Gets called when component is going to be rendered on device
	componentWillMount() {
		// Set our state to the list of Albums that we will display
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}

	// Gets called from component reference
	render() {
		console.log(this.state);
		
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;
