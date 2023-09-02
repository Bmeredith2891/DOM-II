import './less/index.less'

// Your code goes here!
const textBox = document.createElement("input");
textBox.setAttribute("type", "text");
textBox.setAttribute("name", "focus");

const footerText = document.querySelector(".footer p");
footerText.appendChild(textBox);

const navLinks = document.querySelectorAll(".nav-link");

const btn1 = document.querySelector("div .btn:nth-of-type(1)");

const wholeDocument = document.querySelector("*");

for(let navLink of navLinks) {
    navLink.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "lightblue";
    })

    navLink.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = "white";
    })
}


document.body.addEventListener("click", (event) => {
    event.target.classList.toggle("mirror");
    event.stopPropagation();
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
//see if it works now