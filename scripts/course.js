const courses = [

  {
    code: "WDD 130",
    name: "Web Fundamentals",
    credits: 2,
    completed: true,
    type: "WDD"
  },

  {
    code: "WDD 131",
    name: "Dynamic Web Fundamentals",
    credits: 2,
    completed: true,
    type: "WDD"
  },

  {
    code: "WDD 231",
    name: "Web Frontend Development I",
    credits: 2,
    completed: false,
    type: "WDD"
  }

];

const container = document.getElementById("courseContainer");

const totalCredits =
  document.getElementById("totalCredits");

function displayCourses(courseList) {

  container.innerHTML = "";

  courseList.forEach(course => {

    const card = document.createElement("div");

    card.classList.add("course-card");

    if (course.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <h3>${course.code}</h3>

      <p>${course.name}</p>

      <p>${course.credits} Credits</p>
    `;

    container.appendChild(card);

  });

  const credits = courseList.reduce(
    (total, course) => total + course.credits,
    0
  );

  totalCredits.textContent = credits;

}

/* DEFAULT DISPLAY */
displayCourses(courses);

/* FILTER BUTTONS */

document.getElementById("all")
.addEventListener("click", () => {

  displayCourses(courses);

});

document.getElementById("wdd")
.addEventListener("click", () => {

  displayCourses(
    courses.filter(course => course.type === "WDD")
  );

});

document.getElementById("cse")
.addEventListener("click", () => {

  displayCourses(
    courses.filter(course => course.type === "CSE")
  );

});
