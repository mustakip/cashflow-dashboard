import React from "react";
import "../stylesheet/dashboard.css"

class Dashboard extends React.Component {
  render() {
    const {Component} = this.props;
    return (<div>
      <header>
        <strong>CASHFLOW</strong>
        <p className="sub-header">Get out of the Rat Race !</p>
      </header>
      <Component/>
    </div>)
  }
}

export default Dashboard;