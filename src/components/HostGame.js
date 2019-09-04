import * as React from "react";

class HostGame extends React.Component {
  render() {
    return (
      <form className="hosting-form" action="/lobby" method="POST">
        <input className="host-name"/>
        <input type="number" max={6} min={2} required={true} defaultValue={2}/>
        <button type="submit"> Host</button>
      </form>)
  }
}

export default HostGame;