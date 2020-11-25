
function stopActive(event) {event.preventDefault();
activeLink.classList.add("active");}

let activeLink = document.querySelector(".active");
activeLink.addEventListener("click", stopActive);

var text = ["React.js", "JavaScript", "CSS", "HTML", "Web Design", "Front-end Web Developer based in CT"];
var counter = 0;
var basedIn = document.querySelector(".basedIn");
setInterval(change, 2000);
function change() {
basedIn.innerHTML = text[counter];
    counter++;
    if(counter >= text.length) { counter = 0; }}