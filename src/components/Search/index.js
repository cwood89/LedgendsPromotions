import React, { Component } from 'react'
import axios from 'axios'

import Results from '../Results'
const API_URL = 'http://localhost:5000/api/search/'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getResults = () => {
    axios.get(`${API_URL}${this.state.query}`)
      .then(({ data }) => {

        this.setState({
          results: data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getResults()
        }
      }
    })
  }

  searchSong = (e) => {
    e.preventDefault();
    // add functionality to search song or artist.
  }


  render() {
    return (
      <>
        <form onSubmit={this.searchSong}>
          <input
            placeholder="Find a song..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <button type='submit'>Search</button>
        </form>
        <Results data={this.state.results} />
      </>
    )
  }
}

export default Search