document.addEventListener("DOMContentLoaded", () => {
    const destinationInput = document.querySelector("#to");

    // Check if there's a stored destination city and autofill it
    if (destinationInput && localStorage.getItem("destinationCity")) {
        destinationInput.value = localStorage.getItem("destinationCity");
    }
});
