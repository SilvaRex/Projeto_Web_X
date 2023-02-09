function filterSelection(filter) {
    var items = document.getElementsByClassName("filter-item");
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
      if (filter === "all") {
        items[i].style.display = "block";
      } else if (items[i].classList.contains(filter)) {
        items[i].style.display = "block";
      }
    }
  }
  
  // Add active class to the current control button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }