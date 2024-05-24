import PortfolioContent from "./PortofolioContent";

const projects = [
    {
      title: "Project One",
      description: "Description for project one. It is a very interesting project.",
      link: "#"
    },
    {
      title: "Project Two",
      description: "Description for project two. It is a very engaging project.",
      link: "#"
    },
    {
      title: "Project Three",
      description: "Description for project three. It is a very informative project.",
      link: "#"
    }
  ];
  
  const skills = [
    { title: "JavaScript", description: "Expertise in modern JavaScript frameworks." },
    { title: "TypeScript", description: "Strong understanding of TypeScript." },
    { title: "Node.js", description: "Experience in building backend services with Node.js." }
  ];
  
  const experiences = [
    {
      title: "Software Engineer at XYZ Corp",
      description: "Developed various web applications and services.",
      link: "#"
    },
    {
      title: "Frontend Developer at ABC Inc",
      description: "Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and VueWorked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using React and Vue.Worked on several frontend projects using .",
      link: "#"
    }
  ];

  const Split = () => {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 flex items-center justify-center">
                <h1 className="text-white opacity-80 select-none text-shadow-md text-8xl"> Bubble </h1>
            </div>
            <div className="w-1/2 overflow-auto h-screen">
                <PortfolioContent projects={projects} skills={skills} experiences={experiences} />
            </div>
        </div>
    )
}




export default Split;