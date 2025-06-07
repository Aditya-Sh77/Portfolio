function toggleDropdown(button) {
    const dropdown = button.nextElementSibling;
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

/*
document.addEventListener("scroll", changeColour);
function changeColour(){
  let i = 0;
  while(i<10){
    var co = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByTagName("h3")[0].style.color = "#"+co;
    i++;
  }
}*/

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
