// Menu show Y hidden
const header = document.querySelector(".header"),
  navLogo = document.querySelector(".nav_logo"),
  navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  darkMode = document.getElementById("theme-button"),
  toggleIcon = document.querySelector(".fa-th-large");

// Menu Show
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show-menu");
    darkMode.style.display = "none";
    toggleIcon.classList.remove("fa-th-large");
    header.classList.add("transparent");
    navLogo.style.opacity = 0;
  });
}

// Menu Hidden
// Validate if constant exist
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
    darkMode.style.display = "initial";
    toggleIcon.classList.add("fa-th-large");
    header.classList.remove("transparent");
    navLogo.style.opacity = 1;
  });
}

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
  toggleIcon.classList.add("fa-th-large");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// social-icons
const socialIcons = document.querySelectorAll(".social-icon");
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    icon.style.transition = "0.5s ease-in-out";
    icon.style.transform = "rotate(360deg)";
    icon.style.color = icon.dataset.color;
    icon.style.transformOrigin = "center";
  });

  icon.addEventListener("mouseout", function () {
    icon.style.transition = "0.5s ease-in-out";
    icon.style.transform = "rotate(0deg)";
    icon.style.color = "";
    icon.style.transformOrigin = "center";
  });
});

// Animation
const home = document.querySelector(".home");
const move = 20;
const animations = document.querySelectorAll(".animation");
const profileImage = document.querySelector(".home_img");

function movingElement(e) {
  const { offsetWidth: width, offsetHeight: height } = this;
  let { x: x, y: y } = e;

  const xMove = Math.round((x / width) * move - move / 2);
  const yMove = Math.round((y / height) * move - move / 2);

  animations.forEach((animation) => {
    if (animation.classList.contains("minus-float")) {
      animation.style.transform = `translate(${-xMove}px, ${-yMove}px)`;
    } else {
      animation.style.transform = `translate(${xMove}px, ${yMove}px)`;
    }
  });

  profileImage.style.transform = `rotateY(${xMove}deg)rotateX(${-yMove}deg)`;
}

home.addEventListener("mousemove", movingElement);

// Accordion skills
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

skillsHeader.forEach((sh, index) => {
  sh.addEventListener("click", function () {
    if (index == 0) {
      skillsContent[0].classList.toggle("skills_open");
      skillsContent[0].classList.toggle("skills_close");
    } else if (index == 1) {
      skillsContent[1].classList.toggle("skills_open");
      skillsContent[1].classList.toggle("skills_close");
    } else if (index == 2) {
      skillsContent[2].classList.toggle("skills_open");
      skillsContent[2].classList.toggle("skills_close");
    }
  });
});

// swipper sertifikat
var swiper = new Swiper(".mySwiper", {
  loop: true,
  cssMode: true,
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {
    delay: 3300,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// Change Background Header
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// Show Scroll Up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// AOS
AOS.init({
  once: true,
});
