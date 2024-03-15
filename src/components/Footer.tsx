import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container flex flex-col gap-8 justify-center items-center md:flex-row md:justify-between">
        <div className="text-center">
          All Rights Reserved &copy;Catalyst 2024
        </div>
        <div>
          <ul className="flex justify-between items-center gap-4 text-2xl">
            <li>
              <a href="">
                <AiOutlineTwitter className="hover:text-accent transition-all" />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebookF className="hover:text-accent transition-all" />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineInstagram className="hover:text-accent transition-all" />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineYoutube className="hover:text-accent transition-all" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
