import { CodeIcon, LinkIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects & Experiences
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Interested in seeing what I've done? Here are some of my projects and experiences.
          </p>
        </div>
        <div className="mb-8 flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute border-2 border-white opacity-50 inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <a href="https://github.com/siifux" className="inline-flex text-white bg-green-500 border-0 py-4 px-12 focus:outline-none hover:bg-green-600 rounded text-lg">
            Github
          </a>
          <a href="https://www.linkedin.com/in/sindrefurulund/" className="ml-8 inline-flex text-gray-400 bg-gray-800 border-0 py-4 px-12 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
