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

  return (
    <nav className="text-white bg-[#242735]">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" className="font-bold">
            A.Gaoba
          </Link>
        </Typography>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow ml-64">
            <Link
              to="/home"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Contact Me
            </Link>
          </div>
          <IconButton color="inherit" aria-label="dark mode" sx={{ ml: 2 }}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
        {isMobileScreen ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            {isOpen ? <CloseIcon className="text-black" /> : <MenuIcon />}
          </IconButton>
        ) : null}
      </Toolbar>
    </nav>
  );
}

export default Navbar;
