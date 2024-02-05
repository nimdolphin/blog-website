import { Route, Routes } from "react-router-dom";
import Post from "../pages/Post";
import Posts from "../pages/Posts";
import LogIn from "../pages/LogIn";
import SignIn from "../pages/SignIn";

export const PATHS = {
  POSTS: "/",
  NESTED_POST: "/post:id",
  LOGIN: "/logIn",
  SIGNIN: "/signIn",
};

export const router = () => (
  <Routes>
    <Route path={PATHS.POSTS} element={<Posts />} />
    <Route path={PATHS.NESTED_POST} element={<Post />} />
    <Route path={PATHS.LOGIN} element={<LogIn />} />
    <Route path={PATHS.SIGNIN} element={<SignIn />} />
  </Routes>
);
