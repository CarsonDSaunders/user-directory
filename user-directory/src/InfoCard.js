import React, { Component } from 'react';

class InfoCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.currentDir[this.props.currentCardID].name.first === 'USER DELETED') {
            return (
                <div className='card'>
                <h1 className='arr-position'>{`${this.props.currentDir[this.props.currentCardID].id}/${this.props.currentDir.length}`}</h1>
                <div className='card-inner'></div>
                <h1 className='name'>{`${this.props.currentDir[this.props.currentCardID].name.first}`}</h1>
                <br />
                </div>
            )

        } else {        
        return (
            <div className='card'>
                <h1 className='arr-position'>{`${this.props.currentDir[this.props.currentCardID].id}/${this.props.currentDir.length}`}</h1>
                <div className='card-inner'></div>
                <h1 className='name'>{`${this.props.currentDir[this.props.currentCardID].name.first} ${this.props.currentDir[this.props.currentCardID].name.last}`}</h1>
                <br />
                <h2>From: <span className='detail'>{`${this.props.currentDir[this.props.currentCardID].city}, ${this.props.currentDir[this.props.currentCardID].country}`}</span></h2>
                <h2>Job Title: <span className='detail'>{`${this.props.currentDir[this.props.currentCardID].title}`}</span></h2>
                <h2>Employer: <span className='detail'>{`${this.props.currentDir[this.props.currentCardID].employer}`}</span></h2>
                <br />
                <h2>Favorite Movies:</h2>
                <ol className='detail'>
                    <h2 className='detail'><li><span className='detail'>{`${this.props.currentDir[this.props.currentCardID].favoriteMovies[0]}`}</span></li></h2>
                    <h2 className='detail'><li><span className='detail'>{`${this.props.currentDir[this.props.currentCardID].favoriteMovies[1]}`}</span></li></h2>
                    <h2 className='detail'><li><span className='detail'>{`${this.props.currentDir[this.props.currentCardID].favoriteMovies[2]}`}</span></li></h2>
                </ol>
            </div>
        )
        }
    }
}

export default InfoCard;