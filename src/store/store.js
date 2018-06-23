import {createStore, combineReducers} from 'redux';

let initState = {

	app: {
    	searchQuery: '',
    	sortQuery: 'nosort',
    	isLandingOpen: false
	},

	movie: {
		details: {}
	},

	movieList: []
}

console.log('state', initState)


/*
 *
 */
function appReducer(state = initState.app, action) {
    //console.log('appState', state, 'action', action)

    if (action.type === 'SEARCH') {
    	return Object.assign({}, state, {searchQuery: action.searchQuery});
    }

    if (action.type === 'SORT') {
    	return Object.assign({}, state, {sortQuery: action.sortQuery});
    }

    if (action.type === 'LANDING.TOGGLE') {
    	return Object.assign({}, state, {isLandingOpen: !state.isLandingOpen});
    }

	return state;
}

/*
 *
 */
function movieReducer(state = initState.movie, action) {
	//console.log('movieState', state, 'action', action)

    if (action.type === 'LANDING.TOGGLE') {
    	return Object.assign({}, state, {details: action.data});
    }

	return state;
}

/*
 *
 */
function movieListReducer(state = initState.movieList, action) {

	//console.log('movieListState', state, 'action', action)

    if (action.type === 'LIKES.CHANGE') {

    	let arr = state.map(function(item) {

    	    let el = Object.assign({}, item);

    		if (el.id === action.data.id) {
    			el.likes += action.data.delta;
    		}

			return el;
    	});

    	return arr;
    }

    if (action.type === 'RATING.CHANGE') {

    	let arr = state.map(function(item) {

    	    let el = Object.assign({}, item);

    		if (el.id === action.data.id) {
    			el.stars = action.data.stars;
    		}

			return el;
    	});

    	return arr;
    }

    if (action.type === 'MOVIE_LIST.POPULATE') {
    	return [...action.data];
    }

    return state;
}

const reducers = combineReducers({
	app: appReducer,
	movie: movieReducer,
	movieList: movieListReducer
});

export default createStore(reducers);
