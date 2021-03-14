import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='nav-bar'>
                <button className='text-button nav-button' onClick={this.props.navPreviousCard}><h2 className='nav-button'>{`< Previous`}</h2></button>
                <div className='edit-bar'>
                    <button className='edit-button'>Edit</button>
                    <button className='edit-button' onClick={this.props.deleteCurrentCard}>Delete</button>
                    <button className='edit-button'>New</button>
                </div>
                <button className='text-button' onClick={this.props.navNextCard}><h2 className='nav-button'>{`Next >`}</h2></button>
            </div>
        )
    }
}

export default Nav;