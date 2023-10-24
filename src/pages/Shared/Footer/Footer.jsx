import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral text-primary-content">
      <aside>
        <p className="font-bold text-xl mb-3">
          Dr. Auto <br />
          Providing reliable car service since 1997
        </p>
        <p>Copyright © 2023 - All right reserved</p>
        <p>Developed by S. M. Sahariar</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link className="text-xl" to="https://www.facebook.com/">
            <FaFacebook />
          </Link>
          <Link className="text-xl" to="https://www.twitter.com/">
            <FaXTwitter />
          </Link>
          <Link className="text-xl" to="https://www.youtube.com/">
            <FaYoutube />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
