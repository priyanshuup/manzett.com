
  window.addEventListener("load", () => {
    const container = document.querySelector(".image-slidder");

    // Create the yellow slider
    const slider = document.createElement("div");
    slider.classList.add("slider-overlay");

    // Append to image-slidder
    container.appendChild(slider);

    // Start animation after 1 second
    gsap.delayedCall(1.8, () => {
      gsap.to(slider, {
        width: "100%",
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          // Slide it off to the right
          gsap.to(slider, {
            x: "100%",
            duration: 0.6,
            ease: "power2.in",
            onComplete: () => slider.remove()
          });
        }
      });
    });
  });
