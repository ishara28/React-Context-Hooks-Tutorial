import React, { Component } from "react";

export class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>Book one</li>
          <li>Book two</li>
          <li>Book three</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
