import React, { Component } from 'react'

class AddContact extends Component {

  constructor(props){
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();

  }


  state = {
    name: '',
    email: '',
    phone: ''
  }

  onSubmit = (e) => {
    e.preventDefault(); 
    // console.log(this.state);

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    }
    console.log(contact);
  }
  static defaultProps = {
    name: 'Murod Parmonov',
    email: 'parmonov98@yandex.ru',
    phone: '+998942638523'
  }
  render() {
    const {name, email, phone} = this.props;
    return (
      <div>
        <div className="card-header">Add contact form</div>        
        <div className="card card-body mb-3">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name"> Name </label>
              <input defaultValue={name}  type="text" name="name" className="form-control form-control-lg" placeholder="Enter name"
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"> Email </label>
              <input defaultValue={email}  name="email" type="email" className="form-control form-control-lg" placeholder="Enter email"
                  ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone"> Phone </label>
              <input defaultValue={phone}  name="phone" type="phone" className="form-control form-control-lg" placeholder="Enter phone"
                  ref={this.phoneInput}
              />
            </div>
            <input type="submit" value="Add Contact" className="btn btn-block btn-primary"/>
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;