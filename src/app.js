
function stopActive(event) {event.preventDefault();
activeLink.classList.add("active");}

let activeLink = document.querySelector(".active");
activeLink.addEventListener("click", stopActive);

function submitEmail(event) {event.preventDefault();
let firstname = document.querySelector("#firstnameSubmit").value;
alert(`Thank you, ${firstname}. I will be responding to you as soon as possible!`)
}

let submitMessage = document.querySelector(".inputBars");
submitMesssage.addEventListener("submit", submitEmail);