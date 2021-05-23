import React from 'react'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Instite.css";
import {NavLink} from "react-router-dom";

function PseudoServer(){
    let id = '0';
    let path = '/my/faculty/';
    const kafedras = [
        {
            name : "Литературовидение",
            institute: "ИРТСУ",
            balls: "Средний балл: 10"
        },
        {
            name : "Имя",
            institute: "ИКТИБ",
            balls: "Средний балл: 250"
        },
        {
            name: 'Психология',
            institute : "ИКТИБ",
            balls : "Средний балл: 150"

        },
        {
            name : "Имя",
            institute: "ИКТИБ",
            balls: "Средний балл: 250"
        },
        {
            name: 'Психология',
            institute : "ИКТИБ",
            balls : "Средний балл: 150"

        },
        {
            name : "Имя",
            institute: "ИКТИБ",
            balls: "Средний балл: 250"
        },
        {
            name: 'Психология',
            institute : "ИКТИБ",
            balls : "Средний балл: 150"

        },
        {
            name : "Имя",
            institute: "ИКТИБ",
            balls: "Средний балл: 250"
        },
        {
            name: 'Психология',
            institute : "ИКТИБ",
            balls : "Средний балл: 150"

        },
        {
            name : "Имя",
            institute: "ИКТИБ",
            balls: "Средний балл: 250"
        },
        {
            name: 'Психология',
            institute : "ИКТИБ",
            balls : "Средний балл: 150"

        },
        {
            name : "Имя",
            institute: "ИКТИБ",
            balls: "Средний балл: 250"
        },
        {
            name: 'Психология',
            institute : "ИКТИБ",
            balls : "Средний балл: 150"

        }
      ]
    return(
        <div className="page-container">
        <Header />
        <main className = "main">{
            kafedras.map((item) =>(
                         <div className="kafedras">
                             <NavLink to={path + id++} activeClassName='activeLink'>
                                <p className="kafedras-name">{item.name}</p>
                             </NavLink>
                             <p className="kafedras-balls">{item.balls}</p>
                             <p className = "kafedras-institute">{item.institute}</p>
                         </div>))
                             }
        </main>
        <Footer />
        </div>
    );
}

export default PseudoServer;
