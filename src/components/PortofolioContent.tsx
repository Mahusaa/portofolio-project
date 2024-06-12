import { MdOutlineArrowOutward } from 'react-icons/md';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';



const projects = [
  {
    id: 1,
    projectName: "Next JS Meetup",
    description: "Worked on various web development projects using JavaScript and React.",
    imageUrl:"https://utfs.io/f/75ce6b42-ce3b-4b90-a985-ff5444886bba-ufecr0.png",
    imageAlt: "Next JS meetup"
  },
];

const ProjectList: React.FC = () => {
  return (
    <div>
      {projects.map((proj) => (
        <div key={proj.id} className="max-w-md mx-auto lg:hover:shadow-md lg:hover:bg-neutral-500 p-4 lg:hover:bg-opacity-20 text-slate-300 rounded-xl overflow-hidden md:max-w-2xl lg:max-w-4xl hover:text-teal-400 transition duration-300 group">
          <div className="flex flex-col lg:flex-row">
            <div className="uppercase tracking-wide text-sm mt-2 mr-4 lg:w-1/4">
              <div className='group-hover:border-2 group-hover: border-neutral-500 rounded-lg'>
                <img src={proj.imageUrl} alt={proj.imageAlt} className="w-full h-auto rounded-lg " />
              </div></div>
            <div className="lg:w-3/4 mt-4 lg:mt-0">
              <div className="flex flex-col md:flex-row text-lg leading-tight font-semibold">
                <h1 className="flex items-center">{proj.projectName}</h1>
                <div className="flex flex-row mt-1 md:mt-0 md:ml-1">
                  <MdOutlineArrowOutward className="ml-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
              <p className="mt-2 text-slate-400">{proj.description}</p>
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
    </div>

  );
};

export default ProjectList;
