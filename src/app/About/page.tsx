"use client";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-[100vh] text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-2 md:top-20 uppercase tracking-[0px] text-white text-3xl font-bold hero-font">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/images/user2.jpg" // Convert StaticImageData to string URL
        alt="User 2"
        className="-mb-8 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px] mt-[20px]"
      />
      <div className="space-y-10 px-0 md:px-10 content">
        
        <div className="mt-10 md:w-full md:mx-10 space-y-10 px-6 md:py-4 md:px-10 ">
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-lg bg-white rounded-lg text-xs gap-1 p-10">
            <div className="flex flex-1 col-span-1 justify-between flex-col ">
              <div className="text-black">
                Crafting captivating user interfaces using modern frameworks and
                libraries and Architecting scalable and secure server-side
                systems; I am a seasoned software developer with expertise in
                front-end and back-end development.
              </div>
            </div>
            <div className="flex flex-1 col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full text-black">
                <div className="flex flex-col justify-start mb-2 gap-2">
                  <div className="flex justify-between">
                    <div>Frontend - (Reactjs, Bootstrap, Tailwind)</div>
                    <div>85%</div>
                  </div>
                  <div className="bg-gray-300 h-2 rounded-full">
                    <div className=" bg-violet-700 h-full rounded-full w-[85%]" />
                  </div>
                </div>
                <div className="flex flex-col justify-start mb-2 gap-2">
                  <div className="flex justify-between">
                    <div>Backend - (Nodejs, ExpressJs)</div>
                    <div>75%</div>
                  </div>
                  <div className="bg-gray-300 h-2 rounded-full">
                    <div className="bg-green-600 h-full rounded-full w-[75%]" />
                  </div>
                </div>
                <div className="flex flex-col justify-start mb-2 gap-2">
                  <div className="flex justify-between">
                    <div>Database - (Sql, MongoDB)</div>
                    <div>65%</div>
                  </div>
                  <div className="bg-gray-300 h-2 rounded-full">
                    <div className="bg-slate-950 h-full rounded-full w-[65%]" />
                  </div>
                </div>
                <div className="flex flex-col justify-start mb-2 gap-2">
                  <div className="flex justify-between">
                    <div>Git</div>
                    <div>90%</div>
                  </div>
                  <div className="bg-gray-300 h-2 rounded-full">
                    <div className="bg-orange-300 h-full rounded-full w-[90%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
