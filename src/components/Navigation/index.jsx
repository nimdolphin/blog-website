import { Link } from "react-router-dom";
import { PATHS } from "../../router";

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to={PATHS.POSTS}>Posts</Link>
        <Link to={PATHS.NESTED_POST}>Post</Link>
        <Link to={PATHS.LOGIN}>Log In</Link>
        <Link to={PATHS.SIGNIN}>Sign In</Link>
      </nav>
    </div>
  );
};

export default Navigation;
