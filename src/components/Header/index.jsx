import React from "react";
import styles from './Header.module.scss'
import {Search} from "../../ui/Search/Search";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks} from "../../redux/thunk/booksThunk";
import {Form} from 'react-bootstrap'
import {setCategory,setSortBy} from '..//../redux/slices/booksSlice'
import {Select} from "../../ui/Select";

export const Header = () => {

    const {searchValue,category,sortBy} = useSelector((state) => state.books)
    const dispatch = useDispatch()

    const loadMoreBooks = () => {
        dispatch(fetchBooks({searchValue,category,sortBy}))
    }

    React.useEffect(() => {
        dispatch(fetchBooks({searchValue,category,sortBy}))
    },[searchValue,category,sortBy])

    return (
        <div className={styles.root}>
            <h1>Search for books</h1>
            <Search />
            <Select/>
            <button onClick={loadMoreBooks}>Load more</button>
        </div>
    )
}