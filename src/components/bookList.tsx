import BookInList from "./bookInList";
import { userPageMock } from "../mocks/user";
import React from "react";
import { Card, CardContent } from "@mui/material";
import "../styles/bookInList.css";

export default function BookList() {
    let toReturn = []
    for(let i=0; i<userPageMock.purchaseHistory.purchases.length; i++)
    {
        toReturn .push (
        <Card className="bookCard" variant="outlined">
            <CardContent>
                <BookInList book={userPageMock.purchaseHistory.purchases[i].book} date={userPageMock.purchaseHistory.purchases[i].date}/>
            </CardContent>
        </Card>)
    }
    return (
    <div className="bookList">
        {toReturn}
    </div>
    )
}