const Parent = document.querySelectorAll("nav");
const downloadCV = document.querySelectorAll(".hireMeDownloadMyCv");
Parent.forEach((e) => {
  e.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("a")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
downloadCV.forEach((e) => {
  e.addEventListener("click", function (e) {
    if (e.target.classList.contains("a")) {
      e.preventDefault();
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const handelOverOut = function (e) {
  if (e.target.classList.contains("a")) {
    const link = e.target;
    const siblings = link.closest("nav").querySelectorAll(".a");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
Parent.forEach((e) => {
  e.addEventListener("mouseover", handelOverOut.bind(0.5));
  e.addEventListener("mouseout", handelOverOut.bind(1));
});

const section = document.querySelectorAll(".section");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.querySelectorAll(".hidden").forEach((e) => {
      e.style.opacity = "1";
      e.style.marginTop = "0";
      e.classList.remove("hidden-skills");
    });
  });
}, options);

section.forEach((section) => {
  observer.observe(section);
});

const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelector(".mobile-nav-links");
const links = mobileNavLinks
  .querySelector(".mobile-nav-list")

  .querySelectorAll("a");
mobileNav.addEventListener("click", () => {
  mobileNavLinks.classList.remove("hide");
});

mobileNavLinks.querySelector("div").addEventListener("click", () => {
  mobileNavLinks.classList.add("hide");
});

links.forEach((l) => {
  l.addEventListener("click", () => {
    mobileNavLinks.classList.add("hide");
  });
});
