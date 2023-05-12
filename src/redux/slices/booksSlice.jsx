import {createSlice} from "@reduxjs/toolkit";
import {fetchBooks,fetchMoreBooks} from "../thunk/booksThunk";


const initialState = {
    category: "",
    sortBy: 'relevance',
    searchValue: "",
    items: [],
    status: "loading",
    startIndex: 1
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
        },
        // loadMoreBooks(state, action) {
        //     state.items = [...state.items,...action.payload]
        // },
        setStartIndex(state,action) {
            state.startIndex = state.startIndex + 10
        }
    },
    extraReducers: {
        [fetchBooks.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = "loaded"
        },
        [fetchBooks.pending]: (state) => {
            state.status = "loading"
        },
        [fetchBooks.rejected]: (state) => {
            state.status = "rejected"
        },
        [fetchMoreBooks.fulfilled]: (state, action) => {
            state.items = [...state.items,...action.payload]
            state.status = "loaded"
        },
        [fetchMoreBooks.pending]: (state) => {
            state.status = "loading"
        },
        [fetchMoreBooks.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export const booksReducer = booksSlice.reducer

export const {setSearchValue, setCategory, setSortBy, loadMoreBooks,setStartIndex} = booksSlice.actions