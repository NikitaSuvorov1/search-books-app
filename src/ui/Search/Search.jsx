import React from "react";
import styles from './search.module.scss'
import useDebounce from "../../hooks/useDebounceHook";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../redux/slices/booksSlice";
import {fetchBooks} from "../../redux/thunk/booksThunk";


export const Search = () => {

    const dispatch = useDispatch()
    const {searchValue} = useSelector((state) => state.books)


    const handleChangeValue = (e) => {
        dispatch(setSearchValue(e.target.value))
    }

    return (
        <div className={styles.root}>
            <input placeholder="Поиск книги..."  onChange={handleChangeValue} type={"text"} value={searchValue}/>
        </div>
    )
}