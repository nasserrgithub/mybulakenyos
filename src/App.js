import React, { Component } from 'react';
import './App.css';
import SignIn from './SignIn';
import Register from './Register';
import Info from './Info';
import Navbar from './Navbar';
import BulakanJobs from './BulakanJobs';
import Filler from './Filler';
import NavbarFiller from './NavbarFiller';
import SubmitOffer from './SubmitOffer';
import {Alert} from 'react-bootstrap';

class App extends Component {

  constructor(){
    super();
    this.state = {
      route:'signin',
      name:''
    }
  }

  onRouteChange = (event) => {
    this.setState({route: event})
  }

  onsPassSigninEmail = (signinEmail) => {
    this.setState({signinEmail:signinEmail})
  }


  loadName = (name) => {
    this.setState({name: name})
  }


  render() {
    const { route } = this.state;
    return (
      <div className="App">

        {route === 'signin' 
          ? <SignIn onRouteChange={this.onRouteChange} onsPassSigninEmail={this.onsPassSigninEmail} loadName={this.loadName}/>
          : ( 
              route === 'register'
              ? <div className="test">
                  <Info />
                  <Register onRouteChange={this.onRouteChange} loadName={this.loadName}/>
                </div>
              : (
                  route === 'bulakanjobs'
                  ? <div>
                      <Navbar onRouteChange={this.onRouteChange} name={this.state.name}/>
                      <BulakanJobs />
                    </div>
                  : (
                      route === 'submitoffer'
                      ? <div>
                          <Navbar onRouteChange={this.onRouteChange} name={this.state.name}/>
                          <SubmitOffer />
                        </div>
                      : <div>
                          <NavbarFiller onRouteChange={this.onRouteChange} name={this.state.name}/>
                          <Filler />
                        </div>
                    )
                )
            )
        }

      </div>
    );
  }
}

export default App;
