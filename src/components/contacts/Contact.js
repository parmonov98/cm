import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from 'react-router-dom';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired   ,
    // deleteClickHandler: PropTypes.func.isRequired
  };
  state = {
    is_shown: true
  };
  

  
  // ShowonClick = () => {
  //   this.setState({is_shown: !this.state.is_shown });
  //   console.log(this.state);
  // };
  
  DeleteonClick = async (id, dispatch) => {
    console.log('delete btn clicked');
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({type: 'DELETE_CONTACT', PAYLOAD: id});

    // this.props.deleteClickHandler();
  };

  // ShowonClick = (id, name,  e) => {
  //   console.log(id);
  //   console.log(this.state);
  //   console.log(e.target);
  //   console.log(name);
  // }

  
  render() {
    const {id, name, email, phone} = this.props.contact;
    const {is_shown} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card card-body mb-3">
              <h3>{name} 
                <i onClick={
                  () => this.setState({is_shown: !this.state.is_shown })
                } className='fa fa-sort-desc' style={{marginLeft: '5px', cursor: 'pointer'}} aria-hidden="true"></i>
                <i onClick={this.DeleteonClick.bind(this, id, dispatch)} className="fa fa-trash" style={{float: 'right', color: '#c02', cursor: 'pointer'}} aria-hidden="true"></i>
                <Link to={`contact/edit/${id}`} style={{float: 'right', marginRight: '5px', cursor: 'pointer'}}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </Link>
              </h3>
              {is_shown ? (
                <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>
              ): null}
              
            </div>
          );
        }}
      </Consumer>
    );
    
  }
}

export default Contact;
