import "./styles.scss";

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <p>Developed By Priya Sonar</p>
      <p>&copy; 2024. All Rights Reserved</p>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/_ayirp__?igsh=MTI2d2k3M3NjaGd2aA=="
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com"
          target="https://github.com/priyasonar31"
          rel="noopener noreferrer"
          className="icon github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/priya-sonar-94355012b/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};
