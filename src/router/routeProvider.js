import {hashHistory, Route, Router} from "react-router";
import React from "react";
import Homepage from "../components/Homepage";


const routes = (
  <>
    <Route path="/" component={Homepage}/>
    <Route path="/host" component={Homepage}/>
    <Route path="/join" components={Homepage}/>
  </>
);

const RouteProvider = {
  "Router": Router,
  "routes": routes,
  "history": hashHistory
};

export default RouteProvider;
