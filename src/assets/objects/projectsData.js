import image from "../images/portfolio.png";
import authors from "../images/authorsHaven.png";
import lab from "../images/codelab.png";
import send from "../images/sendIt.png";
import mrm from "../images/conve.png";
import companion from "../images/companion.png";
import mocha from "../images/mochajs-icon.png";
import jest from "../images/jest.png";
import dialogflow from "../images/dialogFlow.png";
import AuthorHavenVid from "../videos/AuthorVid.mp4";
import SendITVid from "../videos/SendIT.mp4";
import codeLabVid from "../videos/codeVid.mp4";

const authorsHaven = {
  name: "Authorshaven",
  type: "Full-Stack developer - Full-Stack project",
  description:
    "Authorshaven is a clone of Medium. it allows it's users to register, write, publish, read, share, bookmark and react to articles",
  projectImage: authors,
  demo: true,
  demoVideo: AuthorHavenVid,
  visit: true,
  visitLink: "https://authors-haven-ui.herokuapp.com/",
  gitHubLink: "https://github.com/Kabalisa/riders-frontend.git",
  agile: false,
  stacks: [
    {
      stack: "Frontend",
      data: [
        {
          name: "ReactJS",
          image: "https://img.icons8.com/ultraviolet/20/000000/react.png",
        },
        {
          name: "Redux",
          image: "https://img.icons8.com/color/20/000000/redux.png",
        },
        {
          name: "VanillaJS",
          image: "https://img.icons8.com/color/20/000000/javascript.png",
        },
        {
          name: "SASS",
          image: "https://img.icons8.com/color/20/000000/sass.png",
        },
      ],
    },
    {
      stack: "Backend",
      data: [
        {
          name: "NodeJS/ExpressJS",
          image: "https://img.icons8.com/color/20/000000/nodejs.png",
        },
        {
          name: "VanillaJS",
          image: "https://img.icons8.com/color/20/000000/javascript.png",
        },
      ],
    },
    {
      stack: "Database",
      data: [
        {
          name: "PostgreSQL/Sequelize",
          image: "https://img.icons8.com/color/20/000000/postgreesql.png",
        },
      ],
    },
    {
      stack: "Testing",
      data: [
        { name: "Mocha/Chai", image: mocha },
        { name: "Jest/Enzyme", image: jest },
      ],
    },
    {
      stack: "DevOps",
      data: [
        {
          name: "Travis CI",
          image: "https://img.icons8.com/color/20/000000/travis-ci.png",
        },
        {
          name: "Docker",
          image: "https://img.icons8.com/color/100/000000/docker.png",
        },
      ],
    },
  ],
};

const codelab = {
  name: "Codelab",
  type: "Frontend developer - Mobile application",
  description:
    "This is an app that allows to view top developers located in lagos. you can view their GitHub profiles from the app and share them with other people",
  projectImage: lab,
  demo: true,
  demoVideo: codeLabVid,
  visit: true,
  visitLink:
    "https://www.amazon.com/Innocent-Fiston-Kabalisa-CodeLab/dp/B07XJ4J1T5/ref=sr_1_5?dchild=1&keywords=codelab&qid=1591176164&sr=8-5",
  gitHubLink: "https://github.com/Kabalisa/CodeLab.git",
  agile: true,
  agileLink: "https://www.pivotaltracker.com/n/projects/2350785",
  stacks: [
    {
      stack: "Frontend",
      data: [
        {
          name: "React Native",
          image: "https://img.icons8.com/color/20/000000/react-native.png",
        },
        {
          name: "Apollo Client",
          image: "https://img.icons8.com/color/20/000000/apollo.png",
        },
        {
          name: "GraphQL",
          image: "https://img.icons8.com/color/20/000000/graphql.png",
        },
        {
          name: "VanillaJS",
          image: "https://img.icons8.com/color/20/000000/javascript.png",
        },
        {
          name: "CSS",
          image: "https://img.icons8.com/color/20/000000/css3.png",
        },
      ],
    },
    {
      stack: "Backend",
      data: [
        {
          name: "GitHub API",
          image: "https://img.icons8.com/metro/20/000000/github.png",
        },
        {
          name: "Firebase",
          image: "https://img.icons8.com/color/20/000000/firebase.png",
        },
      ],
    },
    {
      stack: "Testing",
      data: [{ name: "Jest/Enzyme", image: jest }],
    },
    {
      stack: "DevOps",
      data: [
        {
          name: "Circle CI",
          image: "https://img.icons8.com/color/20/000000/circleci.png",
        },
      ],
    },
  ],
};

