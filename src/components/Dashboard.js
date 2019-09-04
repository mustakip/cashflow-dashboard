import React from "react";
import "../stylesheet/dashboard.css"

class Dashboard extends React.Component {

  render() {
    const {Component} = this.props;
    return (
      <div className="dashboard">
        <Component/>
      </div>)
  }
}

export default Dashboard;