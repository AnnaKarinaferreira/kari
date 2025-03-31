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

            <div className="cardslinha1">
                <Card style={{ width: '18rem' }} className="card1">
                    <Card.Body>
                        <Card.Title className="textcolor">Situação de aprendizagem</Card.Title>
                        <Card.Text className="subtextcolor">
                            Neste projeto, o objetivo é a construção de um site próprio para artistas e amantes das artes digitais.
                            O projeto é abrangente e ainda está em andamento. Como parte do desenvolvimento, pretendemos incorporar efeitos especiais para datas comemorativas,
                            como Natal, Halloween, entre outras. Este projeto foi realizado em parceria com outro desenvolvedor, visando criar uma plataforma
                            rica em recursos e que atenda às necessidades do nosso público-alvo.

                        </Card.Text>
                        <a href="https://github.com/AnnaKarinaferreira/artistasSA.git"><Button variant="primary" className="buttoncard">Visite o projeto</Button></a>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card1">
                    <Card.Body>
                        <Card.Title className="textcolor">Jogo da memória</Card.Title>
                        <Card.Text className="subtextcolor">
                            Este projeto foi desenvolvido com o objetivo de exercitar meus conhecimentos em lógica e em JavaScript, além de aprimorar minhas habilidades em estilização e nas propriedades CSS. O projeto consiste em um jogo da memória com o tema de gatos. O jogo apresenta um sistema de pontuação e uma tela final de "game over", proporcionando uma experiência interativa e divertida para os usuários.
                        </Card.Text>
                        <a href="https://jogodamemoriaskycats.netlify.app/"><Button variant="primary" className="buttoncard">Visite o projeto</Button></a>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card1">
                    <Card.Body>
                        <Card.Title className="textcolor">Portfolio escolar</Card.Title>
                        <Card.Text className="subtextcolor">
                        Este site foi criado por mim durante o meu segundo ano escolar. Aqui, você vai encontrar uma coleção de trabalhos e projetos que fiz ao longo desse tempo. Esta é a última versão do portfolio, onde tentei aplicar tudo que aprendi em diferentes matérias. O site mostra meu progresso e dedicação ao aprendizado, e espero que seja uma boa vitrine do meu crescimento e das minhas habilidades. O site foi feito com html e css apenas.
                        </Card.Text>
                        <a href="https://meuportfolioterceirotri.netlify.app/"><Button variant="primary" className="buttoncard">Visite o projeto</Button></a>
                    </Card.Body>
                </Card>
            </div>

            <div className="cardslinha1">

            <Card style={{ width: '18rem' }} className="card1">
                    <Card.Body>
                        <Card.Title className="textcolor">Projeto escolar</Card.Title>
                        <Card.Text className="subtextcolor">
                        Este site foi um  dos  primeiros sites funcionais que realizei, o intuito dele foi fazer um cadastro e login com um user e uma senha. Caso os dados sejam registrados e confirmados de forma correta, uma tela de bem vindo aparece na tela. O tema do projeto foi da "Ganyu", uma personagem de um jogo.
                        </Card.Text>
                        <a href="https://clinquant-froyo-a13917.netlify.app/"><Button variant="primary" className="buttoncard">Visite o projeto</Button></a>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card1">
                    <Card.Body>
                        <Card.Title className="textcolor">Projeto escolar</Card.Title>
                        <Card.Text className="subtextcolor">
                        Este site foi um  dos  primeiros sites funcionais que realizei, o intuito dele foi fazer um cadastro e login com um user e uma senha. Caso os dados sejam registrados e confirmados de forma correta, uma tela de bem vindo aparece na tela. O tema do projeto foi da "Ganyu", uma personagem de um jogo.
                        </Card.Text>
                        <a href="https://clinquant-froyo-a13917.netlify.app/"><Button variant="primary" className="buttoncard">Visite o projeto</Button></a>
                    </Card.Body>
                </Card>
            </div>
            <div className="fimdapag">
                <p className="textfinal">Mais projetos no meu Github <a href="https://github.com/AnnaKarinaferreira" className="linkgit">aqui</a>. <br /> Em meu perfil, apresento diversos projetos que utilizam diferentes linguagens e bibliotecas. Entre as linguagens que destaco, encontram-se Java e Python. </p>
            </div>
        </>
    )
}

export default Projects;