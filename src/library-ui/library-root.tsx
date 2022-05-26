import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './library-root.scss';
import { BOOKS_SEED_DATA } from './BookDTO';
import BooksList from './books-list/books-list';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

interface LibraryProps {
    
}

export const LibraryRoot: React.FC<LibraryProps> = (props) => {

    let [books, setBooks] = useState(BOOKS_SEED_DATA);
    let [isLoading, setIsLoading] = useState(true);

    const mockLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 10000);
    };
    mockLoading();

    return (
        <div className='p-5 w-100 h-100'>
            <h1>This is library root</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sequi molestias commodi illo harum. Nulla aspernatur nobis ratione eius quidem expedita deleniti sed praesentium sint laboriosam quibusdam, repudiandae unde assumenda nostrum laborum, voluptate placeat adipisci sapiente provident libero quisquam animi. Aut inventore consequuntur blanditiis tempora doloremque nobis aliquam ex cum?</p>

            <div className="py-3">
                <Accordion>
                    <AccordionSummary>
                        <Typography>Filter</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Filters list
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography>Sort</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Sorts list
                    </AccordionDetails>
                </Accordion>
            </div>

            <BooksList isLoading={isLoading} books={books} pagesNumber={2} pageIndex={2} />
        </div>
    );
}

export default LibraryRoot;