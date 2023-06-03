function createSkill(hardSkill) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const span = document.createElement("span");

  img.src = hardSkill.logo;
  span.textContent = hardSkill.name;

  li.appendChild(img);
  li.appendChild(span);

  return li;
}

function updateSkills(hardSkills) {
  const skillsList = document.querySelector(".skills ul");

  for (let i = 0; i < hardSkills.length; i++) {
    skillsList.appendChild(createSkill(hardSkills[i]));
  }
}
