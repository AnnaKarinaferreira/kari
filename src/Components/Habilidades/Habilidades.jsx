import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Habilidades.css';
import Header from '../Header/Header';


const Habilidades = () => {
    return(
        <>
        <Header></Header>
        <div className='linha1'>
            <div className='react'> 
            </div>
            <div className='bootstrap'></div>
            <div className='nodejs'></div>
        </div>
        </>
    )
}

export default Habilidades;