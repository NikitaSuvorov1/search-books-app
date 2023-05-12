import {createSlice} from "@reduxjs/toolkit";
import {fetchBooks,fetchMoreBooks} from "../thunk/booksThunk";


const initialState = {
    category: "",
    sortBy: 'relevance',
    searchValue: "",
    items: [],
    status: "loading",
    startIndex: 1,
    flagLoadMore: false
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
        setFlagLoadMore(state,action) {
            state.flagLoadMore = action.payload
        },
        setStartIndex(state,action) {
            state.startIndex = state.startIndex + 10
        }
    },
    extraReducers: {
        [fetchBooks.fulfilled]: (state, action) => {
            if (state.flagLoadMore) {
                state.items = [...state.items,...action.payload]
            } else {
                state.items = action.payload
            }
            state.flagLoadMore = false
            // state.items = action.payload
            state.status = "loaded"
        },
        [fetchBooks.pending]: (state) => {
            state.status = "loading"
        },
        [fetchBooks.rejected]: (state) => {
            state.status = "rejected"
        },

    }
})

export const booksReducer = booksSlice.reducer

export const {setSearchValue, setCategory, setSortBy, setFlagLoadMore,setStartIndex} = booksSlice.actions