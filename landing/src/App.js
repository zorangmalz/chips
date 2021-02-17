import React from "react"
import { Route } from "react-router-dom"
import Home from "./component/Home";
import Landing from "./component/Landing";

function App() {
  return (
    <>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
    </>
  );
}

export default App;