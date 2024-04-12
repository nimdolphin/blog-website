import { Route, Routes } from "react-router-dom";
import PostDescription from "../components/PostDescription";
import PostsPage from "../pages/PostsPage";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SignInPage";

export const PATHS = {
  POSTS: "/",
  NESTED_POST: "post/:id",
  LOGIN: "/logIn",
  SIGNIN: "/signIn",
};

export const router = () => (
  <Routes>
    <Route path={PATHS.POSTS} element={<PostsPage />} />
    <Route path={PATHS.NESTED_POST} element={<PostDescription />} />
    <Route path={PATHS.LOGIN} element={<LoginPage />} />
    <Route path={PATHS.SIGNIN} element={<SignInPage />} />
  </Routes>
);
