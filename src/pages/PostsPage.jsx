import AuthorInfo from "../components/AuthorInfo";
import PostsList from "../components/PostsList";
import Footer from "../components/Footer";
import Button from "../components/Button";

const PostsPage = () => {
  return (
    <>
      <AuthorInfo />
      <Button type="submit" label="Write an article" width={500} />
      <PostsList />
      <Footer />
    </>
  );
};

export default PostsPage;
