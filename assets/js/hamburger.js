document.addEventListener("DOMContentLoaded", () => {
  const waitForHamburger = setInterval(() => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
      clearInterval(waitForHamburger);

      hamburger.addEventListener("click", () => {
        const isActive = hamburger.classList.contains("active");
        hamburger.classList[isActive ? "remove" : "add"]("active");
        navMenu.classList[isActive ? "remove" : "add"]("active");
        document.body.classList[isActive ? "remove" : "add"]("no-scroll");
      });
    }
  }, 100); // retry every 100ms
});
