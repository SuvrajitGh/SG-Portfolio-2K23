"use client";
import React from "react";
import Image from "next/image";
type Props = {};
import "../../styles/commn.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MailPlus,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import { Snackbar } from "@mui/material";

import Alert from "@mui/material/Alert/Alert";

const Contact: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen(true); // Open the Snackbar when button is clicked
  };

  const handleSnackbarClose = () => {
    setOpen(false); // Close the Snackbar when the close button is clicked
  };
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden z-[200]">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <motion.div
            ref={ref}
            initial="hidden "
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.2 }}
            className="lg:w-1/2 lg:mx-10"
          >
            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl contactheading">
              Contact Us
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400 subheading">
              Ask me everything and I would love to hear from you
            </p>
            <form className="mt-12">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 subheading">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 subheading">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 subheading">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <button  onClick={(e) => {
               e.preventDefault(); // Prevent default form submission behavior
               handleButtonClick(); // Call your custom click handler
                }} className="w-full px-6 py-3 mt-4 text-sm font-medium  text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                get in touch
              </button>
            </form>
            {/* Snackbar component */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
        The message has been delivered.
        </Alert>
      </Snackbar>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden "
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10"
          >
            <Image
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
              src="/images/user2.jpg"
              width={384} // Adjust the width as needed
              height={384} // Adjust the height as needed
              alt="Contact Image"
            />
            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <MapPin size={20} color="#7593ff" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400 contactheading">
                  Kolkata
                </span>
              </p>
              <p className="flex items-start -mx-2">
                <Phone size={20} color="#7593ff" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400 contactheading">
                  **************
                </span>
              </p>
              <p className="flex items-start -mx-2">
                <MailPlus size={20} color="#7593ff" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400 contactheading">
                  SG@gmail.com
                </span>
              </p>
            </div>
            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-600 dark:text-gray-300 contactheading">
                Follow us
              </h3>
              <div className="flex mt-4 -mx-1.5 ">
                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <Linkedin size={20} color="#7593ff" strokeWidth={1.75} />
                </a>
                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <Facebook size={20} color="#7593ff" strokeWidth={1.75} />
                </a>
                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <Instagram size={20} color="#7593ff" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
