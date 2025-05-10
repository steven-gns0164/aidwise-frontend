import './AidWise-Footer.css';


interface ContainerProps {
  name: string;
}

const AidWiseFooter: React.FC<ContainerProps> = ({ name }) => {
  return (
    <footer className="footer">
  <div className="footer-left">
    <img className="logo-footer" src="Logo-horizontal.png" alt="AidWise Logo" />
    <div className="social-icons">
      <img src="ig-logo.png" alt="Instagram" />
      <img src="fb-logo.png" alt="Facebook" />
      <img src="x-logo.png" alt="X" />
      <img src="git-logo.png" alt="GitHub" />
    </div>
  </div>

  <div className="footer-center">
    <h3>Homepage</h3>
    <hr className="footer-line" />
    <ul>
        <li><a href="#">PKH</a></li>
        <li><a href="#">BNPT</a></li>
        <li><a href="#">About AidWise</a></li>
        <li><a href="#team">Our Team</a></li>
        </ul>
  </div>

  <div className="footer-right">
    <p className="copyright">
        &copy;2025 <span className="white">AidWise</span> by <span className="yellow">HarapanBandung Team</span>
    </p>
  </div>
</footer>

  );
};

export default AidWiseFooter;