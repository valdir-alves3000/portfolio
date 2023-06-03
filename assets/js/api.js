async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/valdir-alves3000/portfolio-design-figma/main/assets/data/profile.json";
  const response = await fetch(url);
  const profileData = await response.json();
  return profileData;
}
