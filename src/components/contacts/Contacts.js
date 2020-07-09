import React, { Component } from "react";
import Contact from "../contacts/Contact";
import { Consumer } from "../../Context";
import "./contacts.css";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="contacts-parent">
                <h1>
                  <span className="contacts-span">Contact</span> List
                </h1>
                {contacts.map((contact) => (
                  <Contact contacts={contact} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
