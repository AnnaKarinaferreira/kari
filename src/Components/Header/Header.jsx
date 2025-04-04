import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <>
        
        <div className='nome'>
            <p className='nomeheader'>FULLSTACK DEVELOPER</p>
            <div className='links'>
            <a href="https://github.com/AnnaKarinaferreira" className='link1' >GitHub</a>
            <a href="https://app.netlify.com/teams/annakarinaferreira/sites" className='link2'>Netlify</a>
            <a href="https://www.linkedin.com/in/annakarinapacheco/" className='link3'>Linkedin</a>
            </div>
        </div>
        </>
    )
}

export default Header;