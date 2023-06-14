import React from 'react';
import { useDispatch } from 'react-redux';
import { changeYear, changeNumero } from '../store/ListadoSlice';

function DesplegablesFiltro({nombreDesplegable, lista, titulo}) {


    const dispatch=useDispatch();

    const selectedDesplegable=(nombreDesplegable==='year') ? 0 : 20;

    const handleChange=(event)=> {

        if (nombreDesplegable==='year'){
            dispatch(changeYear(event.target.value));
        } else {
            dispatch(changeNumero(event.target.value));
        }
      
     }



  return (
    <div>
    <label style={{color : 'black'}}><h1>{titulo}</h1></label>

    <select onChange={handleChange}>

    {lista.map((item, key)=> (
        <option key={key} value={item} selected={selectedDesplegable}>{item===0 ? 'Todos': item}</option>
    ))}

</select>
</div>
  )
}

export default DesplegablesFiltro;