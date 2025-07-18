document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
  
    const scrollContainer = document.querySelector("[data-scroll-container]");
  
    const locoScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true
    });
  
    ScrollTrigger.scrollerProxy(scrollContainer, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: "transform" // Crucial fix for Locomotive + pinning
    });
  
    // ScrollTrigger setup
    ScrollTrigger.create({
        trigger: "main .sticky-section", // The section that triggers the pin
        start: "top -15%",          // When the top of trigger hits top of viewport
        end: "bottom 50%",      // When bottom of trigger hits bottom of viewport
        pin: ".sticky-section .sticky-wrapper .sticky-left", // Full nested selector
        pinSpacing: false,         // Prevents extra spacing
        scroller: "[data-scroll-container]", // Your scroll container
      });
  
    // Sync on refresh and resize
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    setTimeout(() => {
      locoScroll.update();
      ScrollTrigger.refresh();
    }, 500);
  });
  