import {hashHistory, Route, Router} from "react-router";
import React from "react";
import Homepage from "../components/Homepage";
import HostGame from "../components/HostGame";
import JoinGame from "../components/JoinGame";


const routes = (
  <>
    <Route path="/" component={Homepage}/>
    <Route path="/host" component={HostGame}/>
    <Route path="/join" component={JoinGame}/>
  </>
);

const RouteProvider = {
  "Router": Router,
  "routes": routes,
  "history": hashHistory
};

export default RouteProvider;
