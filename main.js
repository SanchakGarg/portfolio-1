// A juggad solution to opening and closing side nav bar
var sideNav = document.getElementById("sideNav");
var logo = document.getElementById("logo");
var toogleBtn = document.getElementById("toogleBtn");

function openNav() {
  sideNav.style.display = "flex";
  logo.style.visibility = "none";
  toogleBtn.style.display = "none";
}

function closeNav() {
  sideNav.style.display = "none";
  logo.style.display = "block";
  if (screen.width > 992) {
    toogleBtn.style.display = "none";
  }
  toogleBtn.style.display = "block";
}

document.addEventListener("click", function (e) {
  var a = e.target.classList != "sideNav";
  console.log(a);
  var b = !e.target.classList.contains("fa-solid");
  // console.log(b.contains("fa-solid"));
  if (a && b) {
    closeNav();
  }
});

// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");

// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}
