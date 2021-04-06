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
    searchResult: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
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
}

addCurrentlyReading = (book) =>{
  this.setState((currentState)=> ({
    currentlyReading: currentState.currentlyReading.concat([book])
  }));
}

addWantToRead = (book) => {
  this.setState((currentState)=>({
    wantToRead : currentState.wantToRead.concat([book])
  }));
}

addRead = (book) => {
  this.setState((currentState)=>({
    read: currentState.read.concat([book])
  }))
}

removeCurrentlyReading = (bookToRemove)=>{
  this.setState((currentState)=>({
    currentlyReading: currentState.currentlyReading.filter((book) => {
      return book.id !== bookToRemove.id
    })
  }));
}
removeWantToRead = (bookToRemove)=>{
  this.setState((currentState)=>({
    wantToRead: currentState.wantToRead.filter((book) => {
      return book.id !== bookToRemove.id
    })
  }));
}
removeRead = (bookToRemove)=>{
  this.setState((currentState)=>({
    read: currentState.read.filter((book) => {
      return book.id !== bookToRemove.id
    })
  }));
}
getBookCategory = (bookToCheck)=> {
  const currentlyReading = this.state.currentlyReading.filter((book)=>{
    return (bookToCheck.id === book.id)
  });
  const wantToRead = this.state.wantToRead.filter((book)=>{
    return (bookToCheck.id === book.id)
  });
  const read = this.state.read.filter((book)=>{
    return (bookToCheck.id === book.id)
  });
  if(currentlyReading.length>0){
    return 'currentlyReading';
  }else if(wantToRead.length>0){
    return 'wantToRead';
  }else if(read.length>0){
    return 'read';
  }else {
    return 'none';
  }
}

  render() {
    return (
      <div className="app">
        <Route path='/AddABook' render = {({ history })=> (
              <Search 
                history = {history}
                searchBooks = { this.searchBooks } 
                searchResult = {this.state.searchResult}
                cleanSearch = {this.cleanSearch}
                addCurrentlyReading = {this.addCurrentlyReading} 
                addWantToRead = {this.addWantToRead}
                addRead = {this.addRead} 
                
                removeCurrentlyReading = {this.removeCurrentlyReading}
                removeWantToRead = {this.removeWantToRead}
                removeRead = {this.removeRead}
                getBookCategory = {this.getBookCategory}/>
        )}/>

        <Route exact path='/' render = {()=> (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                  <CurrentlyReading
                    CurrentlyReading = {this.state.currentlyReading}
                    addCurrentlyReading = {this.addCurrentlyReading} 
                    addWantToRead = {this.addWantToRead}
                    addRead = {this.addRead} 
                    
                    removeCurrentlyReading = {this.removeCurrentlyReading}
                    removeWantToRead = {this.removeWantToRead}
                    removeRead = {this.removeRead}
                    getBookCategory = {this.getBookCategory}/>
                  <WantToRead
                    wantToRead = {this.state.wantToRead}
                    addCurrentlyReading = {this.addCurrentlyReading} 
                    addWantToRead = {this.addWantToRead}
                    addRead = {this.addRead} 
                    
                    removeCurrentlyReading = {this.removeCurrentlyReading}
                    removeWantToRead = {this.removeWantToRead}
                    removeRead = {this.removeRead}
                    getBookCategory = {this.getBookCategory}/>
                  <Read
                    read = {this.state.read}
                    addCurrentlyReading = {this.addCurrentlyReading} 
                    addWantToRead = {this.addWantToRead}
                    addRead = {this.addRead} 
                    
                    removeCurrentlyReading = {this.removeCurrentlyReading}
                    removeWantToRead = {this.removeWantToRead}
                    removeRead = {this.removeRead}
                    getBookCategory = {this.getBookCategory}/>
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
