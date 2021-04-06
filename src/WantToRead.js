import React from 'react';
import Book from './Book';

function WantToRead(props){
    return(                
    <div className="bookshelf">
    <h2 className="bookshelf-title">Want to Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      {(props.wantToRead && props.wantToRead.length > 0)&&
                              props.wantToRead.map((book) => {
                                return( 
                                    <li key = {book.id}><Book 
                                                            book = {book} 
                                                            addCurrentlyReading = {props.addCurrentlyReading} 
                                                            addWantToRead = {props.addWantToRead} 
                                                            addRead = {props.addRead}
                                                            removeCurrentlyReading = {props.removeCurrentlyReading}
                                                            removeWantToRead = {props.removeWantToRead}
                                                            removeRead = {props.removeRead}
                                                            getBookCategory = {props.getBookCategory}/></li>
                                );
                            })
                    }
      </ol>
    </div>
  </div>)
}

export default WantToRead;