/**
 * ************************************
 *
 * @module  App.js
 * @author Donald Blanc
 * @date
 * @description main app entry for react
 *
 * ************************************
 */

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import userPage from "./pages/loggedin";
import home from "./pages/home"


class App extends React.Component {

  render() {
    return (
        <Router>
          <Route exact path="/" component={home} />
          <Route exact path="/login" component={userPage} />
        </Router>
    );
  }
}
export default App;
