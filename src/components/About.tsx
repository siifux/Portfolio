import React from "react";
import Typewriter from "typewriter-effect";
import profileImg from "../assets/profileImg.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl mb-10 font-medium text-white">
            <Typewriter
              options={{ loop: true, delay: 50 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I'm Sindre! ✌️")
                  .pauseFor(2000)
                  .deleteAll()
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h1>
          <h1 className="title-font sm:text-2xl text-sm mb-2 font-medium text-white">
            Passionatly curious developer, driven by the creative mind!
          </h1>
          <p className="mb-8 leading-relaxed">
            Motivated and driven Fullstack developer, working for PuzzlePart. My
            passion is playing around with ideas and being able to make a
            difference. I am a teamplayer, which is shown in my everyday work
            where I develop and maintain software with my co-workers.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Reach Out!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-md md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src={profileImg}
          />
        </div>
      </div>
    </section>
  );
}
