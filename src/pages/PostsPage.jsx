import AuthorInfo from "../components/AuthorInfo";
import PostsList from "../components/PostsList";
import ReactPortal from "../components/ReactPortal";

const PostsPage = () => {
  return (
    <>
      <AuthorInfo />
      <ReactPortal />
      <PostsList />
    </>
  );
};

export default PostsPage;
