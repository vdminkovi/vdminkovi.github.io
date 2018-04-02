import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//import TeamAPI from './TeamAPI';
import t from './languages';
import language from './languages';
import { MultilanguageState } from './MultilanguageState';
import OpenTeam from './OpenTeam';
import tent from '../style/Images/tents.jpg';
import challange1 from '../style/Images/challange1.jpg';
import challange2 from '../style/Images/challange2.jpg';


  class TeamSelect extends React.Component{
    constructor(props: MultilanguageProps, state: MultilanguageState) {
      super(props);
      this.state = {
          status: '',
          currentLanguage: 0,
      };
    }

    get(id) {
        const isTeam = p => p.id === id;
        console.log('p.id', id);
        return language[this.props.currentLanguage].TeamsData.find(isTeam);
    }
    /*if (!TeamsData) {
      return <div>Sorry, but the player was not found</div>
    }*/
    render() {
      console.log('props', this.props);
      const TeamsData = this.get(
        parseInt(this.props.match.params.id)
      );
      console.log('TeamsData', TeamsData);
    return (
      <div className="DataThumbs padding-bottom-13">
      <h2 className="SelectTitle">{TeamsData.title} </h2>
      <div className="TeamDescr">
          <div className="PicGallery">
            <img  src={tent} />
          </div>
        </div>
        <div className="TeamDescr">
          <h4>{TeamsData.timing}</h4>
          <h4>{TeamsData.groups}</h4>
          <h4>{TeamsData.type}</h4>
           <p>{TeamsData.description}</p>
           <p>{TeamsData.description1}</p>
           <p>{TeamsData.description2}</p>
           <p>{TeamsData.description3}</p>
           <p>{TeamsData.description4}</p>
           <p>{TeamsData.description5}</p>
           <p>{TeamsData.description6}</p>
            <p>{TeamsData.description7}</p>
            <p>{TeamsData.description8}</p>
            <p>{TeamsData.description9}</p>
            <p>{TeamsData.description10}</p>
            <p>{TeamsData.description11}</p>
            <p>{TeamsData.description12}</p>
            <p>{TeamsData.description13}</p>
          <Link className="btn-action" to='/contacts'>Contact us</Link>
        </div>
        <div className="clearfix"></div>
      </div>
    )
}
}

export default TeamSelect;
