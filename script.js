
// --------------------------------------------

// Sticky Navigation Menu 
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }

}
// --------------------------------------------


// Side NavIgation Menu 
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    scrollBtn.style.pointerEvents = "none";
}

// Function to close the navbar
function closeNavBar() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    scrollBtn.style.pointerEvents = "auto";
}

cancelBtn.onclick = closeNavBar;

// Adding a click event to the body to close the navbar when clicking outside
body.onclick = function (event) {
    // Check if the click target is outside the navbar and the menu button
    if (!navBar.contains(event.target) && !menuBtn.contains(event.target)) {
        closeNavBar();
    }
}
document.getElementById('scrollButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector('#whyme').scrollIntoView({
        behavior: 'smooth'
    });
});


