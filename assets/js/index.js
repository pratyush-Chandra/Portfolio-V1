function download(filename, filepath) {
    var element = document.createElement('a');
    element.setAttribute('href', filepath);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

const dwnBtn = document.getElementById("dwn-btn");
dwnBtn.addEventListener("click", () => {
    window.location.href = "assets/resume/resume_pratyush_chandra.pdf";
    download("Pratyush Chandra", "assets/resume/resume_pratyush_chandra.pdf");
});

const gotoTopBtn = document.getElementById("goto-top");
gotoTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onload = () => {
    const skillsCardParent = document.getElementById("skills-content");
    for (let i = 0; i < skillsCardParent.children.length; i++) {
        if (i > 7) {
            skillsCardParent.children[i].classList.add("hidden");
        }
    }
    skillsCardParent.style.gridTemplateRows = "repeat(2, 1fr)";

    const projectsCardParent = document.getElementById("projects-content");
    for (let i = 0; i < projectsCardParent.children.length; i++) {
        if (i > 1) {
            projectsCardParent.children[i].classList.add("hidden");
        }
    }
    projectsCardParent.style.gridTemplateRows = "repeat(1, 1fr)";
}

const showMoreBtn = document.getElementById("show-more");
localStorage.setItem("isVisisble", true);
showMoreBtn.addEventListener("click", () => {
    if (localStorage.getItem("isVisisble") === "true") {
        const skillsCardParent = document.getElementById("skills-content");
        skillsCardParent.style.gridTemplateRows = "repeat(4, 1fr)";
        for (let i = 0; i < skillsCardParent.children.length; i++) {
            if (i > 7) {
                skillsCardParent.children[i].classList.remove("hidden");
            }
        }
        showMoreBtn.innerHTML = `<span>View Less <i class="bx bx-up-arrow-alt"></i></span>`;
        localStorage.setItem("isVisisble", false);
    }
    else {
        const skillsCardParent = document.getElementById("skills-content");
        for (let i = 0; i < skillsCardParent.children.length; i++) {
            if (i > 7) {
                skillsCardParent.children[i].classList.add("hidden");
            }
        }
        skillsCardParent.style.gridTemplateRows = "repeat(2, 1fr)";
        showMoreBtn.innerHTML = `<span>More Skills <i class="bx bx-down-arrow-alt"></i></span>`;
        localStorage.setItem("isVisisble", true);
        window.location.href = "#skills";
    }
})

const showMoreProjectsBtn = document.getElementById("show-more-projects");
localStorage.setItem("isVisisble_2", true);
showMoreProjectsBtn.addEventListener("click", () => {
    if (localStorage.getItem("isVisisble_2") === "true") {
        const projectsCardParent = document.getElementById("projects-content");
        projectsCardParent.style.gridTemplateRows = "repeat(2, 1fr)";
        for (let i = 0; i < projectsCardParent.children.length; i++) {
            if (i > 1) {
                projectsCardParent.children[i].classList.remove("hidden");
            }
        }
        showMoreProjectsBtn.innerHTML = `<span>View Less <i class="bx bx-up-arrow-alt"></i></span>`;
        localStorage.setItem("isVisisble_2", false);
    }
    else {
        const projectsCardParent = document.getElementById("projects-content");
        for (let i = 0; i < projectsCardParent.children.length; i++) {
            if (i > 1) {
                projectsCardParent.children[i].classList.add("hidden");
            }
        }
        projectsCardParent.style.gridTemplateRows = "repeat(1, 1fr)";
        showMoreProjectsBtn.innerHTML = `<span>More Projects <i class="bx bx-down-arrow-alt"></i></span>`;
        localStorage.setItem("isVisisble_2", true);
        window.location.href = "#projects";
    }
})