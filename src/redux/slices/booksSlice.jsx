import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import {API_KEY} from "../../api/constants";
import api from "../../api/axios";

const initialState = {
    items: [],
    status: "loading"
}

export const fetchBooks = createAsyncThunk("books/fetchBooks",async () => {
    try {
        const {data} = await api.get(`volumes?q=time&printType=books&startIndex=1&key=${API_KEY}`)
        return data.items
    } catch (error) {
        console.log("Error",error)
    }
})



export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchBooks.fulfilled]: (state, action) => {
            state.items = [...state.items,...action.payload]
            state.status = "loaded"
        },
        [fetchBooks.pending]: (state) => {
            state.items = []
            state.status = "loading"
        },
        [fetchBooks.rejected]: (state) => {
            state.items = []
            state.status = "rejected"
        }
    }
})

export const booksReducer = booksSlice.reducer