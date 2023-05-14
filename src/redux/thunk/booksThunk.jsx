import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api/axios";
import {API_KEY} from "../../api/constants";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async (params) => {
    try {
        const {category, searchValue, sortBy,startIndex} = params
        const {data} = await api.get(`volumes?q=${searchValue || ""}+subject:${category}&printType=books&orderBy=${sortBy}&maxResult=30&startIndex=${startIndex}&key=${API_KEY}`)
        return data
    } catch (error) {
        console.log("Error", error)
    }
})

export const fetchBookById = createAsyncThunk('books/fetchBookById', async (params) => {
    try {
        const {id} = params
        const {data} = await api.get(`volumes/${id}`)
        return data.volumeInfo
    } catch (error) {
        console.log("error",error)
    }
})
