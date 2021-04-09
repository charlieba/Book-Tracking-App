import React from 'react';
import Book from './Book';

function CurrentlyReading(props){
    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {(props.CurrentlyReading && props.CurrentlyReading.length > 0)&&
                              props.CurrentlyReading.map((book) => {
                                return( 
                                    <li key = {book.id}><Book 
                                                            book = {book} 
                                                            addCurrentlyReading = {props.addCurrentlyReading} 
                                                            addWantToRead = {props.addWantToRead} 
                                                            addRead = {props.addRead}
                                                            removeCurrentlyReading = {props.removeCurrentlyReading}
                                                            removeWantToRead = {props.removeWantToRead}
                                                            removeRead = {props.removeRead}
                                                            getBookCategory = {props.getBookCategory}
                                                            addNone = {props.addNone}/></li>
                                );
                            })
                    }
          </ol>
        </div>
      </div>
    )
}

export default CurrentlyReading;