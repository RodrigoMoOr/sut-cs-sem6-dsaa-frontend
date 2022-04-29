import { Book } from "../mocks/user";
import "../styles/bookInList.css";


export default function BookInList(props: {book : Book, date : string})  
{
    return (
        <div className="bookInList">
            <div className="bookInList__image">
                <img src={props.book.imageUrl} alt="book" />
            </div>
            <div className="bookInList__info">
                <h5>{props.book.title}</h5>
                <p>{props.book.author}</p>
                <p>{props.book.isbn13}</p>
                <p>${props.book.price}</p>
                <p>Bought: {props.date}</p>
            </div>
        </div>
    )
}