const sendIt = {
  name: "Send-IT",
  type: "Full-Stack developer - Full-Stack project",
  description:
    "Send-IT is a courier service that helps its users to deliver packages wherever they are to whatever destination",
  projectImage: send,
  demo: true,
  demoVideo: SendITVid,
  visit: true,
  visitLink: "https://send-order.herokuapp.com/",
  gitHubLink: "https://github.com/Kabalisa/Send-IT-API.git",
  agile: true,
  agileLink: "https://www.pivotaltracker.com/projects/2221999",
  stacks: [
    {
      stack: "Frontend",
      data: [
        {
          name: "HTML",
          image: "https://img.icons8.com/color/20/000000/html-5.png",
        },
        {
          name: "VanillaJS",
          image: "https://img.icons8.com/color/20/000000/javascript.png",
        },
        {
          name: "CSS",
          image: "https://img.icons8.com/color/20/000000/css3.png",
        },
      ],
    },
    {
      stack: "Backend",
      data: [
        {
          name: "NodeJS/ExpressJS",
          image: "https://img.icons8.com/color/20/000000/nodejs.png",
        },
        {
          name: "VanillaJS",
          image: "https://img.icons8.com/color/20/000000/javascript.png",
        },
      ],
    },
    {
      stack: "Database",
      data: [
        {
          name: "PostgreSQL",
          image: "https://img.icons8.com/color/20/000000/postgreesql.png",
        },
        {
          name: "SQL",
          image: "https://img.icons8.com/metro/20/000000/sql.png",
        },
      ],
    },
    {
      stack: "Testing",
      data: [{ name: "Mocha/Chai", image: mocha }],
    },
    {
      stack: "DevOps",
      data: [
        {
          name: "Travis CI",
          image: "https://img.icons8.com/color/20/000000/travis-ci.png",
        },
      ],
    },
  ],
};

const portfolio = {
  name: "Portfolio",
  type: "Frontend developer - Frontend project",
  description:
    "This is my portfolio website. it contains my resume, projects I have worked on, my skills and contact information",
  projectImage: image,
  demo: false,
  visit: "here",
  gitHubLink: "https://github.com/Kabalisa/portfolio.git",
  agile: false,
  stacks: [
    {
      stack: "Frontend",
      data: [
        {
          name: "ReactJS",
          image: "https://img.icons8.com/ultraviolet/20/000000/react.png",
        },
        {
          name: "VanillaJS",
          image: "https://img.icons8.com/color/20/000000/javascript.png",
        },
        {
          name: "CSS",
          image: "https://img.icons8.com/color/20/000000/css3.png",
        },
      ],
    },
  ],
};

const converge = {
  name: "Converge",
  type: "Frontend developer - Full-Stack project",
  description:
    "Converge is The Andela Meeting Room management solution. it helps Andelans book, checkin and checkout of meeting rooms",
  projectImage: mrm,
  demo: false,
  visit: false,
  gitHubLink: "https://github.com/Kabalisa/converge-frontend.git",
  agile: false,
  stacks: [
    {
      stack: "Frontend",
      data: [
        {
          name: "ReactJS",
          image: "https://img.icons8.com/ultraviolet/20/000000/react.png",
        },
        {
          name: "Apollo Client",
          image: "https://img.icons8.com/color/20/000000/apollo.png",
        },
        {
          name: "GraphQL",
          image: "https://img.icons8.com/color/20/000000/graphql.png",
        },
        {
          name: "VanillaJS",
          image: "https://img.icons8.com/color/20/000000/javascript.png",
        },
        {
          name: "SASS",
          image: "https://img.icons8.com/color/20/000000/sass.png",
        },
      ],
    },
    {
      stack: "Testing",
      data: [{ name: "Jest/Enzyme", image: jest }],
    },
    {
      stack: "DevOps",
      data: [
        {
          name: "Circle CI",
          image: "https://img.icons8.com/color/20/000000/circleci.png",
        },
        {
          name: "Docker",
          image: "https://img.icons8.com/color/100/000000/docker.png",
        },
      ],
    },
  ],
};

const companionApp = {
  name: "Companion App",
  type: "Frontend developer - Mobile application",
  description:
    "Companion App is a mobile application that acts as your virtual buddy that allows you to book meeting rooms directly from your phone in Andela",
  projectImage: companion,
  demo: false,
  visit: false,
  gitHubLink: "https://github.com/Kabalisa/companion-app.git",
  agile: false,
  stacks: [
    {
      stack: "Frontend",
      data: [
        {
          name: "React Native",
          image: "https://img.icons8.com/color/20/000000/react-native.png",
        },
        {
          name: "Redux",
          image: "https://img.icons8.com/color/20/000000/redux.png",
        },
        {
          name: "VanillaJS",
          image: "https://img.icons8.com/color/20/000000/javascript.png",
        },
        {
          name: "CSS",
          image: "https://img.icons8.com/color/20/000000/css3.png",
        },
      ],
    },
    {
      stack: "Testing",
      data: [{ name: "Jest/Enzyme", image: jest }],
    },
    {
      stack: "Other Tool",
      data: [{ name: "DialogFlow", image: dialogflow }],
    },
  ],
};

export { authorsHaven, codelab, sendIt, portfolio, converge, companionApp };
