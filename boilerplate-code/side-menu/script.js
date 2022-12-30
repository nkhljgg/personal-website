const menuButton = document.getElementById("menu-button");
const sideMenu = document.getElementById("side-menu");

const button1 = document.getElementById("button1");

menuButton.addEventListener("click", function() {
  sideMenu.classList.toggle("visible");
});

button1.addEventListener("click", function() {
    sideMenu.classList.toggle("visible");
})

// document.addEventListener("click", function(event) {
//     if (!event.target.closest("#side-menu") && sideMenu.classList.contains("visible")) {
//       sideMenu.classList.remove("visible");
//     }
//   });