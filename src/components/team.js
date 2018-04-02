/*import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route, Link } from 'react-router-dom';
import TeamSelect from './TeamSelect';
import OpenTeam from './OpenTeam';
//import TeamAPI from './TeamAPI';
import t from './languages';
import { MultilanguageState } from './MultilanguageState';

class Team extends React.Component {

  constructor(props: MultilanguageProps, state: MultilanguageState) {
    super(props);
    this.state = {
        status: '',
        currentLanguage: 0,
    };
  }

  render() {
    return (
      <div>
        <div className="home-descr">
          <h2>{t[this.props.currentLanguage].teambuildings}</h2>
          <p className="margin-top-40">{t[this.props.currentLanguage].teamstext}</p>
          </div>
          <div className="clearfix"></div>
         <Switch>

          <Route exact path='/team' render={(props)=><OpenTeam  currentLanguage={this.state.currentLanguage} {...props}/>} exact/>
          <Route path='/team/:id' render={(props) => <TeamSelect currentLanguage={this.state.currentLanguage} {...props}/>}  />
        </Switch>
      </div>
    )
  }


}


export default Team;*/
