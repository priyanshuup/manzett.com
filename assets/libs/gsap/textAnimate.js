const words = ["Digital", "Design", "App Dev.", "Creative", "Software", "Web Dev.", "UI / UX", "Leads"];
const wordEl = document.querySelector("#changing-text .word"); // target inner text only
let i = 0;

function animateText() {
  gsap.to(wordEl, {
    y: -20,
    opacity: 0,
    duration: 0.5,
    ease: "power1.in",
    onComplete: () => {
      i = (i + 1) % words.length;
      wordEl.textContent = words[i];

      gsap.fromTo(
        wordEl,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power1.out",
          onComplete: () => {
            setTimeout(animateText, 1500); // delay before next word
          }
        }
      );
    }
  });
}

setTimeout(animateText, 3000); // delay before starting the loop
