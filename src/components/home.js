import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import t from './languages';
import { MultilanguageState } from './MultilanguageState';
import Team from './team.js';
import OpenTeamHome from './OpenTeamHome';


class Home extends React.Component {

  constructor(props: MultilanguageProps, state: MultilanguageState) {
    super(props);
    this.state = {
        currentLanguage: 0,
    };
  }
  static defaultProps() {
    return {
      currentLanguage: 0
    };
  }


  render(props) {
    return (

    <div className="Home">
        <div className="home-descr">
            <ul className="cb-slideshow">
                <li className="overlay"><div></div></li>
                <li><span></span>
                <div>
                    <h1>{t[this.props.currentLanguage].title}</h1>
                    <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>
                <li><span></span><div>
                    <h1>{t[this.props.currentLanguage].title}</h1>
                    <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>
                <li><span></span><div>
                    <h1>{t[this.props.currentLanguage].title}</h1>
                    <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>
                <li><span></span><div>
                    <h1>{t[this.props.currentLanguage].title}</h1>
                    <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>
                <li><span></span><div>
                <h1>{t[this.props.currentLanguage].title}</h1>
                    <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>
                <li><span></span><div>
                    <h1>{t[this.props.currentLanguage].title}</h1>
                    <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>
                <li><span></span><div>
                <h1>{t[this.props.currentLanguage].title}</h1>
                <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>
                <li><span></span><div>
                <h1>{t[this.props.currentLanguage].title}</h1>
                <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>
                <li><span></span><div>
                <h1>{t[this.props.currentLanguage].title}</h1>
                <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>
                <li><span></span><div>
                <h1>{t[this.props.currentLanguage].title}</h1>
                <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>
                <li><span></span><div>
                <h1>{t[this.props.currentLanguage].title}</h1>
                <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>
                <li><span></span><div>
                <h1>{t[this.props.currentLanguage].title}</h1>
                <p className="margin-top-40">{t[this.props.currentLanguage].description}</p></div></li>


            </ul>
        </div>
        <div className="clearfix"></div>
        <OpenTeamHome currentLanguage ={this.props.currentLanguage}/>
    </div>
    );
  }


}

export default Home;
