// ==========================================
// MOBILE NAVIGATION
// ==========================================

// ==========================================
// PROPERTY SEARCH / FILTER
// ==========================================

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener("click", function () {

        const location =
            document.getElementById("locationFilter").value;

        const type =
            document.getElementById("typeFilter").value;

        const price =
            document.getElementById("priceFilter").value;

        const properties =
            document.querySelectorAll(".property-card");


        properties.forEach(function (property) {

            const propertyLocation =
                property.dataset.location;

            const propertyType =
                property.dataset.type;

            const propertyPrice =
                property.dataset.price;


            const locationMatch =
                location === "all" ||
                location === propertyLocation;

            const typeMatch =
                type === "all" ||
                type === propertyType;

            const priceMatch =
                price === "all" ||
                price === propertyPrice;


            if (
                locationMatch &&
                typeMatch &&
                priceMatch
            ) {

                property.style.display = "block";

            } else {

                property.style.display = "none";

            }

        });

    });

}
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });
}