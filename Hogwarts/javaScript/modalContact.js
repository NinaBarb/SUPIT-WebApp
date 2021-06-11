const myModal = document.querySelector(".modalBg");
const contact = document.getElementById("contactForm");
const closeButton = document.getElementById("close");
const quitButton = document.getElementById("quitForm");

contact.addEventListener("click", function () {
    myModal.classList.add("open");
})

closeButton.addEventListener("click", function () {
    myModal.classList.remove("open");
})

quitButton.addEventListener("click", function () {
    myModal.classList.remove("open");
})

myModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modalBg")) {
        myModal.classList.remove("open");
    }
})