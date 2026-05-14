const membersContainer =
document.getElementById("members");

async function getMembers() {

  const response =
  await fetch("data/members.json");

  const data = await response.json();

  displayMembers(data);

}

function displayMembers(members) {

  members.forEach(member => {

    const card = document.createElement("section");

    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">

      <h2>${member.name}</h2>

      <p>${member.address}</p>

      <p>${member.phone}</p>

      <a href="${member.website}" target="_blank">
        Visit Website
      </a>
    `;

    membersContainer.appendChild(card);

  });

}

getMembers();

/* GRID VIEW */
document.getElementById("gridView")
.addEventListener("click", () => {

  membersContainer.classList.add("grid");

  membersContainer.classList.remove("list");

});

/* LIST VIEW */
document.getElementById("listView")
.addEventListener("click", () => {

  membersContainer.classList.add("list");

  membersContainer.classList.remove("grid");

});
