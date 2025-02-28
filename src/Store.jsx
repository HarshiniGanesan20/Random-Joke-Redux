import { configureStore } from "@reduxjs/toolkit";
import jokeSlice from "./Jokeslice";

const storeData = configureStore({
    reducer:{
        randomJoke:jokeSlice.reducer
    }
})

export default storeData
