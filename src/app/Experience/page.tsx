import React from 'react';
import { AppWindow,Users2 } from 'lucide-react';
import "../../styles/commn.css"

const Experience: React.FC = () => {
  return (
    <div>
      <section className="pt-10 bg-slate-900" id="experience">
        <h2 className="sm:text-3xl text-4xl font-bold container px-5 mx-auto text-white experience">Experience</h2>
        <div className="flex flex-col md:flex-row mt-2 gap-4 container px-5 py-10 mx-auto">
          <div className="flex flex-col flex-1 gap-2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex gap-6">
              <div className="flex flex-col text-red-600 items-center">
                <AppWindow />
                <div className="flex-grow w-[0.5px] bg-red-500" />
              </div>
              <div className="flex flex-col text-sm gap-2">
                <div className="text-xs">May 2023 - Present</div>
                <h2 className="text-lg font-bold">MERN-STACK DEVELOPER - Euphoria GenX</h2>
                As a MERN stack developer, I possess a diverse skill set and a strong passion for building robust and user-friendly web applications. I am a highly motivated and experienced MERN stack developer with a deep understanding of web technologies and a track record of delivering high-quality software solutions. My journey as a developer began with a strong foundation in HTML, CSS, and JavaScript, which gradually evolved into a keen interest in full-stack development. Integrate channels with various backend and frontend systems used by customers.
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 bg-white rounded-lg shadow-lg p-6">
            <div className="flex gap-6">
              <div className="flex flex-col text-red-500 items-center">
              <Users2 />
                <div className="flex-grow w-[0.5px] bg-red-500" />
              </div>
              <div className="flex flex-col text-sm gap-2">
                <div className="text-xs">January 2023 - March 2023</div>
                <h2 className="text-lg font-bold">Campaign Team - I-PAC</h2>
                I joined I-PAC as an intern and was associated with the Data and Analytics team and also the technical team. During my work experience here at IPAC, as an intern, I learned the importance of time management and how to take responsibilities and fulfill them on time. I have worked in the network team and also in the technical team. In the network team, I got to learn about how propagation is done in real life. In the tech team, I got to work with real-time data and multiple.
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col text-red-500 items-center">
                <AppWindow />
                <div className="flex-grow w-[0.5px] bg-red-500" />
              </div>
              <div className="flex flex-col text-sm gap-2">
                <h2 className="text-lg font-bold">Web Developer</h2>
                I am a passionate and dedicated web developer with a strong interest in creating innovative and user-friendly websites. Over the past years, Ive had the opportunity to work on simple and complex landing pages. My expertise lies in front-end development, where I enjoy crafting beautiful and responsive user interfaces using HTML, CSS, and JavaScript. Im also well-versed in some front-end frameworks such as React, which allows me to build dynamic and interactive experiences for users.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
