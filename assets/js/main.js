(async () => {
  const profileData = await fetchProfileData();
  updateProjets(profileData.portfolio);
  updateSkills(profileData.skills.hardSkills);
  updateProjectModal(profileData.portfolio);
  updateCourses(profileData);
  createFooter();
})();

function createFooter() {
  const footer = document.querySelector(".footer");
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = "Valdir Alves";
  p.textContent = `© ${new Date().getUTCFullYear()} by `;

  p.appendChild(strong);
  footer.appendChild(p);
}
