import React, { Component } from 'react';
import axios from 'axios';
import {Switch, Route, Link } from 'react-router-dom';
//import TeamAPI from './TeamAPI';
import t from './languages';
import language from './languages';
import { MultilanguageState } from './MultilanguageState';
import TeamSelect from './TeamSelect';
import OpenTeam from './OpenTeam';

class OpenTeamHome extends React.Component {

  constructor(props: MultilanguageProps, state: MultilanguageState) {
    super(props);

    this.state = {
        currentLanguage: 0,
    };
  }

render(props){
  let size = 4;
  const LinkTeam =  language[this.props.currentLanguage].TeamsData.slice(0, size).map((p) => {
    console.log('p', this.props.currentLanguage);
    return (
      <div key={p.id} className={`thumb thumb${p.id}`}>
        <Link to={`/OpenTeam/${p.id}`} >
          <div className="TeamTitle">
            <p>{p.title}</p>
            <div className="TeamMore">
              <p>{p.title}</p>
              <p>{p.timing}</p>
              <p>{p.groups}</p>
              <p>{p.type}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="OpenTeam padding-bottom-9">
      {LinkTeam}
      <div className="clearfix"></div>
      <div className="margin-top-60">
        <Link className="btn-action"  to="/OpenTeam/1" >{t[this.props.currentLanguage].teambuildings}</Link>
      </div>
      <div className="clearfix"></div>
      <div className="Clients padding-bottom-13">
        <h2>{t[this.props.currentLanguage].clients}</h2>
        <p className="padding-bottom-40">{t[this.props.currentLanguage].among}</p>
        <span className="sprite sprite1"></span>
        <span className="sprite sprite2"></span>
        <span className="sprite sprite3"></span>
        <span className="sprite sprite4"></span>
        <span className="sprite sprite5"></span>
        <span className="sprite sprite6"></span>
        <span className="sprite sprite7"></span>
        <span className="sprite sprite8"></span>
        <span className="sprite sprite9"></span>
        <span className="sprite sprite10"></span>
        <span className="sprite sprite11"></span>
        <span className="sprite sprite12"></span>
        <span className="sprite sprite13"></span>
        <span className="sprite sprite14"></span>
      </div>
    </div>
  )
}


}

export default OpenTeamHome;
