import { Avatar, Grid } from "@mui/material";
import {userPageMock} from "../mocks/user";
import BookInList from "./bookInList";
import BookList from "./bookList";


export default function UserBody()
{
    return (
        <div className="mainBody">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <BookList/>
                </Grid>
            </Grid>
        </div>
    )
}