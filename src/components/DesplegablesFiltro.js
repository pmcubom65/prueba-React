import React from 'react';
import { useDispatch } from 'react-redux';
import { changeYear, changeNumero, changeTotal, changeInicio, changeFin, changePaginaActiva } from '../store/ListadoSlice';

function DesplegablesFiltro({nombreDesplegable, lista, titulo, listaGlobal}) {


    const dispatch=useDispatch();

    const selectedDesplegable=(nombreDesplegable==='year') ? 0 : 20;

    const handleChange=(event)=> {

        dispatch(changeInicio(1))
        dispatch(changePaginaActiva(1));

        if (nombreDesplegable==='year'){
            dispatch(changeYear(event.target.value));
            if (event.target.value==0){
                dispatch(changeTotal(listaGlobal.length))
            } else {
                dispatch(changeTotal(listaGlobal.filter(item=> item.releaseYear==event.target.value).length))
            }
            dispatch(changeFin(1))
        } else {
            dispatch(changeNumero(event.target.value));
            dispatch(changeFin(1))
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