import React, { Component } from "react";
import "./addcontact.css";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    const newContact = {
      name,
      email,
      phone,
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <form
              className="addcontact-parent"
              onSubmit={this.onSubmit.bind(this, dispatch)}
            >
              <div className="addcontact-child1">
                <h3>Add Contact </h3>
              </div>
              <ul className="addcontact-child2">
                <TextInputGroup
                  label="Name"
                  name="name"
                  placeholder="Enter name..."
                  value={name}
                  onChange={this.onChange}
                />
                <TextInputGroup
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter email..."
                  value={email}
                  onChange={this.onChange}
                />
                <TextInputGroup
                  label="Phone"
                  name="phone"
                  placeholder="Enter phone..."
                  value={phone}
                  onChange={this.onChange}
                />
                <li>
                  <input type="submit" value="Add Contact" />
                </li>
              </ul>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
