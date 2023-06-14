import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import { useNavigate } from 'react-router-dom';
import CustomImagen from './CustomImagen';


function CustomCard({children, inicio, ruta}) {

    const [styleCard, setStyleCard]=useState({margin: '2rem', borderStyle: 'solid'})
    const navigate=useNavigate();

    const handleHover= ()=> {
        setStyleCard({margin: '2rem', borderColor: 'white', opacity : '0.9'})
    }

   
    const handleLeave= ()=> {
        setStyleCard({margin: '2rem', borderStyle: 'solid'})
    }

    const {data, setData, fallBackSrc}=useContext(DataContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {

      if (inicio){

        setShow(false);
        navigate(ruta);

      } else {
        setShow(true);
      }

    } 

    const modalStyle={
      position: 'absolute',
      backgroundColor : 'darkblue',
      padding: '5rem',
      top: '50%',
     
      opacity: '1'
   }


  return (
    <div>
    <Card style={styleCard} onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleShow}>
      {children}
    </Card>
    <Modal show={show} onHide={handleClose} animation={false} style={modalStyle}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
          <Modal.Title>{data.releaseYear}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display: 'flex'}}>
          <CustomImagen element={data} fallBackSrc={fallBackSrc} />
          
          
          <div className='bodyModal'>{data.description}</div></Modal.Body>
        <Modal.Footer className='footerModal'>
          <Button variant="primary" size="lg" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

CustomCard.defaultProps={
  inicio: false, ruta : ''
}

export default CustomCard;