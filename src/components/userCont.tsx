import UserHead from "../components/userHead";
import UserBody from "../components/userBody";
import "../styles/userCont.css";


export default function UserCont() {
    return (
        <div className="cont">
            <UserHead />
            <UserBody />
        </div>
    );
}