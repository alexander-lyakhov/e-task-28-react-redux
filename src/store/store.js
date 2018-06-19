import {createStore, combineReducers} from 'redux';

let appState = {
	searchQuery: '',
	sortQuery: 'nosort',
	isLandingOpen: false
};

let movieState = {
	details: {}
};

function appReducer(state = appState, action) {
    console.log('appState', state, 'action', action)

    if (action.type === 'SEARCH') {
    	return Object.assign({}, state, {searchQuery: action.searchQuery});
    }

    if (action.type === 'SORT') {
    	return Object.assign({}, state, {sortQuery: action.sortQuery});
    }

    if (action.type === 'TOGGLE_LANDING') {
    	return Object.assign({}, state, {isLandingOpen: !state.isLandingOpen});
    }

	return state;
}

function movieReducer(state = movieState, action) {
	console.log('movieState', state, 'action', action)

    if (action.type === 'TOGGLE_LANDING') {
    	return Object.assign({}, state, {details: action.data});
    }

	return state;
}

const reducers = combineReducers({
	app: appReducer,
	movie: movieReducer
});

export default createStore(reducers);
