particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true, // Enable linked lines between particles
      distance: 150, // Maximum distance between linked particles
      color: "#ffffff", // Color of the lines
      opacity: 0.4, // Opacity of the lines
      width: 1, // Width of the lines
    },
    move: {
      enable: true, // Enable particle movement
      speed: 6, // Speed of particle movement
      direction: "none", // Direction of particle movement
      random: false, // Whether movement is random
      straight: false, // Whether particles move in straight lines
      out_mode: "out", // What happens when particles reach the edge of the canvas
      bounce: false, // Whether particles bounce off the edges of the canvas
      attract: {
        // Whether particles are attracted to each other
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// js

// Load the API key dynamically
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/env.json"); // Fetch the environment file
    const env = await response.json();
    document.getElementById("access_key").value = env.WEB3FORMS_API_KEY; // Set the API key
  } catch (error) {
    console.error("Error loading API key:", error);
  }
});

document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const form = event.target;
    const formData = new FormData(form);
    const messageElement = document.getElementById("form-message");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Success message
        messageElement.style.display = "block";
        messageElement.style.color = "green";
        messageElement.textContent = "Your message has been sent successfully!";
        form.reset(); // Reset the form fields
      } else {
        // Error message
        messageElement.style.display = "block";
        messageElement.style.color = "red";
        messageElement.textContent =
          "There was an error sending your message. Please try again.";
      }
    } catch (error) {
      // Network or other error
      messageElement.style.display = "block";
      messageElement.style.color = "red";
      messageElement.textContent =
        "An unexpected error occurred. Please try again later.";
    }
  });
