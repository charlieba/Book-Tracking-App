import React, { Component } from 'react';
import Book from './Book';

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
                                    <li key = {book.id}><Book 
                                                            book = {book} 
                                                            addCurrentlyReading = {this.props.addCurrentlyReading} 
                                                            addWantToRead = {this.props.addWantToRead} 
                                                            addRead = {this.props.addRead}
                                                            removeCurrentlyReading = {this.props.removeCurrentlyReading}
                                                            removeWantToRead = {this.props.removeWantToRead}
                                                            removeRead = {this.props.removeRead}
                                                            getBookCategory = {this.props.getBookCategory}/></li>
                                );
                            })
                    }
                </ol>
            </div>
      </div>)
    }
}
export default Search