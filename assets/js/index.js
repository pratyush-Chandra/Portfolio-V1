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