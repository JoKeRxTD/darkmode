// Variables

const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

// Functions

const toggleMode = () => {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};

// Call toggleMode on page load

toggleMode();

// Event listeners

checkbox.addEventListener("click", toggleMode);
