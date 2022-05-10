import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './books-list.scss';
import BookDTO from '../BookDTO';
import { Avatar, Grid, ListItem, ListItemAvatar, ListItemText, Pagination } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import BooksListItem from './books-list-item';

interface BooksListProps {
    books: BookDTO[];
    pageIndex: number;
    pagesNumber: number;
    isLoading: boolean;
}

export const BooksList: React.FC<BooksListProps> = (props) => {

    const onPageChange = (e: React.ChangeEvent<unknown>, newPageNumber: number) => {
        console.log(newPageNumber);
    };

    return (
        <div>
            <Pagination page={props.pageIndex} count={props.pagesNumber} onChange={onPageChange} color="primary" />
            
            <Grid className='p-2 w-100 d-flex flex-row flex-wrap justify-content-around align-items-center' container spacing={2}>
                { props.books.map((book, i) => <BooksListItem isLoading={props.isLoading} book={book} key={i}/>) }
            </Grid>
        </div>
    );
}

export default BooksList;