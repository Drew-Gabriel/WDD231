const courses = [
  { code: "CSE 110", name: "Intro to Programming", credits: 2, completed: true, type: "CSE" },
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true, type: "WDD" },
  { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: false, type: "CSE" },
  { code: "CSE 210", name: "Programming with Classes", credits: 2, completed: false, type: "CSE" },
  { code: "WDD 231", name: "Web Frontend Development I", credits: 2, completed: false, type: "WDD" }
];

const container = document.getElementById("courseContainer");
const creditsDisplay = document.getElementById("totalCredits");

function displayCourses(list) {
  container.innerHTML = "";

  list.forEach(course => {
    const card = document.createElement("div");

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>${course.credits} credits</p>
    `;

    if (course.completed) {
      card.style.background = "#c8f7c5";
      card.style.border = "2px solid green";
    }

    container.appendChild(card);
  });

  const total = list.reduce((sum, course) => sum + course.credits, 0);
  creditsDisplay.textContent = total;
}

// default load
displayCourses(courses);

// buttons
document.getElementById("all").addEventListener("click", () => {
  displayCourses(courses);
});

document.getElementById("wdd").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.type === "WDD"));
});

document.getElementById("cse").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.type === "CSE"));
});
