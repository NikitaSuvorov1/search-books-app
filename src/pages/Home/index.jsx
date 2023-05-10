import {useSelector} from "react-redux";
import styles from './home.module.scss'
import {useEffect} from "react";

export const Home = () => {
    const {items, status} = useSelector((state) => state.books)

    console.log(items)
    return (


        <div className={styles.root}>
            <div className={styles.books}>

            </div>
        </div>

    )
}