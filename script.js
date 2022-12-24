var flag = 1;
var x = document.getElementById("main");
function openNav() {
  document.getElementById("mySidebar").style.width = "13rem";
  document.getElementById("body").style.width = "86%";
  document.getElementById("body").style.marginLeft = "13rem";
  x.style.display = "none";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("body").style.width = "100%";
  document.getElementById("body").style.marginLeft = "0";
  x.style.display = "block";
}
