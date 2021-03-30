import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';
import Search from './Search';
import { Link, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    searchResult: []
  }


searchBooks = (text) => {
    BooksAPI.search(text)
    .then((result)=>{
        this.setState(()=>({
            searchResult: result
            }
        ));
    })
}

cleanSearch = () =>{
  this.setState(()=>({
      searchResult: []
    } ));
    console.log("entra aqui")
}
  render() {
    return (
      <div className="app">
        <Route path='/AddABook' render = {({ history })=> (
              <Search 
                history = {history}
                searchBooks = { this.searchBooks } 
                searchResult = {this.state.searchResult}
                cleanSearch = {this.cleanSearch}/>
        )}/>

        <Route exact path='/' render = {()=> (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                  <CurrentlyReading/>
                  <WantToRead/>
                  <Read/>
                  </div>
                </div>
                <div className="open-search">
                           
                  <Link to='/AddABook'>
                    <button onClick={() => this.cleanSearch()}></button>
                  </Link>
                
                </div>
              </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
