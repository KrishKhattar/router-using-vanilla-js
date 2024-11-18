export function navigateTo(url) {
  history.pushState(null, null, url);
  window.dispatchEvent(new Event("routechange"));
}

// Attach event listener for links with `data-link`
export function setupNavigation() {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
}
