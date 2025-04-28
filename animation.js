// GSAP Animations with ScrollTrigger
document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Header animation
  gsap.from(".header", {
    duration: 0.75,
    y: -100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
    },
  });

  // Home section animation
  gsap.from(".description h1", {
    duration: 0.75,
    x: -200,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".home",
      start: "top 80%",
    },
  });

  gsap.from(".description .icons a", {
    duration: 0.75,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".home",
      start: "top 80%",
    },
  });

  gsap.from(".pfp-container img", {
    duration: 0.75,
    x: 200,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".home",
      start: "top 80%",
    },
  });

  // About section animation
  gsap.from(".about h2", {
    duration: 0.75,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    },
  });

  gsap.from(".card-cont img", {
    duration: 0.75,
    x: -200,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    },
  });

  gsap.from(".card-cont .info", {
    duration: 0.75,
    x: 200,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    },
  });

  // Skills section animation
  gsap.from(".skills h2", {
    duration: 0.75,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".skills",
      start: "top 80%",
    },
  });

  // gsap.from(".skill-grid div", {
  //   duration: .75,
  //   scale: 0,
  //   opacity: 0,
  //   stagger: 0.2,
  //   ease: "back.out(1.7)",
  //   scrollTrigger: {
  //     trigger: ".skills",
  //     start: "top 80%",
  //   },
  // });

  // Projects section animation
  gsap.from(".projects h2", {
    duration: 0.75,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%",
    },
  });

  gsap.from(".project-grid a", {
    duration: 0.75,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%",
    },
  });

  // Contact section animation
  gsap.from(".contact h2", {
    duration: 0.75,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
    },
  });

  gsap.from(".form .credentials", {
    duration: 0.75,
    x: -200,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
    },
  });

  gsap.from(".form button", {
    duration: 0.75,
    scale: 0,
    opacity: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
    },
  });

  // Footer animation
  gsap.from(".footer h3", {
    duration: 0.75,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
    },
  });

  gsap.from(".icons-footer a", {
    duration: 0.75,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
    },
  });

  gsap.from(".footer p", {
    duration: 0.75,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
    },
  });
});
