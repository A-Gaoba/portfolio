import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import image from "../assets/about33.gif";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send message logic
    // You can use the name, email, and message values to send the message
    // Reset the form fields after sending the message
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-[#242735] p-8 gap-4">
      <div className="w-full md:w-1/3">
        <h1 className="text-white text-4xl font-bold mb-8">Contact</h1>
        <p className="text-white text-md mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima similique quo animi voluptatem cum</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full bg-black text-white rounded-lg px-4 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="w-full bg-black text-white rounded-lg px-4 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              placeholder="Message"
              className="w-full bg-black text-white rounded-lg px-4 py-2"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white hover:text-sky-500 rounded-lg py-2"
            style={{ "::placeholder": { color: "white" } }}
          >
            Send Message
          </button>
          <br/>
          <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hover:p-4 text-md py-3 text-white"
          onClick={() => navigate("/home")}
        >
          Come back to Home
          <ArrowRightAltIcon />
        </motion.button>
        </form>
      </div>
      <div className="w-full md:w-1/2">
        <img src={image} alt="Profile" />
      </div>
    </div>
  );
};

export default Contact;
