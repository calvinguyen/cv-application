import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
// TODO: import facebook and insta icons

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
