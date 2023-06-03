function createProject(project) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const button = document.createElement("button");
  const span = document.createElement("span");
  const eye = document.createElement("img");

  img.src = project.imageUrl;
  eye.src = "../assets/icons/eye.svg";

  div.classList.add("img");
  li.classList.add("project");
  span.textContent = project.name;

  button.appendChild(eye);
  button.appendChild(span);
  div.appendChild(img);
  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function updateProjets(portfolio) {
  const projectsList = document.querySelector(".projects-list");

  for (let i = 0; i < portfolio.length; i++) {
    const project = createProject(portfolio[i]);
    projectsList.appendChild(project);
  }
}
