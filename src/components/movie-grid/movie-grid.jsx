import React, {PropTypes as pt} from 'react';
import {connect} from 'react-redux';

import baseComponent from '../base-component.jsx';

import './movie-grid.scss';
import data from './data.json';

import Movie from '../movie/movie.jsx';

class MovieGrid extends baseComponent
{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fillMovieList(data);
	}

	get sortedData() {

		let {sortQuery} = this.props;
		let {movieList: arr} = this.props;

		if (sortQuery === 'nosort') {
			return arr;
		}

		return [...arr].sort(function(a, b) {
			if (+a[sortQuery] < +b[sortQuery]) {
				return 1;
			}

			if (+a[sortQuery] > +b[sortQuery]) {
				return -1;
			}

			return 0;
		});
	}

	get movies() {

		let {searchQuery} = this.props;

		let arr = this.sortedData.filter((item, index) => {
			return item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) === 0;
		});

		if (arr.length) {
			return arr.map((item) => <Movie key={item.id} details={item} />);
		}
		else {
			return <div className="no-resalt">Nothing found</div>;
		}
	}

	render() {

		//console.log('movie-grid: render');

		return (
			<div className='movies'> {this.movies} </div>
		)
	}
}

MovieGrid.propTypes = {
	searchQuery: pt.string.isRequired,
	sortQuery: pt.string.isRequired
};

function mapStateToProps(state) {
	return {
		searchQuery: state.app.searchQuery,
		sortQuery: state.app.sortQuery,
		movieList: state.movieList
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fillMovieList: function(arr) {
			dispatch({type: 'MOVIE_LIST.POPULATE', data: arr});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);