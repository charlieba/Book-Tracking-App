import React from 'react';
import Book from './Book';

function Read(props){
    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {(props.read && props.read.length > 0)&&
                              props.read.map((book) => {
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
      </div>
    )
}

export default Read