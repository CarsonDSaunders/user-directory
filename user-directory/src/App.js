import React, { Component } from 'react'
import './App.css';
import InfoCard from './InfoCard';
import Nav from './Nav';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentCardID: 0,
    }

    this.previousCard = this.previousCard.bind(this)
    this.nextCard = this.nextCard.bind(this)

  }

  previousCard() {
    if (this.state.currentCardID === 0) {
      alert('There are no previous cards!')
    } else {
      this.setState({ currentCardID: this.state.currentCardID - 1 })
    }
  }

  nextCard() {
    if (this.state.currentCardID === 24) {
      alert('There are no next cards!')
    } else {
      this.setState({ currentCardID: this.state.currentCardID + 1 })
    }
  }

  render() {
    return (
      <div className='app-container'>
        <div className='header'>
          <button className='text-button home-button'><h2>Home</h2></button>
        </div>
        <div className='card-container'>
          <InfoCard currentCardID={this.state.currentCardID} />
          <Nav currentCardID={this.state.currentCardID} navPreviousCard={this.previousCard} navNextCard={this.nextCard}/>
        </div>
      </div>
    )
  }
}

export default App;
