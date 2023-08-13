import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const NotFound = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #dc2f02, #ffffff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <img
        src="/public/assets/404 Error.svg"
        alt="404 Error"
        className="h-auto w-80 object-contain"
      />
      <p
        className="text-xl text-white mb-4 self-center px-8 "
        style={gradientStyle}
      >
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p
        className="text-lg text-white mb-8 self-center px-8"
        style={gradientStyle}
      >
        Let&apos;s get you back{" "}
        <Link to="/" className="text-sky-400 hover:pl-2">
          home
          <ArrowRightAltIcon />
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
