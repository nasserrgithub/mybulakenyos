import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import Info from './components/Register/Info.js';
import Navbar from './components/Nav/Navbar.js';
import NavbarFiller from './components/Nav/NavbarFiller.js';
import Filler from './components/Nav/Filler.js';
import SubmitOffer from './components/Nav/SubmitOffer.js';
import BulakanJobs from './components/Jobs/BulakanJobs.js';
import BalagtasJobs from './components/Jobs/BalagtasJobs.js';
import MalolosJobs from './components/Jobs/MalolosJobs.js';
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
                      route === 'balagtasjobs'
                      ? <div>
                          <Navbar onRouteChange={this.onRouteChange} name={this.state.name}/>
                          <BalagtasJobs />
                        </div>
                      : (
                          route === 'malolosjobs'
                          ? <div>
                              <Navbar onRouteChange={this.onRouteChange} name={this.state.name}/>
                              <MalolosJobs />
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
                )
            )
        }

      </div>
    );
  }
}

export default App;
