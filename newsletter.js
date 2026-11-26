// fetch the DOM elements
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const openModalBtn = document.getElementById("btn-open");
const closeModalBtn = document.getElementById("close-modal");
const subscribeBtn = document.getElementById("btnsubs");
const emailInput = modal.querySelector('input[type="email"]');

// write function to open the modal
function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// write function to close the modal
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// handle newsletter subscription
function handleSubscribe() {
    const email = emailInput.value.trim();

    if (!email || !emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
    }

    alert(`Thanks for subscribing with ${email}!`);
    emailInput.value = "";
    closeModal();
}

// call functions on click
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
subscribeBtn.addEventListener("click", handleSubscribe);