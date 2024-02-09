const date = document.getElementById("date");
const setCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  date.textContent = currentYear;
};
setCurrentYear();

// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const socials = document.querySelector(".social-nav");
const navLinks = document.querySelectorAll(".nav-links");

const toggleMobileMenu = () => {
  hamburger.classList.toggle("open");
  navList.classList.toggle("open");
  socials.classList.toggle("open");
  document.body.classList.toggle("open");
};

navLinks.forEach((link) => link.addEventListener("click", toggleMobileMenu));
hamburger.addEventListener("click", toggleMobileMenu);

function readMore(dots, moreText, btnText) {
  console.log("read more");
  var dots = document.getElementById(dots);
  var moreText = document.getElementById(moreText);
  var btnText = document.getElementById(btnText);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// onInit Web
function onWebInitialize() {
  generateProjects();
  generatePersonalProjects();
}

// Generate dynamic HTML for projects
function generateProjects() {
  const projectsContainer = document.getElementById("project-list");

  projectsData.forEach((project, index) => {
    const marginTopStyle = index > 0 ? "margin-top: 120px;" : "";

    const webLinkHtml = project.webLink
      ? `<li><a href="${project.webLink}" target="_blank" rel="noreferrer" class="hover-effect">Web →</a></li>`
      : "";

    const projectHtml = `
      <article class="project" style="${marginTopStyle}">
        <a href="${
          project.webLink
        }" target="_blank" rel="noreferrer" class="project-img">
          <img src="${project.imageSrc}" alt="#" title="${project.title}" />
        </a>
        <div>
          <h3>${index + 1}</h3>
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <p><strong>Work/Achievements:</strong></p>
          <ul>
            ${project.workAchievements
              .map((value) => `<li>• ${value}</li>`)
              .join("")}
          </ul>
          <ul class="tech-stack">
            ${project.techStack.map((tech) => `<li>${tech}</li>`).join("")}
          </ul>
          <ul class="project-links">
            ${project.playstoreLinks
              .map(
                (link, i) =>
                  `<li><a href="${link}" target="_blank" rel="noreferrer" class="hover-effect">Playstore ${
                    i + 1
                  } →</a></li>`
              )
              .join("")}
           ${webLinkHtml}
          </ul>
        </div>
      </article>
    `;

    projectsContainer.innerHTML += projectHtml;
  });
}

// Function to generate dynamic HTML for projects
function generatePersonalProjects() {
  const projectsContainer = document.getElementById("other-projects");

  personalProjectsData.forEach((project) => {
    const projectHtml = `
      <li class="project">
        <a href="${project.githubLink}" target="_blank" rel="noreferrer">
          <img src="${project.imageSrc}" alt="${project.title} screenshot" />
          <div>
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <ul>
              ${project.techStack.map((tech) => `<li>${tech}</li>`).join("")}
            </ul>
          </div>
        </a>
      </li>
    `;

    projectsContainer.innerHTML += projectHtml;
  });
}

// Work Projects data
const projectsData = [
  {
    title: "Akadevo",
    imageSrc: "./assets/projects/akadevo.png",
    description:
      "Akadevo is a mobile app for school attendance tracking, scanning student cards with RFID through staff or teachers' mobile devices.",
    workAchievements: [
      "Achieve 100+ user on Playstore",
      "Lead Frontend Mobile Developer",
      "Built 25+ screen following UI/UX design provided by teams",
      "Connect 50+ Rest Api",
      "Initiated and completed the project in 3 months",
      "Implement Beautiful UI from design",
      "Stable Rest Api Connection",
      "Built both app for Staff & Parents app",
    ],
    techStack: ["Flutter", "RESTful Api", "Firebase", "RFID", "Django"],
    playstoreLinks: [
      "https://play.google.com/store/apps/details?id=com.akadevo.staff",
      "https://play.google.com/store/apps/details?id=com.akadevo.wali",
    ],
    webLink: "https://akadevo.com/",
  },
  {
    title: "Alomaid",
    imageSrc: "./assets/projects/alomaid.jpg",
    description:
      "Alomaid is a website-based application designed to serve as a mediator between Malaysian employers and household assistants from Indonesia.",
    workAchievements: [
      "5000+ Maids have registered through the WebApp",
      "Lead Fullstack Programmer",
      "Using many no-code tools to develop the app",
      "Implement Stable Api Connection",
      "Translating UI design into the app",
    ],
    techStack: [
      "FlutterFlow",
      "Xano",
      "Appsmith",
      "Tally.so",
      "Brevo",
      "Make.com",
      "RESTful Api",
    ],
    playstoreLinks: [],
    webLink: "https://alomaid.com/my",
  },
  {
    title: "Digital Village",
    imageSrc: "./assets/projects/digital-village.png",
    description:
      "Digital Village is a social application designed for community use, adaptable for various communities with different names in India.",
    workAchievements: [
      "Achieved 80+ users on Playstore/Appstore",
      "Working as Flutter Developer",
      "Has developed 3 features",
      "Implement very stable REST API and local database connection",
      "Translating UI/UX from Figma into app precisely",
    ],

    techStack: ["Flutter", "RESTful Api", "MongoDB"],
    playstoreLinks: [
      "https://play.google.com/store/apps/details?id=com.opensort.org.Rajakkamangalam",
    ],
    webLink: "#",
  },
  {
    title: "OneSmile",
    imageSrc: "./assets/projects/onesmile.png",
    description:
      "OneSmile is an application serving residents in the BSD area of Tangerang City. This app offers various features including community engagement, shopping, and utility bill payments.",
    workAchievements: [
      "Working as Middle Programmer",
      "Has developed 3 features",
      "Maintaining and updating the existing features",
      "Upgrading the app version to the latest Flutter Framework version",
    ],

    techStack: ["Flutter", "RESTful Api", "Firebase", "Chat GPT", "Yii"],
    playstoreLinks: [
      "https://play.google.com/store/apps/details?id=com.sinarmasland.onesmile",
    ],
    webLink: "https://onesmile.digital/",
  },
  {
    title: "Layar",
    imageSrc: "./assets/projects/layar.png",
    description:
      "Layar is a streaming platform showcasing programs by TVRI. As the Lead Frontend Developer, I initiated and integrated the project, incorporating UI design and the provided REST API from the team.",
    workAchievements: [
      "Working as Freelance Lead Mobile Developer",
      "Initiating the mobile app from the beginning",
      "Translating 28+ UI/UX designs from Figma into the app",
      "Connecting 66+ REST API",
    ],
    techStack: [
      "Flutter",
      "RESTful Api",
      "Firebase",
      "Google, Facebook Sign in",
      "Laravel",
    ],
    playstoreLinks: [
      "https://play.google.com/store/apps/details?id=com.tvri.layar",
    ],
    webLink: "https://layar.tvri.go.id/",
  },
  {
    title: "Locum Here - Medical App",
    imageSrc: "./assets/projects/locumhere.png",
    description:
      "LocumHere is an intermediary application connecting doctors and clinics in Malaysia. Clinics can search for or hire temporary doctors to perform specific tasks within the clinic.",
    workAchievements: [
      "Working as freelance frontend developer",
      "Completing the remaining app features around 65% more or less",
      "Connecting REST API provided by backend developer",
      "Implementing UI/UX from Figma design",
    ],

    techStack: ["FlutterFlow", "RESTful Api", "Xano"],
    playstoreLinks: [],
    webLink: "https://locumhere.com/",
  },
  {
    title: "Homerun Indonesia",
    imageSrc: "./assets/projects/homerun.png",
    description:
      "Homerun is a service application offering services such as decoration and garden management, Developed by Living Lab Ventures.",
    workAchievements: ["Improve 2 existing features UI & Api Connection"],
    techStack: ["React Native", "RESTful Api", "Firebase", "Node Js"],
    playstoreLinks: [
      "https://play.google.com/store/apps/details?id=com.homerun.homerunclient",
    ],
    webLink: "",
  },
];

// Personal Projects
const personalProjectsData = [
  {
    githubLink: "https://github.com/ccprogrammer/movies-app",
    imageSrc: "./assets/projects/onemovies.png",
    title: "Movies Database With Free API",
    description:
      "My personal apps, latest movies database with free API from themoviedb.org",
    techStack: ["Flutter", "Provider", "RESTful API"],
  },
  {
    githubLink: "https://github.com/ccprogrammer/weather-app",
    imageSrc: "./assets/projects/weatherapp.png",
    title: "Weather Apps",
    description:
      "Weather apps using openweathermap.org using GetX state management",
    techStack: ["Flutter", "GetX", "RESTful API"],
  },
  {
    githubLink: "https://github.com/ccprogrammer/one-note",
    imageSrc: "./assets/projects/onenote.png",
    title: "Todo Note Apps",
    description:
      "A simple todo apps for my personal experiment with local storage",
    techStack: ["Flutter", "Provider"],
  },
  {
    githubLink: "https://github.com/ccprogrammer/shamo",
    imageSrc: "./assets/projects/shamo.png",
    title: "Shoes Market Apps, Shamo",
    description:
      "E-commerce apps with Provider state management integrated with API from Laravel",
    techStack: ["Flutter", "Provider", "Laravel", "RESTful API"],
  },
  {
    githubLink: "https://github.com/ccprogrammer/utara_drive",
    imageSrc: "./assets/projects/udrive.png",
    title: "Google Drive? it's uDrive!",
    description:
      "Cloud gallery image and video with Firestore as cloud storage",
    techStack: ["Flutter", "Provider", "Firebase"],
  },
  {
    githubLink: "https://ccprogrammer.github.io/nomaden/",
    imageSrc: "./assets/projects/nomaden.png",
    title: "Online Ticket Booking, Nomaden",
    description:
      "Ticket book website built with HTML & CSS and Laravel for CMS and API",
    techStack: ["HTML", "CSS", "Bootstrap", "Laravel"],
  },
  // Add more project data objects as needed
];

// initialize aos (library for scroll animation)
AOS.init();
