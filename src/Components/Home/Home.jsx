import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Home.css'
import Header from '../Header/Header.jsx'
import InfiniteScroll from 'react-infinite-scroll-component';
import Projecs from '../Projects/Projects.jsx'

const Home = () => {
    return(
        <>
        <Header></Header>
      <div className="box">
      <div className="box1">
       <div className="title">
            ANNA
        </div>
        <div className="title2">
            KARINA
        </div>
       </div>
       <div className="box2">
        <a href="/Projects"><button className="buttons">Projects</button></a>
        <a href="#"><button className="buttons">Skills</button></a>
        <a href="#"><button className="buttons">About Me</button></a>
       </div>
      </div>
        </>
    )
}



export default Home;