import React from "react";
import FrontendCard from "@/Ui/FrontendCard";
import { frontendData } from "@/utils/Data";
const Frontend: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-slate-900" id="front">
      <div className="container px-10 pt-20 pb-5 mx-auto">
        <div className="flex flex-wrap w-full mb-5">
          <div className="lg:w-1/4 w-full mb-2 lg:mb-0">
            <h1 className="sm:text-3xl text-4xl font-semibold title-font pb-4 text-white frontendheading">
              Frontend
            </h1>
          </div>
        </div>
        <div className="md:flex md:flex-wrap -m-4">
          {frontendData.map((data) => (
            <FrontendCard
              key={data.id}
              title={data.title}
              techUsed={data.techUsed}
              imageUrl={data.imageUrl}
              progress={data.progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frontend;
