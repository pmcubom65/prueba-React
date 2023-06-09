import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';


function CustomCard({children}) {

    const [styleCard, setStyleCard]=useState({margin: '2rem', borderStyle: 'solid'})

    const handleHover= ()=> {
        setStyleCard({margin: '2rem', borderColor: 'white', opacity : '0.9'})
    }


    const handleLeave= ()=> {
        setStyleCard({margin: '2rem', borderStyle: 'solid'})
    }

    const {data, setData}=useContext(DataContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <Modal.Body>{data.description}</Modal.Body>
        <Modal.Footer>
          <Button   variant="primary" size="lg" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CustomCard;