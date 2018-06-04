import React, {PropTypes as pt} from 'react';
import baseComponent from '../base-component.jsx';

import './likes.scss';

import iconLike from './img/icon-like.svg';
import iconDislike from './img/icon-dislike.svg';

class Likes extends baseComponent
{
    constructor(props) {
        super(props);

        this.decreaseLikes = this.decreaseLikes.bind(this);
        this.increaseLikes = this.increaseLikes.bind(this);
    }

    decreaseLikes(e) {
        e.preventDefault();
        this.emit('onChange', -1);
    }

    increaseLikes(e) {
        e.preventDefault();
        this.emit('onChange', 1);
    }

    render() {
        return (
            <div className="likes">
                <a href="#" className="like-icon like-icon__down" onClick={this.decreaseLikes}><img src={iconDislike} width="24" height="24"/></a>
                <div className="like-value">{this.props.value}</div>
                <a href="#" className="like-icon like-icon__up" onClick={this.increaseLikes}><img src={iconLike} width="24" height="24"/></a>
            </div>
        )
    }
}

Likes.propTypes = {
	value: pt.number.isRequired
}

export default Likes;