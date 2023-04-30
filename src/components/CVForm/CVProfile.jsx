import '../../assets/css/CVProfile.css';

const CVProfile = () => {
  return (
    <section id="cv-profile">

      <section className="general-info">
        <img src="" alt="profile" className="profile-pic" />
        <p className="current-location">San Fancisco</p>
        <div className="general-links">
          <a href="cnguyenr42@gmail.com">cnguyenr42@gmail.com</a>
          <a href="http://calvinguyen.com">http://calvinguyen.com</a>
        </div>
      </section>

      <section className="social-links">
        <div className="social-link-item">
          <span className="social-icon">icon</span>
          <a href="#cv-profile">linkedin.com/in/calvintnguyen</a>
        </div>
        <div className="social-link-item">
          <span className="social-icon">icon</span>
          <a href="#cv-profile">github.com/calvinguyen</a>
        </div>
        <div className="social-link-item">
          <span className="social-icon">icon</span>
          <a href="#cv-profile">twitter.com/calvinguyen</a>
        </div>
      </section>

      <section className="skills">
        <h1 className="section-title">TECHNOLOGIES</h1>
        <ul className="skills-list">
          <li className="skill-item">
            <p>ReactJS</p>
            <span>bar</span>
          </li>
          <li className="skill-item">
            <p>Jest</p>
            <span>bar</span>
          </li>
          <li className="skill-item">
            <p>ExpressJS</p>
            <span>bar</span>
          </li>
          <li className="skill-item">
            <p>Jupyter Notebook</p>
            <span>bar</span>
          </li>
          <li className="skill-item">
            <p>Django</p>
            <span>bar</span>
          </li>
        </ul>
      </section>
      
      <section className="hobbies">
        <h1 className="section-title">TECHNICAL SKILLS</h1>
      </section>
      
      <section className="education">
        <h1 className="section-title">EDUCATION</h1>

        <div className="card">
          <p className="card-title">The University of Texas at Austin</p>
          <p className="education-location-date">Austin, TX &#8226; 2010 — 2014</p>
          <p className="card-subtitle-education">B.S. Computer Science</p>
        </div>
      </section>
      
      <section className="certifications">
        <h1 className="section-title">CERTIFICATIONS</h1>

        <div className="card">
          <p className="card-title-cert">Developing Applications with Google Cloud Platform</p>
          <p className="card-subtitle-cert">Offered by Google Cloud, 2014</p>
        </div>
      </section>

    </section>
  );
};

export default CVProfile;
