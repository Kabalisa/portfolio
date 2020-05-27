import image from "../images/backgound.jpeg";
import mocha from "../images/mochajs-icon.png";
import jest from "../images/jest.png";

const authorsHaven = {
  name: "Authorshaven",
  type: "Full-Stack developer - Full-Stack project",
  description:
    "this is a clone of medium. it allow users to register, login, write, read, share,  and react to articles",
  image,
  demo: true,
  stacks: [
    {
      stack: "Frontend Stack",
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
      stack: "Backend Stack",
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
      stack: "Desting",
      data: [
        { name: "Mocha/Chai", image: mocha },
        { name: "Jest/Enzyme", image: jest },
      ],
    },
  ],
};

const codelab = {
  name: "Codelab",
  type: "Fronted developer - Mobile application",
  description:
    "this is an app that allows to view top developers who are located in lagos. you can view individual profiles and share them",
  image,
  demo: true,
};

export { authorsHaven, codelab };
