var flag = 1;
var x = document.getElementById("main");
function openNav() {
  document.getElementById("mySidebar").style.width = "15%";
  document.getElementById("body").style.width = "85%";
  document.getElementById("body").style.marginLeft = "15%";
  document.getElementById("nvarbar").style.width = "85%";
  document.getElementById("nvarbar").style.marginLeft = "15%";
  document.getElementById("footer-info").style.width = "85%";
  document.getElementById("footer-info").style.marginLeft = "15%";
  x.style.display = "none";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("body").style.width = "100%";
  document.getElementById("body").style.marginLeft = "0";
  document.getElementById("nvarbar").style.width = "100%";
  document.getElementById("nvarbar").style.marginLeft = "0%";
  document.getElementById("footer-info").style.width = "100%";
  document.getElementById("footer-info").style.marginLeft = "0%";
  x.style.display = "block";
}
function changnavbar(pageName,name) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("recent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style='border-bottom: none';
  }
  document.getElementById(pageName).style.display = "block";
  document.getElementById(name).style='border-bottom: 2px solid';
}
document.getElementById("recent").click();
