import React from "react";
import ProjectItem from "./ProjectItem";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus
        saepe ab in quidem quos quis soluta, quae velit eum impedit ullam
        consequuntur necessitatibus dignissimos enim ratione quo quasi nesciunt!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={project1} title="To-Do List" />
        <ProjectItem img={project2} title="Currency Converter" />
        <ProjectItem img={project3} title="PL-UA Vocabulary" />
        <ProjectItem img={project4} title="Portfolio" />
      </div>
    </div>
  );
};

export default Projects;
