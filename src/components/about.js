import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import t from './languages';
import { MultilanguageState } from './MultilanguageState';


class About extends React.Component{

  constructor(props: MultilanguageProps, state: MultilanguageState) {
    super(props);
    this.state = {
        status: '',
        currentLanguage: 0,
    };
  }

  componentWillMount() {

          console.log("componentWillMount!!");
          // get favorite language
          let favoriteLanguage = 'en'; //this.getUrlQueryString('SPLanguage');
          if (favoriteLanguage.search(/en/i) > -1) {
              this.setState({
                  currentLanguage: 0
              });
          } else {
              this.setState({
                  currentLanguage: 1
              });
          }
      }


  render() {

    return (
      <div className="Home">
      <div className="home-descr padding-bottom-13">
            <h2>{t[this.props.currentLanguage].members} </h2>
            <div className="MemThumb margin-top-40">
              <h3>{t[this.props.currentLanguage].ivan}</h3>
              <p>{t[this.props.currentLanguage].ivan1}</p>
            </div>
            <div className="MemThumb  margin-top-40">
              <h3>{t[this.props.currentLanguage].sofia}</h3>
              <p>{t[this.props.currentLanguage].sofia1}</p>
            </div>
            <div className="MemThumb  margin-top-40">
              <h3>{t[this.props.currentLanguage].maria}</h3>
              <p>{t[this.props.currentLanguage].maria1}</p>
            </div>
            <div className="MemThumb  margin-top-40">
              <h3>{t[this.props.currentLanguage].petio}</h3>
              <p>{t[this.props.currentLanguage].petio1}</p>
            </div>
        </div>
      </div>
    );
  }


}

export default About;
