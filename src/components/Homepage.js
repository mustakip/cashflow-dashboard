import * as React from "react";
import Dashboard from "./Dashboard";
import Options from "./Options";
import HostGame from "./HostGame";
import JoinGame from "./JoinGame";
import PropTypes from "prop-types";
import '../stylesheet/homepage.css';


const components = {
  "host": HostGame,
  "join": JoinGame,
  "options": Options
};

class Homepage extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
  };

  getActionFromPath() {
    const url = this.context.router.location.pathname;
    return url.slice(1);
  }


  render() {
    let action = this.getActionFromPath();
    if (!action) {
      action = "options";
    }
    return <div className="homepage">
      <header>
        <strong className="title">CASHFLOW</strong>
        <p className="sub-header">Get out of the Rat Race !</p>
      </header>
      <Dashboard Component={components[action]}/>
    </div>
  }
}

export default Homepage;