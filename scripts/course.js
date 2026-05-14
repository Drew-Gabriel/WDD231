const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true, type: "WDD" },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: true, type: "WDD" },
  { code: "WDD 231", name: "Web Frontend Development I", credits: 2, completed: false, type: "WDD" }
];

const container = document.getElementById("courseContainer");

function displayCourses(list) {
  container.innerHTML = "";

  list.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course-card");

    if (course.completed) {
      div.classList.add("completed");
    }

    div.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>${course.credits} Credits</p>
    `;

    container.appendChild(div);
  });
}

displayCourses(courses);

/* FILTERS */
document.getElementById("all").onclick = () => displayCourses(courses);

document.getElementById("wdd").onclick = () =>
  displayCourses(courses.filter(c => c.type === "WDD"));

document.getElementById("cse").onclick = () =>
  displayCourses(courses.filter(c => c.type === "CSE"));
