const progressBars = document.querySelectorAll(".progress");
const skillCards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll", () => {

    // Progress Animation

    progressBars.forEach(bar => {

        const position =
            bar.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            bar.style.width =
            bar.getAttribute("data-width");
        }
    });

    // Cards Animation

    skillCards.forEach(card => {

        const position =
            card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.classList.add("show");
        }

    });

});
/* =====================
   PROJECT SLIDER
===================== */

document.querySelectorAll(".project-slider").forEach(slider => {

    const slides = slider.querySelectorAll(".slide");
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    if(!nextBtn || !prevBtn) return;

    let current = 0;

    function showSlide(index){

        slides.forEach(slide =>
            slide.classList.remove("active")
        );

        slides[index].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {

        current++;

        if(current >= slides.length){
            current = 0;
        }

        showSlide(current);

    });

    prevBtn.addEventListener("click", () => {

        current--;

        if(current < 0){
            current = slides.length - 1;
        }

        showSlide(current);

    });

});


/* =====================
   SCROLL ANIMATION
===================== */

const projectCards =
document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {

    projectCards.forEach(card => {

        const position =
        card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.classList.add("show");
        }

    });

});
/* =====================
   CONTACT ANIMATION
===================== */

const contactCards =
document.querySelectorAll(".contact-card");

window.addEventListener("scroll", () => {

    contactCards.forEach(card => {

        const position =
        card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.classList.add("show");
        }

    });

});
const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){
            link.classList.add("active");
        }

    });

});