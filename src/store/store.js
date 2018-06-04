import {createStore} from 'redux';

let initState = {
	searchQuery: '',
	sortQuery: 'nosort'
};

function reducer(state = initState, action) {
    console.log('state', state, action)

    if (action.type === 'SEARCH') {
    	return Object.assign({}, state, {searchQuery: action.searchQuery});
    }

    if (action.type === 'SORT') {
    	return Object.assign({}, state, {sortQuery: action.sortQuery});
    }

	return state;
}

export default createStore(reducer);
