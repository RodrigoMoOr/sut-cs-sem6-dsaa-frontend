import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './books-list.scss';
import BookDTO from '../BookDTO';
import './books-list-item.scss';

interface BooksListItemProps {
    book: BookDTO;
    isLoading: boolean;
}

export const BooksListItem: React.FC<BooksListItemProps> = (props) => {

    return (
        <div className={`books-list-item-container${props.isLoading ? '' : ''}`}>
            <div className="books-list-item">
                <img className='book-cover' src={props.book.coverImageURL} />
                <p className='book-title'>{props.book.title}</p>
                <p className='book-property'>Author(s): {props.book.author}</p>
                <p className='book-property'>ISBN: {props.book.isbn}</p>
                <p className='book-price'>{props.book.price} PLN</p>
            </div>
        </div>
    );
}

export default BooksListItem;