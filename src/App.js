import React from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'

import { Provider } from "./context";


import 'bootstrap/dist/css/bootstrap.min.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

import './App.css';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import TestComponent from './components/test/TestComponent';




function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header/>
          
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <Switch>
                  {/* <AddContact/>
                <Contacts /> */}
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/contact/add" component={AddContact} />
                  <Route exact path="/contact/edit/:id" component={EditContact} />

                  <Route exact path="/about" component={About} />                  
                  <Route exact path="/test" component={TestComponent} />
                  <Route component={NotFound}/>
                </Switch>
              </div>
            </div>
            
          </div>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
