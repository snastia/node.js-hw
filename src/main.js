const btn = document.getElementById("#1")
const BASE_URL = "http://localhost:8080"

btn.addEventListener("submit", () => {
  fetch(`${BASE_URL}`).then(res => res.json)
})