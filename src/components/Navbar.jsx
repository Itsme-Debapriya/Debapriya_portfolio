import { NavLink } from "react-router-dom";
import { SIDEBAR_LINKS, SITE_NAME } from "../constants";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

// navbar
const Navbar = () => {
  return (
    <header className="header flex justify-between items-center px-4 py-2 bg-white">
      {/* brand logo and icons */}
      <div className="flex items-center gap-4">
        {/* brand logo */}
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
          title={SITE_NAME}
        >
          <p className="blue-gradient_text">
            {SITE_NAME.split(" ")[0][0] + "" + SITE_NAME.split(" ")[1][0]}
          </p>
        </NavLink>

        {/* social icons */}
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/debapriya-dey-4012a62b5/" // Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-blue-600 hover:text-blue-800 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Itsme-Debapriya" // Replace with your actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-black hover:text-gray-700 text-xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* nav links */}
      <nav className="flex text-lg gap-7 font-medium items-center justify-center">
        {SIDEBAR_LINKS.map((link) => (
          <NavLink
            to={link.route}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
            title={link.label}
            key={`Link_${link.label}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
