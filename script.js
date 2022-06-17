// For Navigation
const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
mybutton = document.getElementById("myBtn");

menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
// Close when the nav is click
document.onclick = function(e){
    if(e.target.id !== 'menu' && e.target.id !== 'hamburger'){
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }
}
// For Animation 
gsap.from(".progress span", {
    scrollTrigger: ".progress",
    width: "0px",
    ease: Power2.easeInOut,
    duration: 3,
    stragger: 0.1
})

// Go to top button
// When the user scrolls down 2000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 2000) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
mybutton.addEventListener('click', () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
})


