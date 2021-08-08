import React from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Header from "../Header/Header";
import DescriptionFaculty from "../DescriptionFaculty/Faculty.js";
import "./Instite.css";

function PseudoServer(){
    const [open, setOpen] = React.useState(false);

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
    ];

    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="page-container">
                <Header />
                <main className = "main">{
                    kafedras.map((item, index) =>(
                        <div onClick={handleOpen} className="kafedras">
                            <p className="kafedras-name">{item.name}</p>
                            <p className="kafedras-balls">{item.balls}</p>
                            <p className = "kafedras-institute">{item.institute}</p>
                        </div>
                    ))}
                </main>
            </div>
            <Modal
                open={open}
                className="modal-window"
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div className="window-main">
                    <DescriptionFaculty />
                </div>
        </Modal>
      </>
    );
}

export default PseudoServer;
