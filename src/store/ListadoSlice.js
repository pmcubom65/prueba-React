import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    elementosAMostrar : 20,
    year : 0
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
        }
    }
});

export const {changeYear, changeNumero}=ListadoSlice.actions;
export default ListadoSlice.reducer;