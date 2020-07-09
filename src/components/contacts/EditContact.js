import React, { Component } from "react";
import "./editcontact.css";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const { id } = this.props.match.params;
    const updatedContact = {
      name,
      email,
      phone,
    };
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updatedContact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

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
              className="editcontact-parent"
              onSubmit={this.onSubmit.bind(this, dispatch)}
            >
              <div className="editcontact-child1">
                <h3>Edit Contact </h3>
              </div>
              <ul className="editcontact-child2">
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
                  <input type="submit" value="Update Contact" />
                </li>
              </ul>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
