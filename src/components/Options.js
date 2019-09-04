import * as React from "react";
import PropTypes from 'prop-types';

class Options extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
  };

  hostGame = () => {
    this.context.router.push({pathname: "/host"})
  };

  joinGame = () => {
    this.context.router.push({pathname: "/join"})
  };

  render() {
    return (
      <div className="options">
        <button className="option" onClick={this.hostGame}>Host Game</button>
        <button className="option" onClick={this.joinGame}>Join Game</button>
      </div>
    );
  }
}

export default Options;