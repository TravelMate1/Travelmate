document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const searchForm = document.querySelector("form");

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", () => {
            const destinationCity = searchInput.value.trim();

            // Save the destination city in localStorage
            if (destinationCity) {
                localStorage.setItem("destinationCity", destinationCity);
            }
        });
    }
});
