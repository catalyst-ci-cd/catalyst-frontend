import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-ternary py-8">
      <div className="container flex flex-col gap-8 justify-center items-center md:flex-row md:justify-between">
        <div className="text-center">
          All Rights Reserved &copy; Catalyst 2023
        </div>
        <div>
          <ul className="flex justify-between items-center gap-4 text-xl">
            <li>
              <a href="">
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
