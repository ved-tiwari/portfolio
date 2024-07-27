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

function toggleResume() {
    var pdfViewer = document.getElementById("pdfViewer");
    var showButton = document.querySelector(".show-resume-button");

    if (pdfViewer.style.display === "none" || pdfViewer.style.display === "") {
        pdfViewer.style.display = "block";
        showButton.textContent = "Hide Resume";
    } else {
        pdfViewer.style.display = "none";
        showButton.textContent = "Show Resume";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var fadeInElements = document.querySelectorAll('.fade-in');

    function handleScroll() {
        fadeInElements.forEach(function(element) {
            var rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
