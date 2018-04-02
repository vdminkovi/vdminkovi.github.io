import React from 'react';
import t from './languages';


class LanguageChange extends React.Component {
    constructor({ initialState }) {
      super();
      this.state = {
        currentLanguage: initialState ,
        active: false
      }
      this.onLinkClick = this.onLinkClick.bind(this);
    }

    onLinkClick (e) {
      var a = document.getElementsByTagName('div')
      for (var i = 0; i < a.length; i++) {
          a[i].classList.remove('active');
      }
      e.target.classList.add('active');


        console.log(e.target);
        let languageSelected = 1;
        let activeClass = this.state.active;
      //  let newState = 0;
        switch (e.target.id) {
            case "bg":
                languageSelected = 1;
                  break;
            case"en":
                languageSelected = 0;
                  break;
        }
        this.setState({
            currentLanguage: languageSelected,
        });
    //    newState = +!this.state.currentLanguage;

    //    console.log('newState', newState);
        this.props.callbackParent(languageSelected);
        console.log('languageSelected', languageSelected);
      }

    render () {
      return <div>
                <div className='LinLang ' title='English'  id='en'  onClick={(e) => this.onLinkClick(e) }>En</div>
                <div className='LinLang active' title='Bulgarian' id='bg' onClick={(e) => this.onLinkClick(e)}>Bg</div>
            </div>
    }
  }

export default LanguageChange;
