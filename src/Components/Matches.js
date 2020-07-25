import React, { Component } from 'react';
import matches from '../images/Landing-page/matches.png';
import './Matches.css'



class Matches extends Component{
    render(){
        return (
            <div className='landing-grid-parent'>
                <div className='landing-grid'>
                <img src={matches} alt="matches"/> 
                <div className='Landing-page'>
                    <h2>Issue 079</h2>
                    <h1 className='Landing-page-font'>Catalysts</h1>
                    <h3 className='Landing-page-font2'>Agents of change </h3>
                        <h3>READ MORE</h3>
                    <button className='Landing-page-btn'>  
                        SEE FULL ISSUE</button>
                </div>
                </div>
            </div>
        )
    }
}
export default Matches;