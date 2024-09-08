import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className='info-box'>
      <h1 className='sm:text-xl sm:leading-snug text-center bg-blue-500 rounded-md pt-4 pb-2 px-0  text-white '>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Tanay</span>
        👋
        <br />
        A Software Developer from  Bangalore, India 🇮🇳
      </h1>
      <a
          href="https://www.linkedin.com/in/tanay-tapanshu-a128a8179/"
          className='bg-white neo-btn'
          target="_blank"
          rel="noopener noreferrer"
        >

        Check my LinkedIn
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      
      </a>
    </div>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='sm:text-xl sm:leading-snug text-center bg-blue-500 rounded-md pt-4 pb-2 px-0 text-white mb-4 md:mb-0 '>
          Worked with many companies <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='bg-white neo-btn'>
          Check experience
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='sm:text-xl sm:leading-snug text-center bg-blue-500 rounded-md pt-4 pb-2 px-0 mb-4 md:mb-0 text-white'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='bg-white neo-btn'>
          Check my projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='sm:text-xl sm:leading-snug text-center bg-blue-500 rounded-md pt-4 pb-2 px-0 text-white mb-4 md:mb-0'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='bg-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;