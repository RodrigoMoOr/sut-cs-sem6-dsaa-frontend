import {userPageMock} from "../mocks/user";
import UserBody from "../components/userBody";
import UserHead from "../components/userHead";
import "../styles/userPage.css";

export default function User()
{
    return (
        <div className="userPage">
            <div className="cont">
                <UserHead />
                <UserBody />
            </div>
        </div>
    )
}