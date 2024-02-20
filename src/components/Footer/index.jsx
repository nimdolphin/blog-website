// import Input from "../Input";
// import Button from "../Button";
// import Envelope from "../../assets/img/Envelope.png";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="background-footer">
      <div className="footer">
        <div className="about">
          <h1 className="about-title">About</h1>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="address">
            <p className="about-contacts">
              <span className="bold">Email :</span> info@jstemplate.net
            </p>
            <p className="about-contacts">
              <span className="bold">Phone :</span> 880 145 768 921
            </p>
          </div>
        </div>

        <div className="quick-link">
          <h1 className="about-title">Quick Link</h1>
          <a href="#" className="quick-page">
            Home
          </a>
          <a href="#" className="quick-page">
            About
          </a>
          <a href="#" className="quick-page">
            Blog
          </a>
          <a href="#" className="quick-page">
            Contact
          </a>
        </div>

        <div className="category-link">
          <h1 className="about-title">Category</h1>
          <a href="#" className="quick-category">
            Lifestyle
          </a>
          <a href="#" className="quick-category">
            Travel
          </a>
          <a href="#" className="quick-category">
            Study
          </a>
          <a href="#" className="quick-category">
            Sports
          </a>
        </div>

        {/* <div className="input">
          <div className="input-with-logo">
            <img className="envelope" src={Envelope} alt="envelope" />
            <Input
              placeholder="Your Email"
              type="text"
              onChange={handleChange}
              value={value}
            />
          </div>
          <Button label="Subscribe" width={320} />
        </div> */}
      </div>

      <div className="bottom-c">
        <p className="bottom-c-footer">
          © JS Template 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
