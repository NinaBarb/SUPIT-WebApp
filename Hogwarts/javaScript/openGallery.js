const m = document.querySelector(".modal");

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

m.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal") || e.target.classList.contains("txtMod")) {
        document.getElementById("myModal").style.display = "none";
    }
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}