import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Header from "../Header/Header";
import DescriptionFaculty from "../DescriptionFaculty/Faculty.js";
import "./Instite.css";

const AllInstitute = () => {
    const [open, setOpen] = useState(false);

    const kafedras = [
        {
            id: 1,
            name : "Информационное и программное обеспечение автоматизированных систем",
            desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae.",
            price: 10000,
            years: 2,
            form: 'Очная',
        },
        {
            id: 2,
            name : "Эргодизайн пользовательского интерфейса",
            desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae.",
            price: 10000,
            years: 2,
            form: 'Очная',
        },
        {
            id: 3,
            name: 'Эргодизайн пользовательского интерфейса',
            desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae.",
            price: 10000,
            years: 2,
            form: 'Очная',
        },
        {
            id: 4,
            name : "Информационное и программное обеспечение автоматизированных систем",
            desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae.",
            price: 10000,
            years: 2,
            form: 'Очная',
        },
        {
            id: 5,
            name: 'Эргодизайн пользовательского интерфейса',
            desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae.",
            price: 10000,
            years: 2,
            form: 'Очная',
        },
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
                <div className = "main">
                    {kafedras.map((item, index) => (
                        <div 
                            className="kafedras" 
                            key={`kafedrs-id-${item.id}`}
                        >
                            <p className="kafedras-name">{item.name}</p>
                            <p className="kafedras-institute">{item.desription}</p>
                            <div className="kefedras-bottom">
                                <p className="kafedras-bottom-p">{item.years} года</p>
                                <p className="kafedras-bottom-p">{item.form}</p>
                                <p className="kafedras-bottom-p">${item.price}</p>
                            </div>
                            <div className="about-button">
                                <p onClick={handleOpen}
                                   className="about-button-p">Подробнее
                                </p>
                            </div>
                        </div>
                    ))
                    }
                </div>
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

export default AllInstitute;
