// select all accordion headers - stored in NodeList called headers
const headers = document.querySelectorAll(".accordion_header");

function toggleAccordion() {
    const activeHeader = this.classList.contains("accordion_header--active");

    // close all other accordions
    headers.forEach(header => {
            header.classList.remove("accordion_header--active");
            header.setAttribute("aria-expanded", "false");
    });

    // toggle the active state of the clicked accordion item and update aria-expanded
    if (!activeHeader) {
        this.classList.toggle("accordion_header--active");
        this.setAttribute("aria-expanded", "true");
    }
}

// attach the toggleAccordion() to each accordion header and add keyboard keydown listeners
headers.forEach(function(header) {
    header.addEventListener('click', toggleAccordion);

    header.addEventListener("keydown", function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleAccordion.call(this); // using .call to specify this refers to the clicked header
        }
    })
})