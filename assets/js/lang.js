document.addEventListener("DOMContentLoaded", () => {
    const btnES = document.getElementById("btn-es");
    const btnFR = document.getElementById("btn-fr");
    const elements = document.querySelectorAll("[data-es][data-fr]");
  
    btnES.addEventListener("click", () => {
      elements.forEach(el => el.textContent = el.getAttribute("data-es"));
      btnES.classList.add("text-red-600", "font-semibold");
      btnES.classList.remove("text-blue-700");
      btnFR.classList.remove("font-semibold", "text-red-600");
      btnFR.classList.add("text-blue-700");
    });
  
    btnFR.addEventListener("click", () => {
      elements.forEach(el => el.textContent = el.getAttribute("data-fr"));
      btnFR.classList.add("text-blue-700", "font-semibold");
      btnFR.classList.remove("text-red-600");
      btnES.classList.remove("font-semibold", "text-blue-700");
      btnES.classList.add("text-red-600");
    });
  });
  