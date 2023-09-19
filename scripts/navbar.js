const header = document.getElementById("header");
const navBar = document.getElementById("pages");

window.onscroll = function() {scrollDown()};

var sticky = navBar.offsetTop;

function scrollDown() {
    if (window.pageYOffset > sticky) {
        navBar.classList.add("sticky-header");
    } else {
        navBar.classList.remove("sticky-header");
    }

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "30px";
    } else {
        document.getElementById("header").style.fontSize = "90px";
    }
}