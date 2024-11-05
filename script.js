document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for the header text
    const textElement = document.getElementById('typing-text');
    if (textElement) {
        const text = textElement.textContent;
        textElement.textContent = ''; // Clear the original text

        let index = 0;
        function type() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 150); // Typing speed (adjust as desired)
            }
        }

        type(); // Start the typing effect
    }

    // Theme toggle code
    const themeToggleCheckbox = document.getElementById("theme-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark" || (prefersDarkScheme && !currentTheme)) {
        document.body.classList.remove("light-theme");
        themeToggleCheckbox.checked = true;
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.add("light-theme");
        themeToggleCheckbox.checked = false;
        localStorage.setItem("theme", "light");
    }

    // Toggle theme on switch
    themeToggleCheckbox.addEventListener("change", () => {
        document.body.classList.toggle("light-theme");
        const theme = document.body.classList.contains("light-theme") ? "light" : "dark";
        localStorage.setItem("theme", theme);
    });

    // Fade-in animation logic
    const fadeInElements = document.querySelectorAll('.fade-in');

    function handleFadeIn() {
        fadeInElements.forEach(element => {
            element.classList.add('visible');
        });
    }

    // Immediately trigger fade-in after loading
    handleFadeIn();

    // Toggle experience details logic
    function toggleDetails(id, element) {
        const details = document.getElementById(id);
        if (details.style.display === "none" || details.style.display === "") {
            details.style.display = "block";
            element.classList.add("expanded");
        } else {
            details.style.display = "none";
            element.classList.remove("expanded");
        }
    }

    // Add event listeners for each experience item
    const experienceHeaders = document.querySelectorAll('.experience-item h3');
    experienceHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const detailsId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            toggleDetails(detailsId, this);
        });
    });
});
