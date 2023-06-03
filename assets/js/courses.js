function createCourse(course) {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const a = document.createElement("a");

  h3.textContent = course.name;
  li.appendChild(h3);

  a.href = course.url;
  a.target = "_blank";
  a.textContent = "View Certificate";
  li.appendChild(a);

  return li;
}

function updateCourses(profileData) {
  const courses = document.getElementById("courses");

  for (let i = 0; i < profileData.courses.length; i++) {
    const course = createCourse(profileData.courses[i]);
    courses.appendChild(course);
  }
}
