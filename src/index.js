import './less/index.less'

// Your code goes here!
const textBox = document.createElement("input");
textBox.setAttribute("type", "text");
textBox.setAttribute("name", "focus");

const footerText = document.querySelector(".footer p");
//footerText.appendChild(textBox);

const navLink1 = document.querySelector(".nav-link:nth-of-type(1)");
const navLink2 = document.querySelector(".nav-link:nth-of-type(2)");
const navLink3 = document.querySelector(".nav-link:nth-of-type(3)");
const navLink4 = document.querySelector(".nav-link:nth-of-type(4)");

const btn1 = document.querySelector("div .btn:nth-of-type(1)");

const wholeDocument = document.querySelector("*");


navLink1.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightblue";
})

navLink1.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "white";
})

navLink2.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightblue";
})

navLink2.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "white";
})

navLink3.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightblue";
})

navLink3.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "white";
})

navLink4.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightblue";
})

navLink4.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "white";
})

wholeDocument.addEventListener("keydown", (event) => {
    if(event.code === "KeyZ") {
        alert("You pressed Z!");
    }
})

wholeDocument.addEventListener("wheel", (event) => {
    console.log(event.deltaX, event.deltaY);
})

window.addEventListener("load", (event) => {
    alert("Thermonuclear ICBMs armed and ready to initiate launch sequence");
})

window.addEventListener("resize", (event) => {
    console.log(window.innerHeight, window.innerWidth);
})

window.addEventListener("scroll", (event) => {
    console.log("Scrolling!");
})

textBox.addEventListener("focus",(event) => {
    event.target.style.backgroundColor = "blue";
    event.target.style.color = "white";
})

textBox.addEventListener("blur",(event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
})

btn1.addEventListener("dblclick", (event) => {
    event.target.style.backgroundColor = "brown";
    event.stopPropagation();
})




console.log("");