import React from 'react';
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Experience } from '../scripts/experience';




const ExperienceCard: React.FC = () => {
  return (<>
  {Experience.map((exp) => (
    <div className="max-w-md mx-auto lg:hover:shadow-md lg:hover:bg-neutral-500 p-4 lg:hover:bg-opacity-20 text-slate-300 rounded-xl overflow-hidden md:max-w-2xl lg:max-w-4xl hover:text-teal-400 transition duration-300 group">
    <div className="flex flex-col lg:flex-row">
      <div className="uppercase tracking-wide text-sm mt-2 lg:w-1/4 text-slate-400 font-semibold">{exp.time}</div>
      <div className="lg:w-3/4 mt-4 lg:mt-0">
        <div className="flex flex-col md:flex-row text-lg leading-tight font-semibold">
          <h1 className="flex items-center">{`${exp.jobTitle} · `}</h1>
          <div className="flex flex-row mt-1 md:mt-0 md:ml-1">
            <h1>{exp.company}</h1>
            <MdOutlineArrowOutward className="ml-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
        </div>
        <p className="mt-2 text-slate-400">
          {exp.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-teal-800 bg-opacity-40 text-teal-200 text-sm font-medium rounded-full">JavaScript</span>
          <span className="px-2 py-1 bg-teal-800 bg-opacity-40 text-teal-200 text-sm font-medium rounded-full flex items-center">
            <SiTypescript className="mr-1" /> TypeScript
          </span>
          <span className="px-2 py-1 bg-teal-800 bg-opacity-40 text-teal-200 text-sm font-medium rounded-full flex items-center">
            <FaReact className="mr-1" /> React
          </span>
          <span className="px-2 py-1 bg-teal-800 bg-opacity-40 text-teal-200 text-sm font-medium rounded-full">Storybook</span>
        </div>
      </div>
    </div>
  </div>
  ))}
  </>
    
  );
}

export default ExperienceCard;
