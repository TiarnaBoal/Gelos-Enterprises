document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = navMenu.querySelectorAll("a");
    const body = document.body;

    function toggleMenu() {
        navMenu.classList.toggle("open"); // show menu
        menuIcon.classList.toggle("change"); // hamburger animation (change to X)
        body.classList.toggle("no-scroll"); // disable scrolling when menu opened

        // update aria-expanded attribute
        const expanded = menuIcon.getAttribute("aria-expanded") === "true";
        menuIcon.setAttribute('aria-expanded', String(!expanded));
    }

    // toggle menu on click
    menuIcon.addEventListener("click", toggleMenu);

    // toggle menu on enter or spacebar key pressed
    menuIcon.addEventListener("keydown", function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });

    // close menu when nav item is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("open")) {
                toggleMenu();
            }
        });
    });
});