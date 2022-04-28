import { Avatar } from "@mui/material";
import {userPageMock} from "../mocks/user";
import "../styles/userHead.css";


export default function UserHead()
{
    return (
        <div className="uHead">
            <Avatar sx={{ width: 75, height: 75 }} className="headAv" src={userPageMock.user.imageUrl} alt={`${userPageMock.user.name} ${userPageMock.user.surname}`}/>
            <h1> {userPageMock.user.name} {userPageMock.user.surname}</h1>
        </div>
    )
}