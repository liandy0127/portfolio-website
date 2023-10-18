import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java" },
  { skill: "C++" },
  { skill: "HTML" },
  { skill: "JavaScript" },
  { skill: "Ocaml" },
  { skill: "SQL" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Docker" },
  { skill: "Pytorch" },
  { skill: "Tableau" },
  { skill: "Pandas" },
  { skill: "Robot Operating System" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, I'm Andy, a sophomore <span className="font-bold">
                Computer Science </span> student at <span className="font-bold">Cornell University</span> in Ithaca, NY.
              Beyond my studies, I'm a <span className="font-bold">
                Professional Hiker</span>, who has peaked summits above 20000 feet in 4 continents.
            </p>
            <br />
            <p>
              My hobbies include running, skiing, scuba diving, dancing, drawing, and travelling, always seeking new adventures.
              Although I'm a fan of various ball games, I often jest that I have a Doctor of Philosophy
              in watching Track and Field, you will find me actually researched in it. 🤓
            </p>
            <br />
            <p>
              Academically, I started to build robots since 7-years-old, and I firmly believe in the transformative power of machine learning, especially in rejuvenating stagnant sectors. Recently,
              I've developed an interest in Fintech, cuz I whimsically assume it might be my ticket to making some quick bucks!
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-sky-400">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my explorations takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="md:w-1/2 text-center">
            <Image
              src="/Know_me_pic.png"
              alt="Your Description Here"
              width={325}
              height={325}
              className="mx-auto mb-5 md:ml-8"
            />

            <div className="md:w-4/5 mx-auto"> {/* Increased width to 4/5 */}
              <h1 className="text-2xl font-bold mb-3">My Skills</h1>
              <div className="flex flex-wrap justify-center z-5">
                {skills.map((item, idx) => (
                  <p
                    key={idx}
                    className="bg-gray-200 px-3 py-1.5 mr-2 mt-2 text-gray-500 text-base rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
