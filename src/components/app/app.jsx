import React from 'react';
import {Provider} from 'react-redux';

import store from '../../store/store.js';

import baseComponent from '../base-component.jsx';
import './app.scss';

import Header from '../header/header.jsx';
import MovieGrid from '../movie-grid/movie-grid.jsx';
import LandingPage from '../landing-page/landing-page.jsx';

import '../../assets/react-logo.png';

export default class App extends baseComponent
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <div className="main">
                    <Header />
                    <MovieGrid />
                    <LandingPage />
                </div>
            </Provider>
        )
    }
}