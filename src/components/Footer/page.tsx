import React from "react";
import Image from "next/image";
import { Twitter, Github } from "lucide-react";
import "../../styles/commn.css"
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#">
          <Image
            className="w-auto h-7"
            src="/images/Sgflfooter.png"
            alt="logo"
            height={200}
            width={250}
          />
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-300 subheading">
          © Copyright 2023. All Rights Reserved.
        </p>
        <div className="flex -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Reddit"
          >
            <Twitter size={20}/>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Facebook"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
