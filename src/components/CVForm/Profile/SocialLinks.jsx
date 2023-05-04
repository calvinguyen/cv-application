import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialLinks = ({ socialProfiles }) => {
  return (
    <section className="social-links">
      <ul className="social-links-list">
        {socialProfiles.linkedIn && (
          <li className="social-link-item">
            <a href="#cv-profile">
              <LinkedInIcon />
              <span className="social-text">{socialProfiles.linkedIn}</span>
            </a>
          </li>
        )}
        {socialProfiles.github && (
          <li className="social-link-item">
            <a href="#cv-profile">
              <GitHubIcon />
              <span className="social-text">{socialProfiles.github}</span>
            </a>
          </li>
        )}
        {socialProfiles.twitter && (
          <li className="social-link-item">
            <a href="#cv-profile">
              <TwitterIcon />
              <span className="social-text">{socialProfiles.twitter}</span>
            </a>
          </li>
        )}
        {socialProfiles.facebook && (
          <li className="social-link-item">
            <a href="#cv-profile">
              <FacebookIcon />
              <span className="social-text">{socialProfiles.facebook}</span>
            </a>
          </li>
        )}
        {socialProfiles.instagram && (
          <li className="social-link-item">
            <a href="#cv-profile">
              <InstagramIcon />
              <span className="social-text">{socialProfiles.instagram}</span>
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};

export default SocialLinks;
