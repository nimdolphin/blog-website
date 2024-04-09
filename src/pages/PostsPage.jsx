import AuthorInfo from "../components/AuthorInfo";
import Footer from "../components/Footer";
import PostsList from "../components/PostsList";
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
