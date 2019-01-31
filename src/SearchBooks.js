import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = query => {
    this.setState({ query })
    this.updateSearch(query)
  }

  updateSearch = query => {
    if (query) {
      BooksAPI.search(query).then(searchedBooks => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] })
        } else {
          this.setState({ searchedBooks })
        }
      })
    } else {
      this.setState({ searchedBooks: [] })
    }
  }

  render() {

    const {books, onMoveBook} = this.props
    const {query, searchedBooks} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map(searchedBook => {
              let shelf = 'none'

              books.map(book => (
                (book.id === searchedBook.id) && (shelf = book.shelf)
              ))

              return (
                <li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    shelfMoveBook={onMoveBook}
                    currentShelf={shelf}
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks