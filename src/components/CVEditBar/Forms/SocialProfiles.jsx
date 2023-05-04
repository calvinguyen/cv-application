import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialProfiles = ({ socialProfiles, onSocialProfileChange }) => {
  return (
    <section id="social-form" className="edit-section">
      <h1 className="edit-section-title">Your Social Profiles</h1>

      <form className="">
        <div className="two-col">
          <div className="input-container">
            <div className="label-container">
              <LinkedInIcon />
              <span className="label">LinkedIn</span>
            </div>
            <input
              type="text"
              name="linkedIn"
              value={socialProfiles.linkedIn}
              onChange={(e) => onSocialProfileChange(e)}
            />
          </div>
          <div className="input-container">
            <div className="label-container">
              <TwitterIcon />
              <span className="label">Twitter</span>
            </div>
            <input
              type="text"
              name="twitter"
              value={socialProfiles.twitter}
              onChange={(e) => onSocialProfileChange(e)}
            />
          </div>
          <div className="input-container">
            <div className="label-container">
              <FacebookIcon />
              <span className="label">Facebook</span>
            </div>
            <input
              type="text"
              name="facebook"
              value={socialProfiles.facebook}
              onChange={(e) => onSocialProfileChange(e)}
            />
          </div>
          <div className="input-container">
            <div className="label-container">
              <InstagramIcon />
              <span className="label">Instagram</span>
            </div>
            <input
              type="text"
              name="instagram"
              value={socialProfiles.instagram}
              onChange={(e) => onSocialProfileChange(e)}
            />
          </div>
        </div>
        <div className="input-container span-col">
          <div className="label-container">
            <GitHubIcon />
            <span className="label">Github</span>
          </div>
          <input
            type="text"
            name="github"
            value={socialProfiles.github}
            onChange={(e) => onSocialProfileChange(e)}
          />
        </div>
      </form>
    </section>
  );
};

export default SocialProfiles;
