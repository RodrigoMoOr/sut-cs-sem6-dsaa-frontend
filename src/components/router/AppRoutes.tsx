import {Route, Routes} from "react-router-dom";
import {Home} from "../../views/Home";
import {SignIn} from "../../views/SignIn";
import {SignUp} from "../../views/SignUp";
import User from "../../views/User";
import {Author} from "../../views/Author";
import {Genre} from "../../views/Genre";
import Settings from "../../views/Settings";
import {Authors} from "../../views/Authors";
import LibraryRoot from "../../library-ui/library-root";
import {Genres} from "../../views/Genres";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      {/*<Route path="books" element={<LibraryRoot />} />*/}
      <Route path="authors" element={<Authors />} />
      <Route path="authors/:id" element={<Author />} />
      <Route path="genres" element={<Genres />} />
      <Route path="genres/:id"  element={<Genre />} />
      <Route path="profile" element={<User />} />
      <Route path="profile/settings" element={<Settings />} />
    </Routes>
  )
}