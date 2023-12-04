import { meta, shopify, starbucks, tesla, cradlewise, mela, relevel, cellstrat } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    postgresql,
    antd
} from "../assets/icons";

interface linkInterface {
  "desc": string,
  "href":string
}

interface experience{
    title:string,
    company_name: string,
    icon:string,
    iconBg:string,
    date:string,
    points:string[],
    skills:string[] | undefined,
    links: linkInterface[] | undefined
}

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React JS & Native",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: antd,
        name: "Ant Design",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSql",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
];

export const experiences : experience[] = [
    {
        title: "Frontend Developer",
        company_name: "Cradlewise",
        icon: cradlewise,
        iconBg: "rgb(252 209 209)",
        date: "April 2022 - Nov 2023",
        points: [
            "Developed an advanced internal dashboard used organization-wide for day to day tasks ,enhancing organizational efficiency.",
            "Collaborating with cross-functional teams, including co-founder, Director of Engineering, and Product Manager. Built features in collaboration with the app team, AI team, marketing, and other developers to create high-quality products.",
            "Built a highly optimized chatbot similar to OpenAI ChatGpt for internal use",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        skills: ["HTML","CSS" , "JavaScript", "Typescript",  "React JS", "Next JS",  "AWS", "PSQL", "Python"], 
        links : [{desc:"Cradlewise Website",href:"https://cradlewise.com/"}  ]
    },
    {
        title: "Software Engineer",
        company_name: "Mela (YC S-19)",
        icon: mela,
        iconBg: "rgb(219 205 236)",
        date: "Jan 2021 - Mar 2022",
        points: [
            " Worked on the frontend development of no code application Namaste Business, which develops users own app apk in less than 2 minutes.",
            "Developed, optimized, and worked on improving the UIs of the Mela application, collaborating with the product manager and designers. (Mela had grown to over 100,000 downloads, which is a significant increase from the approximately 50,000 downloads it had when I initially joined.)",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        skills: ["React Native" , "JavaScript", "HTML", "CSS", "REST"],
        links : [{desc:"Namste Application ",href:"https://play.google.com/store/search?q=namaste+business&c=apps&hl=en&gl=US" } , {desc:"Mela Website", href: "https://mahamela.in/" }  ]
    },
    {
        title: "Software Engineer Intern",
        company_name: "Mela",
        icon: mela,
        iconBg: "rgb(219 205 236)",
        date: "March 2021 - Jul 2021",
        points: [
            "Collaborated with senior developers, including the CTO, to contribute to the mobile application.",
            "Worked on React Native for the first time, acquiring valuable hands-on experience in mobile app development.",
            "Gained insights into production-level coding practices, including working with test and production environments.",
            "Successfully transitioned from an intern to a full-time role, showcasing dedication and a rapid learning curve.",
        ],
        skills:[],
        links:[]
    },
    {
        title: "Subject Matter Expert",
        company_name: "Relevel by Unacademy",
        icon: relevel,
        iconBg: "blue",
        date: "Oct 2021 - Feb 2022",
        points: [
            "Worked with Unacademy's (Unicorn Indian Startup) latest initiative, Relevel.",
            "Created quality content (Pre-read Doc, Lesson Plan, and Pitch Deck) for the Full Stack Web Development Bootcamp.",
            "Created apps and code for sessions and learners utilizing the fundamental ideas of frontend HTML, CSS, and JS and React",
        ],
        skills: ["HTML", "CSS", "JavaScript" , "React"],
        links : [{desc:"Relevel Website",href:"https://relevel.com/"}  ]
    },
    {
        title: "Web Developer Intern",
        company_name: "CellStrat",
        icon: cellstrat,
        iconBg: "#efefef",
        date: "Jul 2020 - Dec 2020",
        points: [
            "Worked on building there  web platform using React JS",
            "Also worked on creating the critical web architecture for health AI product ",
        ],
        skills: ["React JS"],
        links : [{desc:"CellStrat Website",href:"https://cellstrathub.com/"}  ]
    },
 
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];