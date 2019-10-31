function hide(id) {
  var head;
  if (document.getElementById(id).style.visibility == "visible") {
    document.getElementById(id).style.visibility = "hidden";
    head = id + "_head";
    document.getElementById(head).style.visibility = "visible";
  } else {
    document.getElementById(id).style.visibility = "visible";
  }
}
