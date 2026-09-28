/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gaurav Kumar",
  title: "Hi all, I'm Gaurav",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1BWTVYE_o39ag-832352HAWcHVy5ra5jC", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/gaurav-kumar-a13535226/",
  gmail: "gauravk3333.gk@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH MODERN JAVASCRIPT EXPERTISE",
  skills: [
    emoji(
      "⚡ Build scalable web and mobile applications using MERN stack"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Develop high-performance React & React Native apps with clean UI/UX"
    ),
    emoji(
      "⚡ Optimize performance using Redux, Zustand, and modern state management"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
  { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
  { skillName: "React Native", fontAwesomeClassname: "fab fa-react" },
  { skillName: "Next.js", fontAwesomeClassname: "fas fa-code" },
  { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
  { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
  { skillName: "Redux", fontAwesomeClassname: "fas fa-layer-group" },
  { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

// const educationInfo = {
//   display: true, // Set false to hide this section, defaults to true
//   schools: [
//     {
//       schoolName: "Harvard University",
//       logo: require("./assets/images/harvardLogo.png"),
//       subHeader: "Master of Science in Computer Science",
//       duration: "September 2017 - April 2019",
//       desc: "Participated in the research of XXX and published 3 papers.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       schoolName: "Stanford University",
//       logo: require("./assets/images/stanfordLogo.png"),
//       subHeader: "Bachelor of Science in Computer Science",
//       duration: "September 2013 - April 2017",
//       desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
//       descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
//     }
//   ]
// };
/* -------------------- Education -------------------- */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Chandigarh University",
      logo: require("./assets/images/collegelogo.jpeg"),
      subHeader: "Bachelor of Engineering (B.E.) in Electronics and Communication Engineering",
      duration: "2017 - 2021",
      desc: "Built a strong foundation in problem solving, engineering principles, and analytical thinking while completing my undergraduate studies.",
      descBullets: [
        "Focused on technical learning, problem solving, and software fundamentals",
        "Participated in academic and extracurricular competitions during school and college"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: "Software Engineer",
//       company: "Facebook",
//       companylogo: require("./assets/images/facebookLogo.png"),
//       date: "June 2018 – Present",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       role: "Front-End Developer",
//       company: "Quora",
//       companylogo: require("./assets/images/quoraLogo.png"),
//       date: "May 2017 – May 2018",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       role: "Software Engineer Intern",
//       company: "Airbnb",
//       companylogo: require("./assets/images/airbnbLogo.png"),
//       date: "Jan 2015 – Sep 2015",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
//   ]
// };

const workExperiences = {
  display: true,
  experience: [
    {
      role: "ReactJS Developer",
      company: "BaselineItDevelopment",
      companylogo: require("./assets/images/companylogo.jpeg"),
      date: "May 2024 – Present",
      desc: "Worked on building scalable web and mobile applications with a focus on performance, UI/UX, and real-world integrations.",
      descBullets: [
        "Developed a membership-based health platform with secure payments and location-based lab services",
        "Built real-time mobile applications using React Native with API integration and navigation",
        "Implemented authentication systems and optimized performance using Redux",
        "Worked on job platform with Next.js, TypeScript, and JWT-based authentication"
      ]
    },
    {
      role: "ReactJS Trainee",
      company: "TechiesGeeks",
      companylogo: require("./assets/images/techieslogo.jpeg"),
      date: "Sep 2023 – Feb 2024",
      desc: "Gained hands-on experience in React development and modern frontend practices.",
      descBullets: [
        "Built reusable components using React and modern JavaScript",
        "Integrated REST APIs and handled state management",
        "Improved UI responsiveness using Tailwind CSS",
        "Collaborated using Git and participated in code reviews"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  // projects: [
  //   {
  //     image: require("./assets/images/saayaHealthLogo.webp"),
  //     projectName: "Saayahealth",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://saayahealth.com/"
  //       }
  //       //  you can add extra buttons here.
  //     ]
  //   },
  //   {
  //     image: require("./assets/images/nextuLogo.webp"),
  //     projectName: "Nextu",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://nextu.se/"
  //       }
  //     ]
  //   }
  // ],
  projects: [
    {
      image: require("./assets/images/synerium.png"),
      projectName: "Synerium – Unlimited Subscription Platform",
      projectDesc:
        "A scalable, high-converting platform to manage unlimited digital subscriptions without manual onboarding bottlenecks.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://synerium.fr/fr/"
        }
      ]
    },
    {
      image: require("./assets/images/logo.png"),
      projectName: "Tallee – AI Venue Discovery App",
      projectDesc:
        "AI-powered mobile application that recommends personalized dining and nightlife venues using OpenAI and Google Maps APIs.",
      githubLink: "",
      demoLink: "",
          footerLink: [
            // {
            //   name: "GitHub",
            //   url: "https://github.com/yourproject"
            // },
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/image.png"),
      projectName: "Kahani Kids – Story Generation App",
      projectDesc:
        "Cross-platform app with Google TTS integration, subscriptions, and real-time narration with audio highlighting.",
      githubLink: "",
      demoLink: "",
      footerLink: [
        // {
        //   name: "GitHub",
        //   url: "https://github.com/yourproject"
        // },
    {
      name: "Visit Website",
      url: "https://play.google.com/store/apps/details?id=com.story_generation&hl=en_IN"
    }
    //  you can add extra buttons here.
  ]
    },
    {
      image: require("./assets/images/imagejob.png"),
      projectName: "Job Finder Platform",
      projectDesc:
        "Full-stack job board application built with Next.js and JWT authentication with advanced search filters.",
      githubLink: "",
      demoLink: "",
      footerLink: [
        // {
        //   name: "GitHub",
        //   url: "https://github.com/yourproject"
        // },
    {
      name: "Visit Website",
      url: ""
    }
    //  you can add extra buttons here.
  ]
    },
    {
      image: require("./assets/images/jodo.png"),
      projectName: "Health Membership Platform",
      projectDesc:
        "Web platform for purchasing health plans with payment integration and location-based services.",
      githubLink: "",
      demoLink: "",
      footerLink: [
        // {
        //   name: "GitHub",
        //   url: "https://github.com/yourproject"
        // },
    {
      name: "Visit Website",
      url: "https://www.jodohealth.com/"
    }
    //  you can add extra buttons here.
  ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "Gauravk3333.gk@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  contactInfo,
  resumeSection
};
