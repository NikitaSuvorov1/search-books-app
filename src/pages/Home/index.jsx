import {useSelector} from "react-redux";


export const Home = () => {
    const {items,status} = useSelector((state) => state.books)

    return (
        <>
            {status }
        </>
    )
}