import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Habilidades.css';
import Header from '../Header/Header';
import react from '../imgs/react.svg';
import bootstrap from '../imgs/bootstrap.svg'
import node from '../imgs/node.svg'

const Habilidades = () => {
    return(
        <>
        <Header></Header>

        <p className='titleskills'>T E C N O L O G I A S</p>

        <div className='linha1'>
            <div> 
                <img src={react} className='react' />
                <p className='namereact'>R E A C T</p>
            </div>
            <div className='bootstrap'>
                <img src={bootstrap} className='bootstrap' />
                <p className='namebootstrap'>B O O T S T R A P</p>
            </div>
            <div className='nodejs'>
                <img src={node} className='node'/>
                <p className='namenode'>N O D E . J S </p>
            </div>
        </div>
        </>
    )
}

export default Habilidades;