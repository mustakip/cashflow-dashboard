import React from 'react';
import './App.css';
import RouterProvider from "./components/RouterProvider";
import {Router} from "react-router";
import RouteProvider from "./router/routeProvider";

function App() {
  return (

    <div>
      <RouterProvider>
        <Router routes={RouteProvider.routes} history={RouteProvider.history}/>
      </RouterProvider>
    </div>
  );
}

export default App;
