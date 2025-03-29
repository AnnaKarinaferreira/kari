import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <>
        
        <div className='nome'>
            <p className='nomeheader'>PORTFOLIO</p>
            <div className='links'>
            <a href="#" className='link1' >GitHub</a>
            <a href="#" className='link2'>Netlify</a>
            <a href="#" className='link3'>Linkedin</a>
            </div>
        </div>
        </>
    )
}

export default Header;