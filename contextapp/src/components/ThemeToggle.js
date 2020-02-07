import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const toggleTheme = this.context.toggleTheme;
    return (
      <div>
        <button onClick={toggleTheme}>Toggle Theme!</button>
      </div>
    );
  }
}

export default ThemeToggle;
