import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Team.css';
// import facebook from '../../Facebook.png';
// import twitter from '../../Twitter.png';
// import youtube from '../../YouTube.png';
import TeamDetail from '../TeamDetail/TeamDetail';

const Team = () => {
    const {teamId} = useParams();
    const [teams, setTeams] =useState([]);

    useEffect(()=> {
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${teamId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setTeams(data.leagues))

    }, [])
    return (
        <div>
        
            {
             teams.map(team=> <TeamDetail team={{team}}></TeamDetail>)
            }
        
        </div>
    );
};

export default Team;