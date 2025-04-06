document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.createElement("button");
    toggle.innerText = "Toggle Theme";
    toggle.className = "button";
    document.body.insertBefore(toggle, document.body.firstChild);
  
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  });
  