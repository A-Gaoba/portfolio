import { useState } from "react";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = true;
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact Me" },
  ];

  return (
    <nav className="text-white bg-[#242735]">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" className="font-bold">
            A.Gaoba
          </Link>
        </Typography>
        {isMobileScreen ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            className=""
          >
            {isOpen ? <CloseIcon className="text-white" /> : <MenuIcon />}
          </IconButton>
        ) : (
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow ml-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <IconButton color="inherit" aria-label="dark mode" sx={{ ml: 2 }}>
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        )}
      </Toolbar>
      {isMobileScreen && isOpen && (
        <div className="w-full block mt-4 ml-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="block mt-4 text-white-200"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
