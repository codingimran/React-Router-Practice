import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";
import Index from "./Components/Home/Index";
const App = () => {
  const Name = () => {
    return <h1>Hello, I am a name age</h1>;
  };
  return (
    <>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/index" component={Index} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/name" component={Name} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
