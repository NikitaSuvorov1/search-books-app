import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api/axios";
import {API_KEY} from "../../api/constants";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async (params) => {
    try {
        const {category, searchValue, sortBy,startIndex} = params
        const {data} = await api.get(`volumes?q=${searchValue || ""}+subject:${category}&printType=books&orderBy=${sortBy}&startIndex=${startIndex}&key=${API_KEY}`)
        return data.items
    } catch (error) {
        console.log("Error", error)
    }
})

export const fetchMoreBooks = createAsyncThunk("books/fetchMoreBooks", async (params) => {
    try {
        const {category, searchValue, sortBy,startIndex} = params
        const {data} = await api.get(`volumes?q=${searchValue || ""}+subject:${category}&printType=books&orderBy=${sortBy}&startIndex=${startIndex}&key=${API_KEY}`)
        return data.items
    } catch (error) {
        console.log("Error", error)
    }
})
