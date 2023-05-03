import '../assets/css/SideBar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShareIcon from '@mui/icons-material/Share';
import TuneIcon from '@mui/icons-material/Tune';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FolderIcon from '@mui/icons-material/Folder';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <a href="#profile-form">
            <AccountCircleIcon />
            <p>Profile</p>
          </a>
        </li>
        <li>
          <a href="#social-form">
            <ShareIcon />
            <p>Social</p>
          </a>
        </li>
        <li>
          <a href="#skills-form">
            <TuneIcon />
            <p>Skills</p>
          </a>
        </li>
        <li>
          <a href="#hobbies-form">
            <SkateboardingIcon />
            <p>Hobby</p>
          </a>
        </li>
        <li>
          <a href="#school-form">
            <SchoolIcon />
            <p>School</p>
          </a>
        </li>
        <li>
          <a href="#work-form">
            <WorkHistoryIcon />
            <p>Work</p>
          </a>
        </li>
        <li>
          <a href="#projects-form">
            <FolderIcon />
            <p>Projects</p>
          </a>
        </li>
        <li>
          <a href="#orgs-form">
            <Diversity1Icon />
            <p>Orgs...</p>
          </a>
        </li>
        <li>
          <a href="#certs-form">
            <WorkspacePremiumIcon />
            <p>Cert...</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
