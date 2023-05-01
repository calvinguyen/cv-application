import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../../assets/css/CVProfile.css';
import noAvatar from '../../assets/images/noAvatar.jpg';


const CVProfile = () => {
  return (
    <section id="cv-profile">

      <section className="general-info">
        <img src={noAvatar} alt="profile" className="profile-pic" />
        <p className="current-location">San Fancisco</p>
        <div className="general-links">
          <a href="cnguyenr42@gmail.com">cnguyenr42@gmail.com</a>
          <a href="http://calvinguyen.com">http://calvinguyen.com</a>
        </div>
      </section>

      <section className="social-links">
        <ul className="social-links-list">
          <li className="social-link-item">
            <a href="#cv-profile">
              <LinkedInIcon />
              <span className="social-text">linkedin.com/in/calvintnguyen</span>
            </a>
          </li>
          <li className="social-link-item">
            <a href="#cv-profile">
              <GitHubIcon />
              <span className="social-text">github.com/calvinguyen</span>
            </a>
          </li>
          <li className="social-link-item">
            <a href="#cv-profile">
              <TwitterIcon />
              <span className="social-text">twitter.com/calvinguyen</span>
            </a>
          </li>
        </ul>
      </section>

      <section className="skills">
        <h1 className="section-title section-title-profile">TECHNOLOGIES</h1>
        <ul className="skills-list">
          <li className="skill-item">
            <p>ReactJS</p>
            <progress value="100" max="100" />
          </li>
          <li className="skill-item">
            <p>Jest</p>
            <progress value="100" max="100" />
          </li>
          <li className="skill-item">
            <p>ExpressJS</p>
            <progress value="100" max="100" />
          </li>
          <li className="skill-item">
            <p>Jupyter Notebook</p>
            <progress value="100" max="100" />
          </li>
          <li className="skill-item">
            <p>Django</p>
            <progress value="100" max="100" />
          </li>
        </ul>
      </section>
      
      <section className="hobbies">
        <h1 className="section-title section-title-profile">TECHNICAL SKILLS</h1>

        <div className="hobbies-item-container">
          <p className="hobbies-item">JavaScript</p>
          <p className="hobbies-item">Python</p>
          <p className="hobbies-item">Ruby</p>
          <p className="hobbies-item">Scala</p>
          <p className="hobbies-item">Go</p>
          <p className="hobbies-item">HTML</p>
          <p className="hobbies-item">CSS</p>
          <p className="hobbies-item">Ansible</p>
        </div>
      </section>
      
      <section className="education">
        <h1 className="section-title section-title-profile">EDUCATION</h1>

        <div className="card">
          <p className="card-title">The University of Texas at Austin</p>
          <p className="education-location-date">Austin, TX &#8226; 2010 — 2014</p>
          <p className="card-subtitle-education">B.S. Computer Science</p>
        </div>
      </section>
      
      <section className="certifications">
        <h1 className="section-title section-title-profile">CERTIFICATIONS</h1>

        <div className="card card-certification">
          <p className="title-cert">Developing Applications with Google Cloud Platform</p>
          <p className="subtitle-cert">Offered by Google Cloud, 2014</p>
        </div>
      </section>

    </section>
  );
};

export default CVProfile;
