import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import confetti from "./confetti"; // Ensure this is the correct path to your confetti.js

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function setupIntersectionObserver() {
  const trigger = document.getElementById("trigger");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        confetti.start();
      } else {
        confetti.stop();
      }
    });
  });

  observer.observe(trigger);
}

document.addEventListener("DOMContentLoaded", setupIntersectionObserver);
