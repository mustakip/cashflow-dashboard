import React from 'react';
import './App.css';
import RouterProvider from "./components/RouterProvider";
import {Router} from "react-router";
import RouteProvider from "./router/routeProvider";

function App() {
  return (
      <RouterProvider>
        <Router routes={RouteProvider.routes} history={RouteProvider.history}/>
      </RouterProvider>
  );
}

export default App;
