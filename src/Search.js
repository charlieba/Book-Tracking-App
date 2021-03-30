import React, { Component } from 'react';

class Search extends Component {

    render (){
        return (              
        <div className="search-books">
            <div className="search-books-bar">
            <button className="close-search" onClick={() => {this.props.history.push("/")}}>
                Close
            </button>
                <div className="search-books-input-wrapper">
                {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" 
                    onChange={(event) => {
                        if(event.target.value && event.target.value.length > 0){
                            this.props.searchBooks(event.target.value)
                        }  
                    }}
                />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {(this.props.searchResult && this.props.searchResult.length > 0)&&
                             this.props.searchResult.map((book) => {
                                return( 
                                <li key = {book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                                );
                            })
                    }
                </ol>
            </div>
      </div>)
    }
}
export default Search