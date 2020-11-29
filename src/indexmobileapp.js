var text = ["React.js", "JavaScript", "Responsive Web Design", "CSS",  "Front-end Web Developer based in CT", "HTML"];
var counter = 0;
var basedIn = document.querySelector(".basedIn");
setInterval(change, 2000);
function change() { w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    var targetWidth = 430;
    if ( w <= targetWidth) {basedIn.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; };
        if (text[counter] === text[5]){basedIn.classList.remove("basedIn2"); basedIn.classList.add("basedIn")}
        else {basedIn.classList.remove("basedIn"); basedIn.classList.add("basedIn2");}}
    else { basedIn.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; };}
}