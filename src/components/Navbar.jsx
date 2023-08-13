import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MotionTypography = motion(Typography);
const MotionLink = motion(Link);

function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = true;
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveLink("");
  };

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact Me" },
  ];

  return (
    <nav className="text-white bg-[#242735] md:w-[90%] xl:w-[70%] w-full sticky top-0 z-50">
      <Toolbar>
        <MotionTypography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="font-bold">
            A_Gaoba
          </Link>
        </MotionTypography>
        {isMobileScreen ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isOpen ? (
              <CloseIcon className="text-white" />
            ) : (
              <MenuIcon />
            )}
          </IconButton>
        ) : (
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow ml-4">
              {navLinks.map((link, index) => (
                <MotionLink
                  key={index}
                  to={link.to}
                  className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 font-bold hover:text-base py-2 px-4 rounded-lg ${activeLink === link.to ? "text-sky-400 underline text-base" : ""}`}
                  onClick={() => setActiveLink(link.to)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {link.label}
                </MotionLink>
              ))}
            </div>
            <IconButton
              color="inherit"
              aria-label="dark mode"
              sx={{ ml: 2 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: navLinks.length * 0.15 }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        )}
      </Toolbar>
      {isMobileScreen && isOpen && (
        <div className="w-full block mt-4 ml-4">
          {navLinks.map((link, index) => (
            <MotionLink
              key={index}
              to={link.to}
              className="block mt-4 text-white-200 "
              onClick={toggleMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {link.label}
            </MotionLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
