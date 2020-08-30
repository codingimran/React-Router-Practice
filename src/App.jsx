import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";
import Index from "./Components/Home/Index";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import User from "./Components/User/User";
const App = () => {
  const Name = () => {
    return <h1>Hello, I am a name age</h1>;
  };
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/index" component={Index} />
        <Route exact path="/about" component={() => <About name="about" />} />
        <Route exact path="/about/name" component={Name} />
        <Route
          exact
          path="/service"
          render={() => <Services name="Services" />}
        />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/user/" component={User} /> */}
        <Route path="/user/:fName/:lName" component={User} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
