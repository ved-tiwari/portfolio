function toggleDetails(id, element) {
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        element.classList.add("expanded");
    } else {
        details.style.display = "none";
        element.classList.remove("expanded");
    }
}
