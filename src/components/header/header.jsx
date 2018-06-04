import React from 'react';
import {connect} from 'react-redux';

import baseComponent from '../base-component.jsx';

import './header.scss';
import iconSearch from './img/magnify.svg';

import SortControl from '../sort-control/sort-control.jsx';

class Header extends baseComponent
{
    constructor(props) {
        super(props);

        this.triggerSearch = this.triggerSearch.bind(this);
    }

    triggerSearch(e) {

        if (e.type === 'keyup' && e.keyCode !== 13) {
            return;
        }

		this.props.search(this.refs.txtSearch.value.trim());
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        let {sort} = this.props;

        return (
            <header>
                <div className="header-area">
                    <div className="text-wrapper">
                        <input type="text" autoFocus className="txt-search" ref="txtSearch" onKeyUp={this.triggerSearch} />
                        <a href="#" className="btn-search" onClick={this.triggerSearch}>
                            <img src={iconSearch} width="24" height="24" />
                        </a>
                    </div>
                    <SortControl onChange={sort} />
                </div>
            </header>
        )
    }
}

function mapDispatchToProps(dispatch) {
	return {
		search: function(query) {
			dispatch({type: 'SEARCH', searchQuery: query});
		},
		sort: function(query) {
			dispatch({type: 'SORT', sortQuery: query});
		}
	}
};

export default connect(null, mapDispatchToProps)(Header);
