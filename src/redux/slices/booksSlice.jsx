import {createSlice} from "@reduxjs/toolkit";
import {fetchBooks} from "../thunk/booksThunk";

const initialState = {
    items: [],
    status: "loading",
    category: "",
    sortBy: 'relevance',
    searchValue: ""
}

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload
        },
        setSortBy(state, action) {
            state.sortBy = action.payload
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        }
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

export const {setSearchValue, setCategory, setSortBy, getMoreBooks} = booksSlice.actions