gsap.registerPlugin(ScrollTrigger);

function animateHome() {
  gsap.from("#hero h1", {
    duration: 1,
    y: -80,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from("#hero h2", {
    duration: 1,
    y: -50,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
  });


  gsap.to(".customer-service", {
    scrollTrigger: {
      trigger: ".customer-service", // ✅ use class since your section has class
      start: "top 70%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
  gsap.from(".know-about-manzett .content", {
    scrollTrigger: {
      trigger: ".know-about-manzett .content", // ✅ use class since your section has class
      start: "top 60%",
      toggleActions: "play reverse play reverse",
    },
    y: 0,
    x: -100,
    duration: 1,
    ease: "power2.out"
  });
  gsap.from(".know-about-manzett .backgroundImage", {
    scrollTrigger: {
      trigger: ".know-about-manzett .content", // ✅ use class since your section has class
      start: "top 60%",
      toggleActions: "play reverse play reverse",
    },
    y: 0,
    x: 100,
    duration: 1,
    ease: "power2.out"
  });
  gsap.from(".booking-details-brief .booking-contents", {
    scrollTrigger: {
      trigger: ".booking-details-brief .booking-contents", // ✅ use class since your section has class
      start: "top 50%",
      toggleActions: "play reverse play reverse",
    },
    y: 0,
    x: -100,
    duration: 1,
    ease: "power2.out"
  });
  gsap.from(".booking-details-brief .manzett-image-div", {
    scrollTrigger: {
      trigger: ".booking-details-brief .manzett-image-div", // ✅ use class since your section has class
      start: "top 50%",
      toggleActions: "play reverse play reverse",
    },
    y: 0,
    x: 100,
    duration: 1,
    ease: "power2.out"
  });
gsap.from(".card-section-guidance .cards-grid-guidance .card", {
  scrollTrigger: {
    trigger: ".card-section-guidance .cards-grid-guidance",
    start: "top 80%", // when section enters the viewport
    toggleActions: "play reverse play reverse", 
    // markers: true // uncomment to debug
  },
  scale: 0.8,        // start smaller
  opacity: 0,        // start invisible
  duration: 0.6,     // each animation duration
  ease: "back.out(1.9)", // a nice pop effect
  stagger: 0.2       // delay between each card
});


  gsap.to(".card-section .cards-grid", {
    scrollTrigger: {
      trigger: ".card-section .cards-grid", // ✅ use class since your section has class
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    scale: 1,
    duration: 1,
    ease: "power2.out"
  });
  gsap.to(".experience-work-short .short-div", {
    scrollTrigger: {
      trigger: ".experience-work-short .short-div", // ✅ use class since your section has class
      start: "top 60%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  });

}

function animateAbout() {
  gsap.from(".about .about-content", {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out"
  });


  gsap.to(".about-main-content .about-sub-contents-points", {
    scrollTrigger: {
      trigger: ".about-main-content .about-sub-contents-points", // ✅ use class since your section has class
      start: "top 70%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    y: -25,
    duration: 1,
    ease: "power2.out"
  });
  gsap.to(".wisdom-main-content .wisdom-sub-contents-points", {
    scrollTrigger: {
      trigger: ".wisdom-main-content .wisdom-sub-contents-points", // ✅ use class since your section has class
      start: "top 70%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    y: -25,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".trust-manzett-koushal-content", {
    scrollTrigger: {
      trigger: ".trust-manzett-koushal-content", // ✅ use class since your section has class
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    x: 100,
    duration: 1,
    ease: "power2.out"
  });
  gsap.from(".struggling-content", {
    scrollTrigger: {
      trigger: ".struggling-content", // ✅ use class since your section has class
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    x: -100,
    duration: 1,
    ease: "power2.out"
  });

    gsap.to(".conslusion-content h2", {
    scrollTrigger: {
      trigger: ".conslusion-content h2", // ✅ use class since your section has class
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power2.out"
  });

}

function animateAppointment(){
gsap.from(".appointment-main", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out"
  });

    gsap.from(".session-importance .session-banner-image", {
    scrollTrigger: {
      trigger: ".session-importance .session-banner-image", // ✅ use class since your section has class
      start: "top 70%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    x: -100,
    duration: 1,
    ease: "power2.out"
  });
    gsap.from(".session-content", {
    scrollTrigger: {
      trigger: ".session-content", // ✅ use class since your section has class
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    x: 100,
    duration: 1,
    ease: "power2.out"
  });
    gsap.from(".choose-a-call", {
    scrollTrigger: {
      trigger: ".choose-a-call", // ✅ use class since your section has class
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    x: -100,
    duration: 1,
    ease: "power2.out"
  });

   gsap.to(".sessions-conclusion", {
    scrollTrigger: {
      trigger: ".sessions-conclusion", // ✅ use class since your section has class
      start: "top 70%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    y: -25,
    duration: 1,
    ease: "power2.out"
  });
}

function animateServices(){
  gsap.from(".services-content h1", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out"
  });
  gsap.from(".services-content h2", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out"
  });
  gsap.from(".services-content button", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power2.out"
  });
   gsap.from(".services-banner-image", {
    scrollTrigger: {
      trigger: ".services-banner-image", // ✅ use class since your section has class
      start: "top 70%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    x: -100,
    duration: 1,
    ease: "power2.out"
  });
    gsap.from(".services-banner-content", {
    scrollTrigger: {
      trigger: ".services-banner-content", // ✅ use class since your section has class
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    x: 100,
    duration: 1,
    ease: "power2.out"
  });
    gsap.from(".core-services h2", {
    scrollTrigger: {
      trigger: ".core-services h2", // ✅ use class since your section has class
      start: "top 70%",
      toggleActions: "play reverse play reverse",
    },
    y: -50,
    duration: 1,
    ease: "power2.out"
  });
    gsap.to(".core-services h3", {
    scrollTrigger: {
      trigger: ".core-services h3", // ✅ use class since your section has class
      start: "top 70%",
      toggleActions: "play reverse play reverse",
    },
   opacity: 1,
    duration: 1,
    ease: "power2.out"
  });
  //   gsap.to(".core-service-card", {
  //   scrollTrigger: {
  //     trigger: ".core-service-card", // ✅ use class since your section has class
  //     start: "top 70%",
  //     toggleActions: "play reverse play reverse",
  //   },
  //  scale: 1,
  //   duration: 1,
  //   ease: "power2.out"
  // });

     gsap.from(".how-it-works h2", {
    scrollTrigger: {
      trigger: ".how-it-works h2", // ✅ use class since your section has class
      start: "top 70%",
      toggleActions: "play reverse play reverse",
    },
    y: -50,
    duration: 1,
    ease: "power2.out"
  });


// Animate steps
gsap.to(".how-it-works .step", {
  scrollTrigger: {
    trigger: ".how-it-works",
    start: "top 50%",
    toggleActions: "play reverse play reverse",
  },
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.3
});

// Animate lines between steps
gsap.to(".how-it-works .line", {
  scrollTrigger: {
    trigger: ".how-it-works",
    start: "top 30%",
    toggleActions: "play reverse play reverse",
  },
  opacity: 1,
  scaleX: 1,
  duration: 0.4,
  ease: "power2.out",
  stagger: 0.3,
  delay: 0.3
});

}

function animateContact(){
  gsap.from(".contact-hero-content h1", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out"
  });
  gsap.to(".contact-hero-content h2", {
    duration: 1,
    scale: 1,
    opacity: 1,
    ease: "power2.out"
  });

//   gsap.to(".contact-schedule-button", {
//   scrollTrigger: {
//     trigger: ".session-booking", // or any earlier trigger if you want it to happen before reaching the button
//     start: "top 70%",
//     toggleActions: "play reverse play reverse",
//   },
//   backgroundColor: "#ceaf56", 
//   color: "#8C0909",
//   duration: 0.5,
//   ease: "power2.out"
// });

    gsap.from(".map-content", {
    scrollTrigger: {
      trigger: ".map-content", // ✅ use class since your section has class
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    x: -100,
    duration: 1,
    ease: "power2.out"
  });
    gsap.from(".map", {
    scrollTrigger: {
      trigger: ".map", // ✅ use class since your section has class
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    x: 100,
    duration: 1,
    ease: "power2.out"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("home-page")) animateHome();
  if (document.body.classList.contains("about-page")) animateAbout();
  if (document.body.classList.contains("appointment-page")) animateAppointment();
  if (document.body.classList.contains("services-page")) animateServices();
  if (document.body.classList.contains("contact-page")) animateContact();
})

