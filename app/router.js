import { routes } from "./routes.js";
import { setupNavigation } from "./navigation.js";

function router() {
  const app = document.getElementById("app");
  const path = window.location.pathname;
  app.innerHTML = routes[path] || "<h1>404 - Page Not Found</h1>";
}

// Initialize the router
setupNavigation();
router();

// Listen to `popstate` events for back/forward navigation
window.addEventListener("popstate", router);

// Listen for custom route change events (e.g., via navigateTo)
window.addEventListener("routechange", router);
