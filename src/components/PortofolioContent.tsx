import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

interface Skill {
  title: string;
  description: string;
}

interface Experience {
  title: string;
  description: string;
  link: string;
}

interface Props {
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
}

const PortfolioContent: React.FC<Props> = ({ projects, skills, experiences }) => {
  return (
    <>
      <section>
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Learn more</a>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <div key={index}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Experiences</h2>
        {experiences.map((experience, index) => (
          <div key={index}>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
            <a href={experience.link}>Read more</a>
          </div>
        ))}
      </section>
    </>
  );
};

export default PortfolioContent;
