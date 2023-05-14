
import styles from './card.module.scss'
import {Link} from "react-router-dom";

const BooksCard = ({ volumeInfo,id }) => {



    return (
        <div className={styles.root}>
            <Link to={`/books/${id}`}><img  src={volumeInfo?.imageLinks?.thumbnail} /></Link>
            <p>{volumeInfo.categories}</p>
            <b>{volumeInfo.title}</b>
            <p>{volumeInfo.authors}</p>
        </div>
    );
};

export default BooksCard;