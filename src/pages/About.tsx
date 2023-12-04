import React from "react";
import { experiences, skills } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Tanay Tapanshu
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Self-driven and motivated software developer in Bengaluru, India,
          always fueled by curiosity and a relentless pursuit of learning.
          Proficient in HTML5, CSS, JavaScript, TypeScript, React, React Native,
          Next JS, Python, and more, I thrive in crafting innovative solutions
          and optimizing user experiences.{" "}
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20 has-tooltip">
              <span className='tooltip rounded shadow-lg p-1 bg-white text-base text-black font-bold'>{skill.name}</span>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl  flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-12">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>
      </div>

      <div className="mt-4 flex">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p
                  className="text-black-500 font-medium text-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              {experience?.skills?.length > 0 && (
                <>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experience?.skills?.map((skill, index) => (
                      <div
                        className="my-0 text-sm text-black-500/100"
                        style={{ margin: 0 }}
                        key={index}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>{" "}
                </>
              )}
               {experience?.links?.length > 0 && (
                <>
                  <h3 className="text-black text-xl font-poppins font-semibold mt-4">
                    Links
                  </h3>
                  <div className="flex flex-wrap gap-2">
                 <ul>           
                    {experience?.links?.map((linkDetail, index) => (
                      <li>
                      <a
                        className="my-0 text-base text-blue-500 decoration-2"
                        style={{ margin: 0, }}
                        key={index}
                        href={linkDetail.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {linkDetail.desc}
                      </a>
                        </li>
                    
                    ))}
                        </ul>  
                  </div>{" "}
                </>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* 
      <hr className='border-slate-200' />

      <CTA /> */}
    </section>
  );
};

export default About;
