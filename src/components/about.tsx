import localFont from "next/font/local";
import React from "react";

const yujiMai = localFont({
  src: "../app/fonts/YujiMai-Regular.ttf",
  variable: "--YujiMai",
  weight: "100 900",
});

const SourGummy = localFont({
  src: "../app/fonts/SourGummy.ttf",
  variable: "--sourGummy",
  weight: "100 900",
});

export const AboutSection = () => {
  const techStack = [
    "TypeScript/JavaScript",
    "TailwindCss",
    "Git & Github",
    "React.js",
    "Next.js",
    "Node.js",
    "Python",
    "Devops",
    "System Design",
    "DSA",
  ];
  return (
    <>
      <div className="about h-[100vh] w-[100%] flex justify-evenly items-center">
        <div className="leftPart h-[50%] bg-slate-200 rounded-full">
          <img
            src="./work-from-home.png"
            alt="profilePhoto"
            className="h-[100%] rounded-lg"
          />
        </div>
        <div className="rightPart flex flex-col items-center gap-4 w-[50%]">
          <span
            className={`text-white ${SourGummy.className} text-4xl font-semibold`}
          >
            About Me
          </span>
          <span className={`text-slate-200 ${yujiMai.className} text-3xl`}>
            Vedant Nilesh Kumbhare
          </span>
          <p className="text-slate-300 text-center text-lg font-semibold font-sans">
            I'm a passionate full-stack web developer with experience in
            building 10+ web applications. I love creating elegant solutions to
            complex problems and am always eager to learn new technologies.
          </p>
          <div className="profession flex justify-evenly mt-11 w-full items-center">
            <div className="grpProjects flex flex-col items-center">
              <img src="./teamwork.png" alt="group projects" className="h-16" />
              <span className="text-white text-xl font-semibold">
                Group Projects
              </span>
              <p className="font-mono text-lg text-slate-300 text-center">
                4+ Completed
              </p>
            </div>
            <div className="education flex flex-col items-center">
              <img
                src="./confidence.png"
                alt="Self projects"
                className="h-16"
              />
              <span className="text-white text-xl font-semibold">
                Self Projects
              </span>
              <p className="font-mono text-lg text-slate-300 text-center">
                7+ completed
              </p>
            </div>
            <div className="education flex flex-col items-center">
              <img src="./education.png" alt="Education" className="h-16" />
              <span className="text-white text-xl font-semibold">
                Education
              </span>
              <p className="font-mono text-lg text-slate-300 text-center">
                Computer Science
              </p>
            </div>
          </div>
          <div className="skills flex items-start flex-col gap-3">
            <span
              className={`${SourGummy.className} text-2xl font-semibold text-white`}
            >
              TechStack
            </span>
            <ul className="flex gap-2 flex-wrap">
              {techStack.map((element, index: number) => (
                <div
                  key={index}
                  className="bg-slate-800 text-slate-200 py-1 px-3 mt-2 rounded-xl"
                >
                  {element}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
