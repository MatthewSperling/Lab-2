document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();

    var yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var alertButton = document.getElementById('btn-alert');
    alertButton.addEventListener('click', function() {
        alert("Hello world!");
    });
});

