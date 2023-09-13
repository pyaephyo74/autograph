let bars = document.querySelector("#bars");
let navLinks=document.querySelector(".nav-links");
bars.addEventListener("click",function(){
    // alert("Welcome");
    navLinks.classList.toggle("show");
    bars.classList.toggle("fa-times");
});
window.addEventListener("scroll",function(){
    navLinks.classList.remove("show");
    bars.classList.remove("fa-times");

});
