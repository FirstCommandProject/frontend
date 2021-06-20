import React from 'react'
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import "./Instite.css";


function PseudoServer(){
    const history = useHistory();
    const path = "/my/faculty/";
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
            kafedras.map((item, index) =>(
                         <div onClick={() => history.push(path + index)} className="kafedras">
                             <p className="kafedras-name">{item.name}</p>
                             <p className="kafedras-balls">{item.balls}</p>
                             <p className = "kafedras-institute">{item.institute}</p>
                         </div>))
                             }
        </main>
        </div>
    );
}

export default PseudoServer;
