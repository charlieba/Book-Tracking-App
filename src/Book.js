import React, { Component } from 'react';

class Book extends Component {
    render (){
        const { book, addCurrentlyReading, addWantToRead, addRead, removeCurrentlyReading, removeWantToRead, removeRead, getBookCategory} = this.props;
        return (            
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={(event) => 
                        {if(event.target.value === "currentlyReading"){
                            addCurrentlyReading(book);
                            removeWantToRead(book);
                            removeRead(book);
                        }else if(event.target.value === "wantToRead"){
                            addWantToRead(book);
                            removeCurrentlyReading(book);
                            removeRead(book);
                        }else if(event.target.value === "read"){
                            addRead(book);
                            removeCurrentlyReading(book);
                            removeWantToRead(book);
                        }else{
                            removeCurrentlyReading(book);
                            removeWantToRead(book);
                            removeRead(book);
                        }
                    }} defaultValue={getBookCategory(book)}>
                        <option value="move" disabled>Move to...</option>
                        <option key="currentlyReading" value="currentlyReading">Currently Reading</option>
                        <option key="wantToRead" value="wantToRead">Want to Read</option>
                        <option key="read" value="read">Read</option>
                        <option key="none" value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        );
    }
}
export default Book;