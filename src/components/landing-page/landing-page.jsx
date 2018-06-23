import React, {PropTypes as pt} from 'react';
import {connect} from 'react-redux';

import './landing-page.scss';
import iconClose from './img/icon-close.svg';
import iconHeart from './img/icon-heart.svg';

import Rating from '../rating/rating.jsx';

function LandingPage(props)
{
    let {isOpen} = props;
    let {title='', posterUrl='', stars=0, likes=0, genres=[], actors=[], director='', description=''} = props.details || {};

    return (
        <div className={'landing-page' + (isOpen ? ' show':'')}>
            <div className="landing-page__content">
                <div className="header">
                    <img src={iconClose} className="btn-close" width="24" height="24" onClick={props.close} />
                </div>

                <img className="poster" src={posterUrl} width="320" />

                <section className="info">
                    <h2>{title}</h2>

                    <div className="row center">
                        <Rating value={stars} />
                    </div>

                    <div className="row center">
                        <img src={iconHeart} width="24" height="24" /> <span className="likes">{likes}</span>
                    </div>

                    <div className="row">
                        <label className="caption">Ganres:</label>
                        <div className="value">{genres.join(', ')}</div>
                    </div>

                    <div className="row">
                        <label className="caption">Actors:</label>
                        <div className="value">{actors.join(', ')}</div>
                    </div>

                    <div className="row">
                        <label className="caption">Director:</label>
                        <div className="value">{director}</div>
                    </div>

                    <div className="row">
                        <label className="caption">description:</label>
                        <div className="value">{description}</div>
                    </div>
                </section>
            </div>
        </div>
    )
}

LandingPage.propTypes = {
    isOpen: pt.bool.isRequired,
	details: pt.object
}

function mapStateToProps(state) {
	return {
		isOpen: state.app.isLandingOpen,
		details: state.movie.details
	}
}

function mapDispatchToProps(dispatch) {
	return {
		close: function() {
			dispatch({type: 'LANDING.TOGGLE'});
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);