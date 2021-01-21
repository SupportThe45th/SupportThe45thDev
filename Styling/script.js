var conf = document.getElementById("confirmation");

function submit() {
    conf.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == conf) {
      conf.style.display = "none";
    }
  }
