import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import styles from './card.module.scss'

const BooksCard = ({ volumeInfo }) => {
    return (
        <Card className={styles.root} sx={{ maxHeight: "auto" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={volumeInfo?.imageLinks?.smallThumbnail}
                    alt="green iguana"
                />
                <CardContent>
                    <p>{volumeInfo?.categories?.[0]}</p>
                    <b>{volumeInfo?.title}</b>
                    <p>{volumeInfo?.authors}</p>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default BooksCard;