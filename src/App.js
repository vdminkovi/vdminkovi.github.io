import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {Router, Route, IndexRoute, hasgHistory} from "react-router";

import uuid from 'uuid';
import Home from './components/home.js';
import About from './components/about.js';
import Contacts from './components/contacts.js';
import Team from './components/team.js';
import TeamSelect from './components/TeamSelect.js';
import OpenTeam from './components/OpenTeam';
import NavLink from './components/NavLink';

//import BaseClient from './components/BaseClient';
//import Client from './components/Client';

import t from './components/languages';
import { MultilanguageState } from './components/MultilanguageState';

import logo from './style/Images/logo.png';
import './App.css';
import './style/stylesheets/reset.css';
import './style/stylesheets/screen.css';
import './style/stylesheets/style1.css';
import LanguageChange from './components/localisation';

export interface MultilanguageProps { compiler: string; framework: string; }

class App extends React.Component<MultilanguageProps, MultilanguageState>  {
  constructor(props: MultilanguageProps, state: MultilanguageState) {
    super(props);

    this.state = {
        currentLanguage: 1,
    };
  }
  onChildChanged(languageSelected) {
    this.setState({ currentLanguage: languageSelected })
  }

  render(props) {
  console.log('props-app', this.props);
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Container">
              <header>
                <LanguageChange
                      initialState={this.state.currentLanguage}
                      callbackParent={(newState) => this.onChildChanged(newState) } />
                <nav  className="header-nav">
                  <ul>
                    <li><NavLink  to="/" >{t[this.state.currentLanguage].home}</NavLink></li>
                    <li><NavLink  to="/OpenTeam/1" >{t[this.state.currentLanguage].teambuildings}</NavLink></li>
                    <li><NavLink   to="/about">{t[this.state.currentLanguage].aboutus}</NavLink></li>
                    <li><NavLink   to="/contacts">{t[this.state.currentLanguage].contacts}</NavLink></li>
                  </ul>
                </nav>
                <img className="Logo"  src={logo}/>
              </header>

              <div className="Main">
                {/* <Route exact path="/" component={Home}/> */}
                <Route path="/" render={()=><Home  currentLanguage={this.state.currentLanguage}/>} exact/>
                <Route path="/OpenTeam" render={()=><OpenTeam  currentLanguage={this.state.currentLanguage}/>}/>
                <Route path='/OpenTeam/:id' render={(props) => <TeamSelect currentLanguage={this.state.currentLanguage} {...props}/>}  />
                <Route path="/about" render={()=><About  currentLanguage={this.state.currentLanguage}/>}/>
                <Route path="/contacts" render={()=><Contacts  currentLanguage={this.state.currentLanguage}/>}/>
              </div>
              <div className="clearfix"></div>
              <footer>
                  <div>
                    <h4>{t[this.state.currentLanguage].title}</h4>

                  </div>
                  <div>
                    <label>{t[this.state.currentLanguage].contacts1}:</label>
                    <p>{t[this.state.currentLanguage].adress}</p>
                    <p>{t[this.state.currentLanguage].adress1}</p>
                  </div>
                  <div>
                    <p>{t[this.state.currentLanguage].phone}: 0893427303</p>
                    <p>{t[this.state.currentLanguage].email}: 'info@elefantent.com' </p>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/search/top/?q=%D0%BF%D0%B0%D0%BB%D0%B0%D1%82%D0%BA%D0%B0%D1%82%D0%B0%20%D0%BD%D0%B0%20%D1%81%D0%BB%D0%BE%D0%BD%D0%B0" target="_blank" className="FaceIcon"></a>
                  </div>
              </footer>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
