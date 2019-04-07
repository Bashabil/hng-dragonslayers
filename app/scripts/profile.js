var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function btnColor() {
    var property = document.querySelector(".button");
        if (property.className !== 'toggled') {
            property.className = 'toggled'
        }
        else {
            property.style.backgroundColor = "rgb(244,113,33)";
            property.className = '';
        }
    }