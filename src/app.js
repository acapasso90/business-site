function stopActive(event) {event.preventDefault();
activeLink.classList.add("active");}

const activeLink = document.querySelector(".active");
activeLink.addEventListener("click", stopActive);

const htmllabel = document.getElementById("html");
const html = document.querySelector(".fa-html5");
const csslabel = document.getElementById("css");
const css = document.querySelector(".fa-css3-alt");
const javascriptlabel = document.getElementById("javascript");
const javascript = document.querySelector(".fa-js-square");
const reactlabel = document.getElementById("react");
const react = document.querySelector(".fa-react");
const githublabel = document.getElementById("github");
const github = document.querySelector(".fa-github-square");
const bootstraplabel = document.getElementById("bootstrap");
const bootstrap = document.querySelector(".fa-bootstrap");
const npmlabel = document.getElementById("npm");
const npm = document.querySelector(".fa-npm");
const visuallabel = document.getElementById("visualstudiocode");
const visual = document.querySelector(".devicon-visualstudio-plain");
html.addEventListener("mouseenter", e => {
    htmllabel.style.opacity = '100%';})
html.addEventListener("mouseleave", e => {
    htmllabel.style.opacity = '0%';});
css.addEventListener("mouseenter", e => {
        csslabel.style.opacity = '100%';})
css.addEventListener("mouseleave", e => {
       csslabel.style.opacity = '0%';});
javascript.addEventListener("mouseenter", e => {
        javascriptlabel.style.opacity = '100%';})
javascript.addEventListener("mouseleave", e => {
    javascriptlabel.style.opacity = '0%';});
react.addEventListener("mouseenter", e => {
       reactlabel.style.opacity = '100%';})
react.addEventListener("mouseleave", e => {
    reactlabel.style.opacity = '0%';});
github.addEventListener("mouseenter", e => {
        githublabel.style.opacity = '100%';})
github.addEventListener("mouseleave", e => {
    githublabel.style.opacity = '0%';});
bootstrap.addEventListener("mouseenter", e => {
    bootstraplabel.style.opacity = '100%';})
bootstrap.addEventListener("mouseleave", e => {
    bootstraplabel.style.opacity = '0%';});
npm.addEventListener("mouseenter", e => {
        npmlabel.style.opacity = '100%';})
npm.addEventListener("mouseleave", e => {
    npmlabel.style.opacity = '0%';});
visual.addEventListener("mouseenter", e => {
        visuallabel.style.opacity = '100%';})
visual.addEventListener("mouseleave", e => {
    visuallabel.style.opacity = '0%';});



