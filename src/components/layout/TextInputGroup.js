import React, { Component } from 'react'
import PropTypes from "prop-types";
// import { propTypes } from 'react-bootstrap/esm/Image';
import classnames from "classnames";


const TextInputGroup = ({
  label, name, value, placeholder, type, onChange, error
}) => {
  
  return (
    <div className="form-group">
      <label htmlFor="name"> {label} </label>
      <input 
        value={value} 
        onChange={onChange} 
        type={type} 
        name={name} 
        placeholder={placeholder}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
      />
      {error && <div className="invalid-feedback">{error}</div>}
      
    </div>
  )

}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;