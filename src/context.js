import React, { Component } from 'react'
// import context from 'react-bootstrap/esm/AccordionContext';
import axios from "axios";


const Context = React.createContext();



const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      console.log('delete action is called');
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.PAYLOAD)
      }
      break;
    case 'ADD_CONTACT':
      console.log('add action is called');
      return {
        ...state,
        contacts: [action.PAYLOAD, ...state.contacts]
      }
    case 'UPDATE_CONTACT':
      console.log('edit action is called');
      return {
        ...state,
        contacts: state.contacts.map( contact => contact.id === action.payload.id ? (contact = action.payload) : contact = contact)
      }
      break;
  
    default:
      break;
  }
}

export class Provider extends Component {
  state ={
    contacts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

 
  async componentDidMount(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({contacts: response.data});
  }
  

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;



