import React, {useState} from 'react'
import Title from "../components/Title/Title"
import Button1 from "../components/Buttons/Button1"
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import ModalForContacts from "../components/Modals/ModalForContacts"

const Contacts = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true)
    };

    const handleOk = () => {
      setShow(false)
    }

    return (
        <div className='container mt-xxl-5'>
            <ModalForContacts show={show}
                                handleClose={handleClose}
                              handleOk={handleOk}
            />
            <div className="contacts-content mt-5">
                <Title>Контактная информация</Title>
                <div className="row d-flex justify-content-between">
                    <div className="col-md-5 m-lg-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Название компании</label>
                            <h3>Строительная компания DC</h3>
                        </div>
                        <div className="form-group mt-5">
                            <label htmlFor="exampleFormControlInput1">Наш Адрес:</label>
                            <h5>г. Бишкек, улица Тоголок Молдо 54a</h5>
                        </div>
                        <div className="form-group mt-lg-5 mb-lg-5">
                            <label htmlFor="exampleFormControlInput1">Вы можете связаться с нами по следующей
                                почте:</label>
                            <h5><i>aisennogoibaev999@gmail.com</i></h5>
                        </div>

                        <Button1 onClick={handleShow}>Свяжитесь с нами!</Button1>
                    </div>
                    <div className="col-md-6 col-sm-12  d-flex align-items-center mt-5">
                        <div  className='mw-100'>
                            <YMaps>
                                <div>
                                    <Map  width='100%' defaultState={{ center: [42.880330, 74.595562], zoom: 13 }}>
                                        <Placemark geometry={[42.880330, 74.595562]} />
                                    </Map>
                                </div>
                            </YMaps>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;