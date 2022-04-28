import { Avatar } from "@mui/material";
import {userPageMock} from "../mocks/user";
import "../styles/userHead.css";


export default function UserHead()
{
    return (
        <div className="uHead">
            <Avatar src={userPageMock.user.imageUrl} />
            <h1> {userPageMock.user.name} {userPageMock.user.surname}</h1>
        </div>
    )
}