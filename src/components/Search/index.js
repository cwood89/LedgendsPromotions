import React, { Component } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/search/'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getResults = () => {
    axios.get(`${API_URL}${this.state.query}`)
      .then(({ data }) => {
        console.log(data)
        // this.setState({
        //   results: data.data 
        // })
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
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
}

export default Search