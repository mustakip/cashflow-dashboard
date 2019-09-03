import * as React from "react";
import Dashboard from "./Dashboard";
import Options from "./Options";

class Homepage extends React.Component {
  render() {
    return <div>
      <Dashboard Component={Options} />
    </div>
  }
}

export default Homepage;