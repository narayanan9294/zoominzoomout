function doZoomIn() {
  var image = document.getElementById("jsimage");
  var eHeight = image.style.height;
  var eWidth = image.style.width;
  if (parseInt(eHeight) < 500) {
    var nHeight = parseInt(eHeight) + 50 + "px";
    var nWidth = parseInt(eWidth) + 50 + "px";

    image.style.height = nHeight;
    image.style.width = nWidth;
  } else {
    alert("You have reached maximum ZoomIn");
    button.style.backgroundColor = "red";
  }
}

function doZoomOut() {
  var image = document.getElementById("jsimage");
  var eHeight = image.style.height;
  var eWidth = image.style.width;
  if (parseInt(eHeight) > 100) {
    var nHeight = parseInt(eHeight) - 50 + "px";
    var nWidth = parseInt(eWidth) - 50 + "px";

    image.style.height = nHeight;
    image.style.width = nWidth;
  } else {
    alert("You have reached maximum ZoomOut");
  }
}

function gobackof() {
  window.history.back();
}
