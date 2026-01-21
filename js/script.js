// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Experience Tabs
const tabButtons = document.querySelectorAll(".tab-button");
const jobContents = document.querySelectorAll(".job-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab");

    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    jobContents.forEach((content) => content.classList.remove("active"));

    // Add active class to clicked button and corresponding content
    button.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    // Update browser history
    history.pushState(null, "", targetId);

    // Smooth scroll to target
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Load Projects from JSON
async function loadProjects() {
  try {
    const response = await fetch("data/projects.json");
    const data = await response.json();
    const projectsGrid = document.querySelector("#projects .projects-grid");

    projectsGrid.innerHTML = data.projects
      .map(
        (project) => `
      <div class="project-card">
        <div class="project-top">
          <i class="${project.icon} folder-icon"></i>
          <div class="project-links">
            ${
              project.githubUrl
                ? `<a href="${project.githubUrl}" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>`
                : ""
            }
            ${
              project.websiteUrl
                ? `<a href="${project.websiteUrl}" aria-label="External Link" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>`
                : ""
            }
          </div>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">
          ${project.description}
        </p>
        <div class="project-tech">
          ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
      </div>
    `
      )
      .join("");
  } catch (error) {
    console.error("Error loading projects:", error);
  }
}

// Load Skills from JSON
async function loadSkills() {
  try {
    const response = await fetch("data/skills.json");
    const data = await response.json();
    const skillsGrid = document.querySelector("#skills .projects-grid");

    skillsGrid.innerHTML = data.skills
      .map(
        (skill) => `
      <div class="project-card">
        <div class="project-top">
          <i class="${skill.icon} folder-icon"></i>
        </div>
        <h3 class="project-title">${skill.title}</h3>
        <p class="project-description">
          ${skill.description}
        </p>
        <div class="project-tech">
          ${skill.technologies.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
      </div>
    `
      )
      .join("");
  } catch (error) {
    console.error("Error loading skills:", error);
  }
}

// Load data on page load
document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  loadSkills();
});
