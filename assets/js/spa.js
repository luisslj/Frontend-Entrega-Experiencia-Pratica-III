document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const links = document.querySelectorAll("nav a");

  async function loadPage(url) {
    const response = await fetch(`assets/templates/${url}`);
    const html = await response.text();
    main.innerHTML = html;
    window.history.pushState({}, "", url);
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.getAttribute("href");
      loadPage(page);
    });
  });

  window.addEventListener("popstate", () => {
    const path = location.pathname.split("/").pop();
    loadPage(path || "home.html");
  });

  // Carrega página inicial
  const initialPage = location.pathname.split("/").pop() || "home.html";
  loadPage(initialPage);
});
