// fetch the DOM elements
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const openModalBtn = document.getElementById("btn-open");
const closeModalBtn = document.getElementById("close-modal");


//write function to open the modal
function openModal() {
 modal.classList.remove("hidden");
 overlay.classList.remove("hidden");
};

//call function on button click
openModalBtn.addEventListener("click", openModal);

//write function to close the modal
function closeModal() {
 modal.classList.add("hidden");
 overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);