import { Link } from "react-router-dom";

import { projects } from "../constants";
// import { arrow } from "../assets/icons";


const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
         Hobby Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-3/4 h-3/4 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-4 font-poppins'>
              {project.liveLink && (
                <Link
                  to={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
              )}  
                {project.apkLink && (
                <Link
                  to={project.apkLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Get Apk
                </Link>
              )}  
             {project.githubLink && (
                <Link
                to={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-black'
              >
               Code link
              </Link>
              )}  
                      
               
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />
    </section>
  );
};

export default Projects;