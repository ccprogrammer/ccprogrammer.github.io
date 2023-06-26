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

// initialize aos (library for scroll animation)
AOS.init();
