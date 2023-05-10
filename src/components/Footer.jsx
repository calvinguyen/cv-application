import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer>
      <p className="footer-text">Copyright &copy; calvinguyen</p>
      <a
        href="https://github.com/calvinguyen"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <GitHubIcon style={{ fontSize: 'large' }} />
      </a>
    </footer>
  );
}

export default Footer;
