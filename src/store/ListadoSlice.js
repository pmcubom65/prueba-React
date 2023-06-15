import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    elementosAMostrar : 20,
    year : 0,
    total : 0,
    inicio: 0,
    fin: 20
}

const ListadoSlice=createSlice({
    name: 'listar',
    initialState,
    reducers : {
        changeYear(state, action) {
            state.year=action.payload
        },
        changeNumero(state, action) {
            state.elementosAMostrar=action.payload
        },
        changeTotal(state, action) {
            state.total=action.payload
        },
        changeInicio(state, action){
            state.inicio= action.payload==1 ? 0 : state.elementosAMostrar*action.payload-state.elementosAMostrar
        },
        changeFin(state, action){
            state.fin=action.payload==1 ? state.elementosAMostrar : state.elementosAMostrar*action.payload
        }
    }
});

export const {changeYear, changeNumero, changeTotal, changeInicio, changeFin}=ListadoSlice.actions;
export default ListadoSlice.reducer;