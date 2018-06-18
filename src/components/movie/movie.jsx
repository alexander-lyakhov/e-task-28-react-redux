import React, {PropTypes as pt} from 'react';
import {connect} from 'react-redux';
import baseComponent from '../base-component.jsx';

import './movie.scss';

import Likes from '../likes/likes.jsx';
import Rating from '../rating/rating.jsx';

class Movie extends baseComponent
{
    constructor(props) {
        super(props);

        this.likes = this.props.details.likes;
        this.stars = this.props.details.stars;

        this.changeLikes = this.changeLikes.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.movieTitleClick = this.movieTitleClick.bind(this);
    }

    changeLikes(delta) {
        this.emit('onLikeChange', {id: this.props.details.id, delta: delta});
    }

    changeRating(val) {
        this.emit('onRatingChange', {id: this.props.details.id, stars: val});
    }

    shouldComponentUpdate(nextProps, nextState) {

        let res = (nextProps.details.likes !== this.likes) || (nextProps.details.stars !== this.stars);

        this.likes = nextProps.details.likes;
        this.stars = nextProps.details.stars;

        return res;
    }

    movieTitleClick() {
        this.emit('onMovieTitleClick', this.props.details);
    }

    render() {
        let {id, posterUrl: image, title, stars, likes} = this.props.details;

        //console.log('movie: render');

        return (
            <div className='movie-placeholder' key={id}>
                <div className='movie-card'>

                    <div className="thumbnail">
                        <img src={image} width="256" height="256" />
                    </div>

                    <div className="info">
                        <h2 onClick={this.movieTitleClick}>{title}</h2>

                        <div className="status">
                            <Likes value={likes} onChange={this.changeLikes}/>
                            <Rating value={stars} onChange={this.changeRating}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Movie.propTypes = {
	details: pt.object.isRequired
}

function mapDispatchToProps(dispatch) {
	return {
		toggleLandingPage: function() {
			dispatch({type: 'TOGGLE_LANDING'});
		}
	}
};

export default connect(null, mapDispatchToProps)(Movie);