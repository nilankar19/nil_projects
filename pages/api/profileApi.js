
export const userProfile = [
  {
    id: 0,
    displayName: "qwerty",
    email: "qwerty0123@gmail.com",
    imageId: "1",
    description: "Hi! my name is qwerty I'm FullStack Developer",
    skills: [
      {
        id: 0,
        frontend: ["react", "nextJs"],
        backend: ["nodeJs", "mongodb", "mysql"],
        middleware: ["firebase", "googleOuth", "gmail Api", "mongoose"],
      },
    ],
  },
];
export const userlink = [
  {
    id: 0,
    imageId: "1",
    url: "https://www.github.com/nilankar19",
  },
  {
    id: 1,
    imageId: "2",
    url: "https://www.linkdin.com/shivnil",
  },
  {
    id: 3,
    imageId: "3",
    url: "https://twitter",
  },
];

export const ongoingProject = [
  {
    id: 0,
    projectName: "portfolio",
    techStack: "nextjs | nodejs | mongodb",
    date: "22-02-2023",
    url: "www.domain.com",
    imageId: "0",
  },
  {
    id: 1,
    projectName: "awesome-dot Ui-additionl ",
    techStack: "nextjs | html | css",
    date: "7-10-2022",
    url: "www.nilankar19.github.io/password-generator",
    deploy: "www.github.com",
    imageId: "1",
    qrcode:"2"
  },
  {
    id: 2,
    projectName: "ngo website",
    techStack: "html | js | css",
    date: "02-06-2021",
    url: "www.nilankar19.github.io/ngo-website",
    diploy: "www.github.com",
    imageId: "2",
    qrcode:"2"
  },
  {
    id: 3,
    projectName: "Image-resizer",
    techStack: "html | js | css",
    date: "28-09-2022",
    url: "www.nilankar19.github.io/image-resizer",
    diploy: "www.github.com",
    imageId: "3",
    qrcode:"2"
  },
  {
    id: 4,
    projectName: "random-password-generator",
    techStack: "html | js | css",
    date: "7-10-2022",
    url: "www.nilankar19.github.io/password-generator",
    diploy: "www.github.com",
    imageId: "4",
    qrcode:"2"
  },
  {
    id: 4,
    projectName: "random-password-generator",
    techStack: "html | js | css",
    date: "7-10-2022",
    url: "www.nilankar19.github.io/password-generator",
    diploy: "www.github.com",
    imageId: "4",
    qrcode:"2"
  },
  {
    id: 4,
    projectName: "random-password-generator",
    techStack: "html | js | css",
    date: "7-10-2022",
    url: "www.nilankar19.github.io/password-generator",
    diploy: "www.github.com",
    imageId: "4",
    qrcode:"2"
  },
];
// pagesection 2 card
export const projectlist = [
  {
    id: 0,
    projectId:101,
    projectName: "random-password-generator",
    frontend: "NextJs",
    backend: "nodeJs | mongodb",
    middleware: "firebase | mongoose",
    date: "7-10-2022",
    url: "www.nilankar19.github.io/password-generator",
    description:{
      details:"It is a web application built using the Next.js framework, with user authentication functionality implemented using Node.js, MongoDB, and Firebase. Here is a diagram that summarizes the various components of your application and how they interact with each other:"
      ,diagram:""
    },
    diploy: "www.github.com",
    imageId: "101",
    qrcode:"2"
  }, {
    id: 1,
    projectName: "random-password-generator",
    frontend: "NextJs",
    backend: "nodeJs | mongodb",
    middleware: "firebase | mongoose",
    date: "7-10-2022",
    url: "www.nilankar19.github.io/password-generator",
    diploy: "www.github.com",
    imageId: "1",
    qrcode:"2"
  }, {
    id: 2,
    projectName: "random-password-generator",
    frontend: "NextJs",
    backend: "nodeJs | mongodb",
    middleware: "firebase | mongoose",
    date: "7-10-2022",
    url: "www.nilankar19.github.io/password-generator",
    diploy: "www.github.com",
    imageId: "2",
    qrcode:"2"
  }, {
    id: 3,
    projectName: "random-password-generator",
    frontend: "NextJs",
    backend: "nodeJs | mongodb",
    middleware: "firebase | mongoose",
    date: "7-10-2022",
    url: "www.nilankar19.github.io/password-generator",
    diploy: "www.github.com",
    imageId: "3",
    qrcode:"2"
  },
];


export default async function h(req, res) {
  console.log(req.url);
  const profileData = JSON.stringify({userProfile,userlink,projectlist});
  // res.redirect("../login?asd=er");

  res.status(200).json(profileData)
}