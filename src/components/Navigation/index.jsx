import { Link } from "react-router-dom";
import { PATHS } from "../../router";

import "../../styles/global.scss";
import "./styles.scss";
import Logo from "../../assets/img/Logo.png";

const Navigation = () => {
  return (
    <div>
      <nav className="header">
        <img src={Logo} alt="logo" className="logo" />
        <div className="navbar">
          <Link to={PATHS.POSTS} class="navbar-item">
            Posts
          </Link>
          <Link to={PATHS.NESTED_POST} class="navbar-item">
            Post
          </Link>
          <Link to={PATHS.LOGIN} class="navbar-item">
            Log In
          </Link>
          <Link to={PATHS.SIGNIN} class="navbar-item">
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
