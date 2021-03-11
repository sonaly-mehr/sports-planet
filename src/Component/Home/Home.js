import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Home.css';
import img from '../../Football-stadium.jpg'

const Home = () => {

    const [Cleagues, setLeagues] =useState([]);

    // const handleButton()=>{

    // }


    useEffect(()=> {
        const url =`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setLeagues(data.leagues.slice(0, 12)))
        
    },[])
     

    return (

    <div className="league_wrap">
        <div className="background">
        <div className="background_img">
        <img src={img} alt=""/>
        </div>
        <div className="background_header">
          <h2>Sports</h2>
          <h4>Planet</h4>
        </div>
    </div>
    <div className="container">
        <div className="row">
       {
        Cleagues.map(Cleague=> <Leagues Cleague={{Cleague}}></Leagues>)
        
       }

        </div>
        </div>
        </div>
    );
};

export default Home;