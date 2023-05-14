import {createSlice} from "@reduxjs/toolkit";
import {fetchBookById, fetchBooks, fetchMoreBooks} from "../thunk/booksThunk";


const initialState = {
    category: "",
    sortBy: 'relevance',
    searchValue: "",
    items: [],
    status: "loading",
    startIndex: 1,
    flagLoadMore: false,
    book: {}
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
                state.items.items = [...state.items?.items,...action.payload?.items]
            } else {
                state.items = action.payload
            }
            state.flagLoadMore = false
            state.status = "loaded"
        },
        [fetchBooks.pending]: (state) => {
            state.status = "loading"
        },
        [fetchBooks.rejected]: (state) => {
            state.status = "rejected"
        },

        [fetchBookById.fulfilled]: (state,action) => {
            state.book = action.payload
        },
        [fetchBookById.rejected]: (state,action) => {
            state.book = {}
        },
        [fetchBookById.pending]: (state,action) => {
            state.book = {}
        }

    }
})

export const booksReducer = booksSlice.reducer

export const {setSearchValue, setCategory, setSortBy, setFlagLoadMore,setStartIndex} = booksSlice.actions