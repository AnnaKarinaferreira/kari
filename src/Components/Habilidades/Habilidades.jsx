import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Habilidades.css';
import Header from '../Header/Header';
import react from '../imgs/react.svg';


const Habilidades = () => {
    return(
        <>
        <Header></Header>

        <p className='titleskills'>Habilidades e Tecnologias</p>

        <div className='linha1'>
            <div> 
                <img src={react} className='react' />
            </div>
            <div className='bootstrap'></div>
            <div className='nodejs'></div>
        </div>
        </>
    )
}

export default Habilidades;