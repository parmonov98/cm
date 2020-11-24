import React, { Component } from 'react'
import { Consumer } from "../../context";
// import {v1 as uuid}  from 'uuid';
import TextInputGroup  from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }



  
  // onNameChange = (e) => this.setState( {name: e.target.value} );
  // onEmailChange = (e) => this.setState( {email: e.target.value} );
  // onPhoneChange = (e) => this.setState( {phone: e.target.value} );

  onChange = e => this.setState(
    {
      [e.target.name]: e.target.value
    }
  );



  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    console.log(this.state);

    const {name, email, phone} = this.state;

    if (name === '') {
      this.setState({errors: {name: 'Name must be yours and required!'}});
      return;
    }
    if (email === '') {
      this.setState({errors: {email: 'Email must valid and required!'}});
      return;
    }
    if (phone === '') {
      this.setState({errors: {phone: 'Phone number would not be extra!'}});
      return;
    }



    const newContact = {
      name,
      email,
      phone
    }

    try {
      const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, newContact);
      dispatch({type: 'ADD_CONTACT', PAYLOAD: res.data});
    
    } catch (error) {
      console.log(error);
    }
    

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })

    this.props.history.push('/');
    
  }


  render() {


    const {name, email, phone, errors} = this.state;



    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div>
              <div className="card-header h2">
                Add contact form
              </div>        
              <div className="card card-body mb-3">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name:"
                    name="name"
                    placeholder="Enter name"
                    onChange={this.onChange}
                    value={name}
                    error={errors.name}
                  />
                  
                  <TextInputGroup
                    label="Email:"
                    name="email"
                    placeholder="Enter email"
                    type="email"
                    onChange={this.onChange}
                    value={email}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone:"
                    name="phone"
                    placeholder="Enter phone"
                    type="phone"
                    onChange={this.onChange}
                    value={phone}
                    error={errors.phone}
                  />
                  
                  <input type="submit" value="Add Contact" className="btn btn-block btn-primary"/>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
    
  
  }
}

export default AddContact;