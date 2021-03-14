import React, { Component } from 'react'
import './App.css';
import InfoCard from './InfoCard';
import Nav from './Nav';
import Data from './Data'
import Form from './Form'

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentCardID: 0,
      directory: Data,
    }

    this.previousCard = this.previousCard.bind(this)
    this.nextCard = this.nextCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.addNew = this.addNew.bind(this)

  }

  previousCard() {
    if (this.state.currentCardID === 0) {
      alert('There are no previous cards!')
    } else {
      this.setState({ currentCardID: this.state.currentCardID - 1 })
    }
  }

  nextCard() {
    if (this.state.currentCardID === this.state.directory.length - 1) {
      alert('There are no next cards!')
    } else {
      this.setState({ currentCardID: this.state.currentCardID + 1 })
    }
  }

  deleteCard() {
    let intDir = [...this.state.directory]
    intDir.splice(this.state.currentCardID, 1, { id: this.state.directory[this.state.currentCardID].id, name: { first: "USER DELETED" } })
    this.setState({ directory: intDir })
  }

  addNew(newUser) {
    let intDir = [...this.state.directory];
        newUser.id = intDir.length + 1;
        intDir.push(newUser)
        this.setState({ directory: intDir })
      }


  render() {
    return (
      <div className='app-container'>
        <div className='header'>
          <button className='text-button home-button'><h2>Home</h2></button>
        </div>
        <div className='card-container'>
          <InfoCard currentCardID={this.state.currentCardID} currentDir={this.state.directory} />
          <Nav currentCardID={this.state.currentCardID} navPreviousCard={this.previousCard} navNextCard={this.nextCard} deleteCurrentCard={this.deleteCard} />
          <Form handleNewSubmit={this.addNew} />
        </div>
      </div>
    )
  }
}

export default App;
