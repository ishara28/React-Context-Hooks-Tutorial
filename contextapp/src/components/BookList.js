import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    console.log(this.context);
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Book one</li>
          <li style={{ background: theme.ui }}>Book two</li>
          <li style={{ background: theme.ui }}>Book three</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
