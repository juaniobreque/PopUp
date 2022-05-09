const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
    modal_container.classList.add("show");
});

close.addEventListener("click", () => {
    modal_container.classList.remove("show");
});


const open_2 = document.getElementById("open_2");
const modal_container2 = document.getElementById("modal_container2");
const close2 = document.getElementById("close2");

open_2.addEventListener("click", () => {
    modal_container2.classList.add("show");
});

close2.addEventListener("click", () => {
    modal_container2.classList.remove("show");
});