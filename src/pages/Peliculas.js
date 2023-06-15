import React, {useEffect} from 'react'
import ModeloComponent from '../components/ModeloComponent';
import { useDispatch } from 'react-redux';
import { changeYear, changeNumero, changeInicio, changeFin } from '../store/ListadoSlice';


function Peliculas() {

  const dispatch=useDispatch();

  useEffect(()=> {
    dispatch(changeYear(0));
    dispatch(changeNumero(20));
    dispatch(changeInicio(1));
    dispatch(changeFin(1));
  },[])


  return <ModeloComponent modelo={'movie'} titulo={'Popular movies'} />
 
}

export default Peliculas;