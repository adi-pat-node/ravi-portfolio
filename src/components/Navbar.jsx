import logo from "../assets/raviKumarLogo.webp";

import { FaGithub, FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home" className="">
          <img src={logo} alt="" className="mx-2 " width={50} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="#" className="">
          <FaLinkedin />
        </a>

        <a href="#" className="">
          <FaGithub />
        </a>

        <a href="#" className="">
          <FaInstagram />
        </a>

        <a href="#" className="">
          <FaTwitch />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
