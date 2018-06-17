import React from 'react';
import {Provider, connect} from 'react-redux';

import store from '../../store/store.js';

import baseComponent from '../base-component.jsx';
import './app.scss';

import Header from '../header/header.jsx';
import MovieGrid from '../movie-grid/movie-grid.jsx';
import LandingPage from '../landing-page/landing-page.jsx';

import '../../assets/react-logo.png';

class App extends baseComponent
{
    constructor(props) {
        super(props);

        this.state = {
            //isLandingOpen: false,
            landingPageDetails: {}
        };

        //this.showLandingPage = this.showLandingPage.bind(this);
        //this.hideLandingPage = this.hideLandingPage.bind(this);
    }

    showLandingPage(data) {
        this.setState({
            //isLandingOpen: true,
            landingPageDetails: data
        });
    }

    hideLandingPage() {
        //this.setState({isLandingOpen: false});
    }

    render() {
        return (
            <Provider store={store}>
                <div className="main">
                    <Header />

                    <MovieGrid
                        onMovieTitleClick={this.showLandingPage}
                    />

                    <LandingPage
                        isOpen={this.state.isLandingOpen}
                        details={this.state.landingPageDetails}
                        onClose={this.hideLandingPage}
                    />
                </div>
            </Provider>
        )
    }
}

function mapDispatchToProps(dispatch) {
	return {
		toggleLandingPage: function() {
			dispatch({type: 'TOGGLE_LANDING'});
		}
	}
};

export default connect(null, mapDispatchToProps)(App);