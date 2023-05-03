import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialProfiles = () => {
  return (
    <section className="edit-section">
      <h1 className='edit-section-title'>Your Social Profiles</h1>

      <form className=''>
        <div className="two-col">
          <div className="input-container">
            <div className="label-container">
              <LinkedInIcon />
              <span className="label">LinkedIn</span>
            </div>
            <input 
              type="text"
              />
          </div>
          <div className="input-container">
            <div className="label-container">
              <TwitterIcon />
              <span className="label">Twitter</span>
            </div>
            <input 
              type="text"
              />
          </div>
          <div className="input-container">
            <div className="label-container">
              <FacebookIcon />
              <span className="label">Facebook</span>
            </div>
            <input 
              type="text"
              />
          </div>
          <div className="input-container">
            <div className="label-container">
              <InstagramIcon />
              <span className="label">Instagram</span>
            </div>
            <input 
              type="text"
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
            />
        </div>
      </form>
    </section>
  )
}

export default SocialProfiles