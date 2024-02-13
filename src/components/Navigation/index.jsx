import { Link } from "react-router-dom";
import { PATHS } from "../../router";
import "../../styles/global.scss";
import "./styles.scss";
import Logo from "../../assets/img/Logo.png";

const Navigation = () => {
  return (
    <nav className="header">
      <img src={Logo} alt="logo" className="logo" />
      <div className="navbar">
        <Link to={PATHS.POSTS} className="navbar-item">
          Posts
        </Link>
        <Link to={PATHS.NESTED_POST} className="navbar-item">
          Post
        </Link>
        <Link to={PATHS.LOGIN} className="navbar-item">
          Log In
        </Link>
        <Link to={PATHS.SIGNIN} className="navbar-item">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
