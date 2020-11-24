import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from "../../context";

class Contacts extends Component {

  constructor(){
    super();
  }

  // deleteContact = (id) => {
  //   console.log(`log from Contacts components for ${id}` );
  //   const {contacts} = this.state;

  //   const newContacts = contacts.filter(contact => contact.id !== id);

  //   this.setState({
  //     contacts: newContacts
  //   });

  // }
  
  render() {

    return (
      <Consumer>
        {value => {
          console.log(value);
          const { contacts } = value;
          return (
            <React.Fragment>
              <h2 className="display-4 mb-3">
              Contacts
              </h2>
              {contacts.map(contact => (
                <Contact 
                      key={contact.id} 
                      contact={contact} 
                        
                />
              ))}

            </React.Fragment>
          );
        }}
      </Consumer>
    );

  }
}

export default Contacts;