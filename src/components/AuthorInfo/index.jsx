import "./styles.scss";
import AuthorPhoto from "../../assets/img/AuthorPhoto.png";
import FacebookBtn from "../../assets/img/FacebookBtn.png";
import TwitterBtn from "../../assets/img/TwitterBtn.png";
import InstagramBtn from "../../assets/img/InstagramBtn.png";
import YoutubeBtn from "../../assets/img/YoutubeBtn.png";

const AuthorInfo = () => {
  return (
    <div className="author-container">
      <div className="author-profile">
        <img src={AuthorPhoto} className="author-photo" alt="author" />
        <div className="author-name">
          <h1 className="name">Jonathan Doe</h1>
          <p className="collaborator">Collaborator & Editor</p>
        </div>
      </div>

      <div className="author-details">
        Meet Jonathan Doe, a passionate writer and blogger with a love for
        technology and travel. Jonathan holds a degree in Computer Science and
        has spent years working in the tech industry, gaining a deep
        understanding of the impact technology has on our lives.
      </div>

      <div className="author-links">
        <img src={FacebookBtn} alt="facebook" className="link" />
        <img src={TwitterBtn} alt="twitter" className="link" />
        <img src={InstagramBtn} alt="instagram" className="link" />
        <img src={YoutubeBtn} alt="youtube" className="link" />
      </div>
    </div>
  );
};

export default AuthorInfo;
