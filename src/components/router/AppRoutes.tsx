import {Route, Routes} from "react-router-dom";
import {Home} from "../../views/Home";
import {SignIn} from "../../views/SignIn";
import {SignUp} from "../../views/SignUp";
import User from "../../views/User";

export const AppRoutes = () => {
    return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="profile" element={<User />} />
      </Routes>
    )
}