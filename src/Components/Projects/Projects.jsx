import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Projects.css'
import Home from '../Home/Home.jsx'
import Header from '../Header/Header.jsx'
import InfiniteScroll from 'react-infinite-scroll-component';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = () => {
    return (
        <>
            <Header></Header>

            <Card className="card1">
                <Card.Header>Projeto backend e frontend com react</Card.Header>
                <Card.Body>
                    <Card.Title>Situação de aprendizagem</Card.Title>
                    <Card.Text>
                        Neste projeto, o objetivo é a construção de um site próprio para artistas e amantes das artes digitais. O projeto é abrangente e ainda está em andamento. Como parte do desenvolvimento, pretendemos incorporar efeitos especiais para datas comemorativas, como Natal, Halloween, entre outras. Este projeto foi realizado em parceria com outro desenvolvedor, visando criar uma plataforma rica em recursos e que atenda às necessidades do nosso público-alvo.
                    </Card.Text>
                    <a href="https://github.com/AnnaKarinaferreira/artistasSA.git"><Button variant="primary" className="button1">Visite o projeto</Button></a>
                </Card.Body>
            </Card>

            <Card className="card1">
                <Card.Header>Projeto de jogo da memória com JavaScript</Card.Header>
                <Card.Body>
                    <Card.Title>Jogo da memória</Card.Title>
                    <Card.Text>
                        Este projeto foi desenvolvido com o objetivo de exercitar meus conhecimentos em lógica e em JavaScript, além de aprimorar minhas habilidades em estilização e nas propriedades CSS. O projeto consiste em um jogo da memória com o tema de gatos. O jogo apresenta um sistema de pontuação e uma tela final de "game over", proporcionando uma experiência interativa e divertida para os usuários.
                    </Card.Text>
                    <a href="https://jogodamemoriaskycats.netlify.app/"><Button variant="primary" className="button1">Visite o projeto</Button></a>
                </Card.Body>
            </Card>

            <Card className="card1">
                <Card.Header>Site de portfolio escolar da escola S (Sesi Senai)</Card.Header>
                <Card.Body>
                    <Card.Title>Portfolio escolar</Card.Title>
                    <Card.Text>
                        Este site foi criado por mim durante o meu segundo ano escolar. Aqui, você vai encontrar uma coleção de trabalhos e projetos que fiz ao longo desse tempo. Esta é a última versão do portfolio, onde tentei aplicar tudo que aprendi em diferentes matérias. O site mostra meu progresso e dedicação ao aprendizado, e espero que seja uma boa vitrine do meu crescimento e das minhas habilidades. O site foi feito com html e css apenas.
                    </Card.Text>
                    <a href="https://meuportfolioterceirotri.netlify.app/"><Button variant="primary" className="button1">Visite o projeto</Button></a>
                </Card.Body>
            </Card>

            <Card className="card1">
                <Card.Header>Site para evento escolar "Mundo Senai"</Card.Header>
                <Card.Body>
                    <Card.Title>Projeto escolar</Card.Title>
                    <Card.Text>
                        Este site foi um  dos meus primeiros sites funcionais que realizei, o intuito dele foi fazer um cadastro e login com um user e uma senha. Caso os dados sejam registrados e confirmados de forma correta, uma tela de bem vindo aparece na tela. O tema do projeto foi da "Ganyu", uma personagem de um jogo.
                    </Card.Text>
                    <a href=" https://clinquant-froyo-a13917.netlify.app/"><Button variant="primary" className="button1">Visite o projeto</Button></a>
                </Card.Body>
            </Card>
            <div className="fimdapag">
                <p className="textfinal">No meu Github, que se encontra no cabeçalho desta página e na inicial, lá também realizei projetos com outras linguagens como Python e Java, possue Api's e webblogs.</p>
            </div>

        </>
    )
}

export default Projects;