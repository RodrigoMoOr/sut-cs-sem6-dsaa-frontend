import BookInList from "./bookInList";
import { userPageMock } from "../mocks/user";
import "../styles/bookList.css";
import React from "react";

export default function BookList() {
    let toReturn = []
    for(let i=0; i<userPageMock.purchaseHistory.purchases.length; i++)
    {
        toReturn .push ( <BookInList book={userPageMock.purchaseHistory.purchases[i].book} date={userPageMock.purchaseHistory.purchases[i].date}/>)
    }
    return (
    <div className="bookList">
        {toReturn}
    </div>
    )
}