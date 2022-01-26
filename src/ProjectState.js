//Import Images
import project1 from "./img/project1.jpg";
import hrf_protest from "./img/hrf_protest.png";
import ignite from "./img/ignite.png";
import ignite2 from "./img/ignite2.png";
import starbucks_logo from "./img/starbucks_logo.png";
import coffee from "./img/coffee.png";

export const ProjectState = [
  {
    title: "Human Rights First",
    mainImg: project1,
    secondaryImg: hrf_protest,
    url: "/work/project1",
    awards: [
      {
        title: "A beautiful cause",
        description:
          "“Led a team of more than 25 to complete this amazing project. Was an incredible way to be introduced to this industry.”",
      },
      {
        title: "Link to the Repository",
        description:
          "“https://github.com/BloomTech-Labs/human-rights-first-asylum-fe-a”",
      },
      {
        title: "A wonderful project",
        description:
          "“The premise of helping people all arounf the world was truly moving to me. Loved that I was one of the few to work on it!”",
      },
    ],
  },
  {
    title: "Ignite",
    mainImg: ignite,
    url: "/work/project3",
    secondaryImg: ignite2,
    awards: [
      {
        title: "Marcus L",
        description:
          "“I have loved this stuff since day one and to be a working on a project with it has been unbelievable ”",
      },
      {
        title: "Link to the Repository",
        description:
          "“https://github.com/Gavin-Rilee/ignite”",
      },
      {
        title: "Gavin R",
        description:
          "“This has been an amazing venture so far. with the adept skillset the team brings to the table, and the burning passion I have for this stuff I couldn't be happier”",
      },
    ],
  },
  {
    title: "Starbucks",
    mainImg: starbucks_logo,
    url: "/work/project4",
    secondaryImg: coffee,
    awards: [
      {
        title: "Truly A masterpiece",
        description: "“I mean have you looked at it”",
      },
      {
        title: "Link to the Repository",
        description: "“https://github.com/Gavin-Rilee/sbClone”",
      },
      {
        title: "It’s okay lmao.",
        description: "“Also a quote from me.”",
      },
    ],
  },
];
