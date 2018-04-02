import React, { Component } from 'react';
import axios from 'axios';
import {Switch, Route, Link } from 'react-router-dom';
//import TeamAPI from './TeamAPI';
import t from './languages';
import language from './languages';
import { MultilanguageState } from './MultilanguageState';
import TeamSelect from './TeamSelect';


class OpenTeam extends React.Component {

  constructor(props: MultilanguageProps, state: MultilanguageState) {
    super(props);

    this.state = {
        currentLanguage: 0,
    };
  }

render(props){

  const LinkTeam =  language[this.props.currentLanguage].TeamsData.map((p) => {
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
    <div className="Thumbs padding-bottom-13">
      {LinkTeam}
      <div className="clearfix"></div>
    </div>
  )
}


}

export default OpenTeam;
