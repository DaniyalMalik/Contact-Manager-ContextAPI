import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import { Provider } from "./Context";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <Header branding="Contact Manager" />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/add" component={AddContact} />
            <Route exact path="/edit/:id" component={EditContact} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
