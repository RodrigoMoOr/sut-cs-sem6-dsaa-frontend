import { Avatar } from "@mui/material";
import {userPageMock} from "../mocks/user";
import "../styles/userBody.css";


export default function UserBody()
{
    return (
        <div className="uHead">
            <Avatar>JK</Avatar>
            <img src={userPageMock.user.imageUrl} />
            <h1> {userPageMock.user.name} {userPageMock.user.surname}</h1>
        </div>
    )
}