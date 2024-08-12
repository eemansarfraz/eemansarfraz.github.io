// Function to open a modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Function to close a modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    document.body.style.overflow = ""; 
}

// Attach event listeners to buttons and close elements
document.querySelectorAll('[id^="proj"]').forEach(button => {
    button.onclick = function() {
        var modalId = this.id + "-modal";
        openModal(modalId);
    };
});

document.querySelectorAll('.close').forEach(span => {
    span.onclick = function() {
        var modalId = this.getAttribute('data-target');
        closeModal(modalId);
    };
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}
