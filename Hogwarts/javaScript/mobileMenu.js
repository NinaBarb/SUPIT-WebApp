var navBar=document.getElementById("leftNav");
var menuH=document.getElementById("hamburgerMenu");

menuH.addEventListener('click',()=>{
        navBar.classList.toggle('show');
        menuH.classList.toggle('show');
})