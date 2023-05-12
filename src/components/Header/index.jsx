import React from "react";
import styles from './Header.module.scss'
import {Search} from "../../ui/Search/Search";
import {Select} from "../../ui/Select";


export const Header = () => {

    return (
        <div className={styles.root}>
            <h1>Search for books</h1>
            <Search />
            <Select/>

        </div>
    )
}