
fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
        initializeHamburger();
        highlightActiveLink();
    });

fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    });

function initializeHamburger() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (!hamburger || !navMenu) {
        console.error("Hamburger elements missing!");
        return;
    }

    hamburger.addEventListener("click", () => {
        const isActive = hamburger.classList.contains("active");
        hamburger.classList.toggle("active", !isActive);
        navMenu.classList.toggle("active", !isActive);
        document.body.classList.toggle("no-scroll", !isActive);
    });
}
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname.split('/').pop(); // e.g., about.html

    links.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}
