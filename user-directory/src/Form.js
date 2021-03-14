import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                id: null,
                name: { first: "", last: "" },
                city: "",
                country: "",
                employer: "",
                title: "",
                favoriteMovies: [
                "",
                "",
                "",
        ]
            }
        
        }

    }

    handleChangeFirstName(val) {
        this.setState({
            newUser : {...this.state.newUser, name: { first: val, last: this.state.newUser.name.last}}
        })
    }

    handleChangeLastName(val) {
        this.setState({
            newUser : {...this.state.newUser, name: { first: this.state.newUser.name.first, last: val}}
        })
    }

    handleChangeCity(val) {
        this.setState({
            newUser : {...this.state.newUser, city: val}
        })
    }

    handleChangeCountry(val) {
        this.setState({
            newUser : {...this.state.newUser, country: val}
        })
    }

    handleChangeTitle(val) {
        this.setState({
            newUser : {...this.state.newUser, title: val}
        })
    }

    handleChangeEmployer(val) {
        this.setState({
            newUser : {...this.state.newUser, employer: val}
        })
    }

    handleChangeMovieOne(val) {
        let intArr = [...this.state.newUser.favoriteMovies]
        intArr.splice(0, 1, val)
        this.setState({
            newUser : {...this.state.newUser, favoriteMovies: intArr}
        })
    }

    handleChangeMovieTwo(val) {
        let intArr = [...this.state.newUser.favoriteMovies]
        intArr.splice(1, 1, val)
        this.setState({
            newUser : {...this.state.newUser, favoriteMovies: intArr}
        })
    }

    handleChangeMovieThree(val) {
        let intArr = [...this.state.newUser.favoriteMovies]
        intArr.splice(2, 1, val)
        this.setState({
            newUser : {...this.state.newUser, favoriteMovies: intArr}
        })
    }

    render() {
        return (
            <div className='card'>
                <div className='card-inner'></div>
                <h2>First Name: <input className='name' onChange={e => this.handleChangeFirstName(e.target.value)}></input></h2>
                <h2>Last Name: <input className='name' onChange={e => this.handleChangeLastName(e.target.value)}></input></h2>
                <br />
                <h2>City: <input className='detail' onChange={e => this.handleChangeCity(e.target.value)}></input></h2>
                <h2>Country: <input className='detail' onChange={e => this.handleChangeCountry(e.target.value)}></input></h2>
                <h2>Job Title: <input className='detail' onChange={e => this.handleChangeTitle(e.target.value)}></input></h2>
                <h2>Employer: <input className='detail' onChange={e => this.handleChangeEmployer(e.target.value)}></input></h2>
                <br />
                <h2>Favorite Movies:</h2>
                <ol className='detail'>
                    <h2 className='detail'><li><input className='detail' onChange={e => this.handleChangeMovieOne(e.target.value)}></input></li></h2>
                    <h2 className='detail'><li><input className='detail' onChange={e => this.handleChangeMovieTwo(e.target.value)}></input></li></h2>
                    <h2 className='detail'><li><input className='detail' onChange={e => this.handleChangeMovieThree(e.target.value)}></input></li></h2>
                </ol>
                <button className='edit-button' onClick={() => this.props.handleNewSubmit(this.state.newUser)}>Submit</button>
            </div>
        )
    }

}

export default Form;