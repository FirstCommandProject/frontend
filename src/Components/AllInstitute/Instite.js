import React, { useEffect, useState } from 'react'
import axios from "axios";
import Skeleton from '@material-ui/lab/Skeleton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Header from "../Header/Header";
import DescriptionFaculty from "../DescriptionFaculty/Faculty.js";
import "./Instite.css";

const AllInstitute = () => {
    const [open, setOpen] = useState(false);
    const [kafedrasBE, setKafedrasBE] = useState([]);
    const [oneKafedr, setOneKafedr] = useState([]);

    const getKafedrasBE = async() => {
        const res = await axios.post(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/departments`, {
                id: -1
            }
        );
        if (res.data.statusCode === '200') {
            setKafedrasBE(res.data.data);
        }
    };

    useEffect(() => {
        getKafedrasBE();
    }, [])

    const getOneKafedr = async() => {
        if (open) {
            const res = await axios.post(
                `${process.env.REACT_APP_SERVER_ENDPOINT}/departments`, {
                    id: open
                }
              );
            if (res.data.statusCode === '200') {
                setOneKafedr(res.data.data);
            }
        }
        return {};
    };

    useEffect(() => {
        getOneKafedr();
    }, [open])

    const handleOpen = (id) => {
        setOpen(id);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="page-container">
                <Header />
                <div className = "main">
                    {kafedrasBE.length? kafedrasBE.map((item, index) => (
                        <div 
                            className="kafedras" 
                            key={`kafedrs-id-${item.id}`}
                        >
                            <p className="kafedras-name">{item.name}</p>
                            <p className="kafedras-institute">{item.description}</p>
                            <div className="kefedras-bottom">
                                <p className="kafedras-bottom-p">{item.years} года</p>
                                <p className="kafedras-bottom-p">{item.form}</p>
                                <p className="kafedras-bottom-p">${item.price}</p>
                            </div>
                            <div className="about-button">
                                <p onClick={() => handleOpen(item.id)}
                                   className="about-button-p">Подробнее
                                </p>
                            </div>
                        </div>
                    ))
                    :null}
                </div>
                {!kafedrasBE.length
                    ?<div>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                    </div>
                    : null
                }
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
                    <DescriptionFaculty data={oneKafedr} />
                </div>
            </Modal>
      </>
    );
}

export default AllInstitute;
