import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchBookById} from "../../redux/thunk/booksThunk";
import styles from './bookInfo.module.scss'


export const BookInfo = () => {

    const {book} = useSelector((state) => state.books)
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(fetchBookById({id}))
    },[])

    const {imageLinks,title,authors,description,categories} = book

    return (
        <div className={styles.root}>
            <img src={book.imageLinks?.thumbnail} />
            <div className={styles.textBlock}>
                <span>{categories?.[0]}</span>
                <h1>{title}</h1>
                <p>{authors?.[0]}</p>
                <p>{description}</p>
            </div>

        </div>
    )
}