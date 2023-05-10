import {Form} from "react-bootstrap";
import styles from './select.module.scss'
import React from "react";
import {setCategory, setSortBy} from "../../redux/slices/booksSlice";
import {useDispatch} from "react-redux";


export const Select = () => {

    const categoriesList = ["All", "Philosophy", "Foreign Language Study", "Computer programming", "Fiction", "Education", "Computers", "Real-time data processing", "Language Arts & Disciplines"]
    const sortList = ["relevance", "newest"]
    const dispatch = useDispatch()

    const handleChangeCategory = (event) => {
        dispatch(setCategory(event.target.value))
    }

    const handleChangeSort = (event) => {
        dispatch(setSortBy(event.target.value))
    }

    return (
        <div className={styles.root}>
            <Form.Select className={styles.select} onChange={handleChangeCategory}
                          aria-label="Default select example">
                {categoriesList.map((category) =>
                    <option key={category} value={category}>{category}</option>)}
            </Form.Select>
            <Form.Select className={styles.select} onChange={handleChangeSort}
                         aria-label="Default select example">
                {sortList.map((sortBy) =>
                    <option key={sortBy} value={sortBy}>{sortBy}</option>)}
            </Form.Select></div>
    )
}
