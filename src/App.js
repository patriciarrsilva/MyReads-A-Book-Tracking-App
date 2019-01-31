import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListShelves from './ListShelves'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf        
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))     
    })
  }

  render() {

    const {books} = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListShelves
            books={books}
            onMoveBook={this.moveBook}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            books={books}
            onMoveBook={this.moveBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
