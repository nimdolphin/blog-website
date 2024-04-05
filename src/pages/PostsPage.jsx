import AuthorInfo from "../components/AuthorInfo";
import PostsList from "../components/PostsList";
import Footer from "../components/Footer";
import ReactPortal from "../components/ReactPortal";

const PostsPage = () => {
  return (
    <>
      <AuthorInfo />
      <ReactPortal />
      <PostsList />
      <Footer />
    </>
  );
};

export default PostsPage;
