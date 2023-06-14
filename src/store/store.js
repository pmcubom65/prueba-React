import { configureStore } from "@reduxjs/toolkit";
import ListadoSlice from "./ListadoSlice";

const store= configureStore(
    {
        reducer: {
            listado : ListadoSlice
        }
    }
)

export default store;