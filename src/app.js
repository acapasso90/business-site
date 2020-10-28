
function stopActive(event) {event.preventDefault();
activeLink.classList.add("active");}

let activeLink = document.querySelector(".active");
activeLink.addEventListener("click", stopActive);

