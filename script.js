//turn pages when click next or prev button

//contact me button when click

//create reverse index function

//back profile button when click

//opening animation
//opening animation (cover right animation)
//opening animation (page left or profile page animation)
//opening animation (all page right animation)

const navbar = document.querySelector(".dropdown");
const scrollTopButton = document.querySelector(".scroll-top");
const header = document.querySelector("header");

function toggleMenu(){

    navbar.classList.toggle("show");

}

function closeMenu(){

    navbar.classList.remove("show");

}

document.addEventListener("click", (event) => {

    const isClickInside =
    navbar.contains(event.target) ||
    event.target.classList.contains("hamburg");

    if(!isClickInside){
        closeMenu();
    }

});

const texts=[
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Game Enthusiast"
]

const speed = 100;
const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex<texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter,speed);
    }
    else{
        setTimeout(eraseText,2000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length>0){
        textElements.innerHTML=textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText,50);
    }
    else{
        textIndex=(textIndex + 1)%texts.length;
        characterIndex=0;
        setTimeout(typeWriter,500)
    }
}

window.addEventListener("load", typeWriter);

window.addEventListener("scroll", () => {
    scrollTopButton.classList.toggle("show", window.scrollY > 500);
    header.classList.toggle("scrolled", window.scrollY > 80);
});

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
