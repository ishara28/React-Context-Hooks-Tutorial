import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// export class ThemeToggle extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const toggleTheme = this.context.toggleTheme;
//     return (
//       <div>
//         <button onClick={toggleTheme}>Toggle Theme!</button>
//       </div>
//     );
//   }
// }

const ThemeToggle = () => {
  const {toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme!</button>
    </div>
  );
};

// export default ThemeToggle;

export default ThemeToggle;
