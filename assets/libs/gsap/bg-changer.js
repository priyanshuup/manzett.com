  const images = [
    "./assets/images/women.webp",
    "./assets/images/women2.webp",
    "./assets/images/women3.webp",
    "./assets/images/women4.webp"
  ];

console.log(images)
  const heroRight = document.querySelector(".hero-right");

  // Create two background layers for crossfade
  const bg1 = document.createElement("div");
  const bg2 = document.createElement("div");

  bg1.classList.add("hero-bg");
  bg2.classList.add("hero-bg");

  heroRight.appendChild(bg1);
  heroRight.appendChild(bg2);

  // Initial backgrounds
  let currentIndex = 0;
  bg1.style.backgroundImage = `url(${images[currentIndex]})`;
  bg1.style.zIndex = 1;
  bg2.style.zIndex = 0;

  function transitionBackground() {
    const nextIndex = (currentIndex + 1) % images.length;

    // Bring bg2 to front and animate
    bg2.style.backgroundImage = `url(${images[nextIndex]})`;
    bg2.style.opacity = 0;
    bg2.style.zIndex = 2;

    gsap.to(bg2, {
      opacity: 1,
      duration: 1.2,
      onComplete: () => {
        // Swap layers
        bg1.style.backgroundImage = bg2.style.backgroundImage;
        bg1.style.zIndex = 1;
        bg2.style.zIndex = 0;
        bg2.style.opacity = 0;
        currentIndex = nextIndex;
      }
    });
  }

  // Start interval loop
  setInterval(transitionBackground, 5000);
