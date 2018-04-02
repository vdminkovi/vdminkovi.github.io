import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import t from './languages';
import { MultilanguageState } from './MultilanguageState';


class Contacts extends React.Component{

  constructor(props: MultilanguageProps, state: MultilanguageState) {
    super(props);
    this.state = {
        status: '',
        currentLanguage: 0,
    };
  }


  render() {

    return (
      <div className="Home">
        <div className="home-descr ContactsPage">
          <h1>{t[this.props.currentLanguage].contacts} </h1>
          <p>{t[this.props.currentLanguage].contacts1}</p>
          <p>{t[this.props.currentLanguage].adress}</p>
          <p>{t[this.props.currentLanguage].adress1}</p>
          <p>{t[this.props.currentLanguage].phone}: 0893427303</p>
          <p>{t[this.props.currentLanguage].email}: 'info@elefantent.com' </p>
          <a href="https://www.facebook.com/search/top/?q=%D0%BF%D0%B0%D0%BB%D0%B0%D1%82%D0%BA%D0%B0%D1%82%D0%B0%20%D0%BD%D0%B0%20%D1%81%D0%BB%D0%BE%D0%BD%D0%B0" target="_blank">{t[this.state.currentLanguage].facebook}</a>
        </div>
      </div>
    );
  }


}

export default Contacts;
