import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
    joke: "",
    status:""
}


const fetchJoke = createAsyncThunk("chunkijokes", async (cate)=> {
    return axios.get(`https://api.chucknorris.io/jokes/random?category=${cate}`).then((item) => {
        console.log(item.data.value)
        return item.data.value
    })
})

const jokeSlice = createSlice({
    name: "joke",
    initialState,
    reducers:
    {
    },

    extraReducers:(build)=>{
     build.addCase(fetchJoke.pending,(state)=>{
        console.log("Loading...")
        state.status="Loading..."
     }).addCase(fetchJoke.fulfilled,(state,action)=>{
           state.joke=action.payload
           state.status = ""
     })
    }
})



export { fetchJoke }

export default jokeSlice