import React from 'react';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faClock, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import male from "../../Rectangle 28.png";
import female from '../../female.png';

const TeamDetail = (props) => {
    const {strBanner, strBadge, strLeague, intFormedYear, strCountry, strSport, strGender,strDescriptionEN, strDescriptionFR, strFacebook, strTwitter,strYoutube} = props.team.team;
    
    return (
        <div className="team_section">
              <div>
                  <div className="team_banner">
                  <img className="" src={strBanner} alt=""/>
                  <div className="banner_shadow"></div>
                  <div className="banner_badge">
                      <img src={strBadge} alt=""/>
                  </div>
                  </div>

                  <div className="team-info-wrap">
                  <div className="team_details">
                  <h2>{strLeague}</h2> <br /> 
                  <div><FontAwesomeIcon icon={faClock}></FontAwesomeIcon><p>Founded: {intFormedYear}</p></div>
                  <div><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon><p>Country: {strCountry}</p></div>
                  <div><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon><p>Sport: {strSport}</p></div>
                  <div><FontAwesomeIcon icon={faMars}></FontAwesomeIcon><p>Gender: {strGender}</p></div>
                  </div>
                  
                
                    <div className="poster_img">
                  {
                     strGender==='Male'? 
                     <img src={male} alt=""/>: 
                     <img src={female} alt=""/>
                  }
                  </div>
                  </div>

                  <div className="team_description container">
                  <p>{strDescriptionEN}</p><br/> 
                  <p>{strDescriptionFR}</p>
                  </div>

                  <div className="social_icon">
                 <a href={`https://${strFacebook}`} target="_blank" className="social_icon common fcbk"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                 <a href={`https://${strTwitter}`} target="_blank" className="social_icon common twtr"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                 <a href={`https://${strYoutube}`} target="_blank" className="social_icon common ytube"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
             </div>
                  </div>
        </div>
    );
};

export default TeamDetail;