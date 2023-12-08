import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className='info-box'>
      <h1 className='sm:text-xl sm:leading-snug text-center bg-blue-500 rounded-md py-4 px-8 text-white mx-5'>
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
        <p className='font-medium sm:text-xl text-center'>
          Worked with many companies <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='bg-white neo-btn mt-6'>
          Check experience
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
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
      <p className='font-medium sm:text-xl text-center'>
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