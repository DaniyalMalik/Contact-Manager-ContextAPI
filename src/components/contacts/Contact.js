import React, { Component } from "react";
import PropTypes from "prop-types";
import "./contact.css";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contacts;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="contact-parent">
              <h3>
                {name}{" "}
                <i
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    });
                  }}
                ></i>
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>{" "}
                <Link to={`/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      paddingRight: "5px",
                    }}
                  />
                </Link>
              </h3>
              {showContactInfo ? (
                <ul>
                  <li>Email: {email}</li>
                  <li>Contact: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.defaultProps = {
  name: "Malik",
  email: "x_x@xmail.com",
  phone: "03xx-xxxxxxx",
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
