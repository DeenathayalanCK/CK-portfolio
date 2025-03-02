document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("project-modal");
    const modalImage = document.querySelector(".modal-image");
    const modalTitle = document.querySelector(".modal-title");
    const modalTime = document.querySelector(".modal-time");
    const modalSkills = document.querySelector(".modal-skills");
    const modalShort = document.querySelector(".modal-short");
    const modalDetailed = document.querySelector(".modal-detailed");
    const modalGithub = document.querySelector(".modal-github");
    const closeBtn = document.querySelector(".close");
  
    const projectTiles = document.querySelectorAll(".project-tile");
  
    projectTiles.forEach(tile => {
      tile.addEventListener("click", function (e) {
        // Prevent modal from opening if GitHub link is clicked
        if (e.target.classList.contains("github-link")) {
          return;
        }
        // Get data from tile attributes
        const title = tile.getAttribute("data-title");
        const time = tile.getAttribute("data-time");
        const skills = tile.getAttribute("data-skills");
        const shortDesc = tile.getAttribute("data-short");
        const detailedDesc = tile.getAttribute("data-detailed");
        const imgSrc = tile.getAttribute("data-img");
        const githubLink = tile.getAttribute("data-github");
  
        // Populate modal content
        modalImage.src = imgSrc;
        modalTitle.textContent = title;
        modalTime.textContent = time;
        modalSkills.textContent = skills;
        modalShort.textContent = shortDesc;
        modalDetailed.textContent = detailedDesc;
        modalGithub.href = githubLink;
  
        // Display the modal
        modal.style.display = "block";
      });
    });
  
    // Close modal when clicking the close button
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside of modal-content
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  