import React, {useState} from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeInicio, changeFin } from '../store/ListadoSlice';


function PaginationComponent() {

    const listadoFilter=useSelector(state=>state.listado)
    const dispatch=useDispatch();

    const [active, setActive]=useState(1);
    
    let numeropaginas=  Math.ceil(listadoFilter.total/listadoFilter.elementosAMostrar);
    const items=Array.from({length: numeropaginas}, (_, i) => i + 1)


    const paginationClick=(number)=> {
        setActive(number)
        dispatch(changeInicio(number));
        dispatch(changeFin(number));
    }



   return (
    <div  className='pagination'>
        {
                items.map((number, key) => (

                    <Pagination.Item key={number} active={number === active} onClick={()=>paginationClick(number)}>
                        {number}
                    </Pagination.Item>
                
                ))
        }
    </div>
   )
  
}

export default PaginationComponent;