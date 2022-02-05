import React from 'react';
import {Modal, Button} from "react-bootstrap";

const ModalForContacts = ({show, handleClose, handleOk}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Форма связи</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Имя</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder="Имя"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Номер телефона</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder="Номер телефона"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Почта</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder="Email"/>
                    </div>
                    <div className="form-group mb-5">
                        <label htmlFor="exampleFormControlTextarea1">Ваше сообщение</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="outline-success" onClick={handleOk}>
                   Отправить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForContacts;