import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import { Home, Welcome, Person, Crud, About, NotFound } from "./NavbarComponents";
import PersonDetails from "./PersonDetails";


const Routing = () => {
  return (
    <Router>
      <Header />
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/home" component={Home} />
            <Route path="/person" component={Person} />
            <Route path="/about" component={About} />
            <Route path="/crud" component={Crud} />
            <Route path="/persondetails/:id" component={PersonDetails} />
            <Route component={NotFound} />
        </Switch>
    </Router>
  );
};

export default Routing;
