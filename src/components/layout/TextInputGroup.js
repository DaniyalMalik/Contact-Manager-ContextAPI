import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <li>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </li>
    </div>
  );
};  

TextInputGroup.defaultProps = {
  type: "text"
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInputGroup;
