import { queryByDisplayValue } from '@testing-library/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Leagues.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Leagues = (props) => {
    const {strLeague, strSport, idLeague} =props.Cleague.Cleague;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="league_info">
            <h4>{strLeague}</h4>
            <p >Sports Type: {strSport}</p>
             <button className="btn btn-success"><Link to={`/team/${idLeague}`}>Explore<FontAwesomeIcon className="font_icon" icon={faLongArrowAltRight} /></Link></button>
        </div>
        </div>
    );
};

export default Leagues;