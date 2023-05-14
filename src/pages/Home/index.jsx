import {useDispatch, useSelector} from "react-redux";
import styles from './home.module.scss'
import {useEffect} from "react";
import BooksCard from "../../components/Card";
import {setFlagLoadMore, setStartIndex} from "../../redux/slices/booksSlice";
import useDebounce from "../../hooks/useDebounceHook";
import {fetchBooks} from "../../redux/thunk/booksThunk";

export const Home = () => {
    const {items,category,searchValue,sortBy,startIndex} = useSelector((state) => state.books)
    const dispatch = useDispatch()
    const debounceValue = useDebounce(searchValue,1000)


    const handleClick = () => {
        dispatch(setStartIndex())
        dispatch(setFlagLoadMore(true))
    }

    useEffect(() => {
        dispatch(fetchBooks({searchValue,category,sortBy,startIndex}))
    },[debounceValue,category,sortBy,startIndex])

    return (


        <div className={styles.root}>
            <span>{items.items && `Found ${items.totalItems} books`}</span>
            <div className={items.items ? styles.books : styles.notFound}>
                {items.items ? items?.items?.map((book) =>
                <BooksCard {...book} />
                ) : <h1>Books Not Found</h1>}
            </div>
            {items.items && <button onClick={handleClick}>Load more</button>}
        </div>

    )
}