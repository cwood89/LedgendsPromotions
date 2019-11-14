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
    let type;
    if (this.type.value === "Artist") {
      type = "artist/"
    }
    else if (this.type.value === "Song") {
      type = "song/"
    }
    else if (this.type.value === "All") {
      type = ""
    }
    axios.get(`${API_URL}${type}${this.state.query}`)
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


  render() {
    return (
      <>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Find a song..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <select
            id="type-val"
            ref={input => this.type = input}>
            <option>All</option>
            <option>Song</option>
            <option>Artist</option>
          </select>
          <button onClick={this.getResults} >Search</button>
        </form>
        <Results data={this.state.results} />
      </>
    )
  }
}

export default Search