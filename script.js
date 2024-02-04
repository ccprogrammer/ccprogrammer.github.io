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

// Generate dynamic HTML for projects

// Sample project data
const projectsData = [
  {
    title: "Alomaid",
    imageSrc: "./assets/projects/alomaid.jpg",
    description:
      "Alomaid is a website-based application designed to serve as a mediator between Malaysian employers and household assistants from Indonesia. I serve as the Lead Fullstack Programmer, using various development tools throughout the application's development from inception.",
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
    title: "Akadevo",
    imageSrc: "./assets/projects/akadevo.png",
    description:
      "Akadevo is a mobile app for school attendance tracking, scanning student cards with RFID through staff or teachers' mobile devices. Parents can monitor attendance in real-time. As the Lead Frontend Mobile Developer using Flutter, I initiated and completed the project in 3 months, integrating UI designs and the provided REST API",
    techStack: ["Flutter", "RESTful Api", "Firebase", "RFID", "Django"],
    playstoreLinks: [
      "https://play.google.com/store/apps/details?id=com.akadevo.staff",
      "https://play.google.com/store/apps/details?id=com.akadevo.wali",
    ],
    webLink: "https://akadevo.com/",
  },
  {
    title: "Digital Village",
    imageSrc: "./assets/projects/digital-village.png",
    description:
      "Digital Village is a social application designed for community use, adaptable for various communities with different names in India. As a freelance Flutter developer, my responsibility includes implementing several crucial features within this application.",
    techStack: ["Flutter", "RESTful Api", "MongoDB"],
    playstoreLinks: [
      "https://play.google.com/store/apps/details?id=com.opensort.org.Rajakkamangalam",
    ],
    webLink: "#",
  },

  {
    title: "Locum Here - Medical App",
    imageSrc: "./assets/projects/locumhere.png",
    description:
      "LocumHere is an intermediary application connecting doctors and clinics in Malaysia. Clinics can search for or hire temporary doctors to perform specific tasks within the clinic. As a freelance developer, I was responsible for continuing and completing the project using FlutterFlow within a month.",
    techStack: ["FlutterFlow", "RESTful Api", "Xano"],
    playstoreLinks: [],
    webLink: "https://locumhere.com/",
  },
  {
    title: "OneSmile",
    imageSrc: "./assets/projects/onesmile.png",
    description:
      "OneSmile is an application serving residents in the BSD area of Tangerang City. This app offers various features including community engagement, shopping, and utility bill payments. In my role as a Middle Programmer, I am responsible for implementing various requested features, contributing to the development of the app over a period of approximately 1 year and 7 months.",
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
      "Layar is a streaming platform showcasing programs by TVRI. As the Lead Frontend Developer, I initiated and integrated the project, incorporating UI design and the provided REST API from the team. Working independently, I served as the sole front-end developer throughout the 7-month project.",
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
    title: "Homerun Indonesia",
    imageSrc: "./assets/projects/homerun.png",
    description:
      "Homerun is a service application offering services such as decoration and garden management, Developed by Living Lab Ventures. I work as a part-time programmer handling the frontend independently using React Native. My responsibilities include maintaining existing features and developing new ones.",
    techStack: ["React Native", "RESTful Api", "Firebase", "Node Js"],
    playstoreLinks: [
      "https://play.google.com/store/apps/details?id=com.homerun.homerunclient",
    ],
    webLink: "",
  },
];

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
// initialize aos (library for scroll animation)
AOS.init();
