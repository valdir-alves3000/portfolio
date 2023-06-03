function createProjectTemplate(project) {
  const modal = document.querySelector("#modal");
  const modalImg = modal.querySelector(".modal-img img");
  const h3 = modal.querySelector("h3");
  const p = modal.querySelector("p");
  const btnGroup = document.querySelector(".btn-group");
  const repositoryLink = document.createElement("a");
  const repositoryLinkIcon = document.createElement("img");
  const repositoryLinkText = document.createElement("span");

  btnGroup.innerHTML = "";

  h3.textContent = project.name;
  p.textContent = project.description;
  modalImg.src = project.imageUrl;

  repositoryLink.href = project.url;
  repositoryLink.target = "_blank";
  repositoryLinkIcon.src = "./assets/icons/gitHub.svg";
  repositoryLinkIcon.alt = "icone do Github";
  repositoryLinkText.textContent = "Repositório";
  repositoryLink.appendChild(repositoryLinkIcon);
  repositoryLink.appendChild(repositoryLinkText);
  btnGroup.appendChild(repositoryLink);

  if (project.viewUrl) {
    const viewLink = document.createElement("a");
    const viewLinkIcon = document.createElement("img");
    const viewLinkText = document.createElement("span");

    viewLink.href = project.viewUrl;
    viewLink.target = "_blank";
    viewLinkIcon.src = "../assets/icons/www.svg";
    viewLinkIcon.alt = "icone do globo";
    viewLinkText.textContent = "Demo";
    viewLink.appendChild(viewLinkIcon);
    viewLink.appendChild(viewLinkText);
    btnGroup.appendChild(viewLink);
  }
}

function updateProjectModal(portfolio) {
  const buttonsView = document.querySelectorAll(".projects-list li button");
  const modalClose = document.querySelector("#modal-close");

  buttonsView.forEach((buttonView) => {
    buttonView.addEventListener("click", async () => {
      modalClose.parentElement.classList.add("active");
      const name = buttonView.querySelector("span").innerHTML;
      const [project] = portfolio.filter((project) => project.name == name);

      createProjectTemplate(project);
    });
  });

  modalClose.addEventListener("click", () =>
    modalClose.parentElement.classList.remove("active")
  );
}
