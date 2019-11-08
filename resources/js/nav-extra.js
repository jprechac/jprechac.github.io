function offsetNavHeight() {
    let navHeight = document.getElementById("nav").offsetHeight * 1.1;
    navheight = Math.ceil(navHeight).toString();
    document.body.style.marginTop = navHeight + "px";
};