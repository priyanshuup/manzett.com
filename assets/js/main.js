document.addEventListener("DOMContentLoaded", () => {
    gsap.from("#hero h1", {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power2.out"
    });
  
    gsap.from("#hero p", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.5,
      ease: "power2.out"
    });
  });
  