var path = window.location.pathname;
// Get the <a> element corresponding to the current page and add the "active" class
if (path === "/") {
    document.getElementById("home").classList.add("active");
} else if (path === "/design.html") {
    document.getElementById("design").classList.add("active");
} else if (path === "/references.html") {
    document.getElementById("references").classList.add("active");
}