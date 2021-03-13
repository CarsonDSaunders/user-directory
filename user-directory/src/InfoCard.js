import React, { Component } from 'react';
import Data from './Data';

class InfoCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(Data)
        return (
            <div className='card'>
                <h1 className='arr-position'>{`${Data[this.props.currentCardID].id}/${Data.length}`}</h1>
                <div className='card-inner'>
                    <h1 className='name'>{`${Data[this.props.currentCardID].name.first} ${Data[this.props.currentCardID].name.last}`}</h1>
                    <br />
                    <h2>From: <span className='detail'>{`${Data[this.props.currentCardID].city}, ${Data[this.props.currentCardID].country}`}</span></h2>
                    <h2>Job Title: <span className='detail'>{`${Data[this.props.currentCardID].title}`}</span></h2>
                    <h2>Employer: <span className='detail'>{`${Data[this.props.currentCardID].employer}`}</span></h2>
                    <br />
                    <h2>Favorite Movies:</h2>
                    <ol className='detail list'>
                        <h2 className='detail'><li><span className='detail list-item'>{`${Data[this.props.currentCardID].favoriteMovies[0]}`}</span></li></h2>
                        <h2 className='detail'><li><span className='detail list-item'>{`${Data[this.props.currentCardID].favoriteMovies[1]}`}</span></li></h2>
                        <h2 className='detail'><li><span className='detail list-item'>{`${Data[this.props.currentCardID].favoriteMovies[2]}`}</span></li></h2>
                    </ol>
                </div>
            </div>
        )
    }
}

export default InfoCard;