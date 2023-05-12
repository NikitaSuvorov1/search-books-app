import {useDispatch, useSelector} from "react-redux";
import styles from './home.module.scss'
import {useEffect} from "react";
import BooksCard from "../../components/Card";
import {setFlagLoadMore, setStartIndex} from "../../redux/slices/booksSlice";
import useDebounce from "../../hooks/useDebounceHook";
import {fetchBooks,fetchMoreBooks} from "../../redux/thunk/booksThunk";

export const Home = () => {
    const {items,category,searchValue,sortBy,startIndex,flagLoadMore} = useSelector((state) => state.books)
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
            <span>Found {} books</span>
            <div className={styles.books}>
                {items?.map((book) =>
                <BooksCard {...book} />
                    )}
            </div>
            <button onClick={handleClick}>Load more</button>
        </div>

    )
}