document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search');

    searchBtn.addEventListener('click', () => {
        // Make AJAX request to superheroes.php
        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data); // Show the result in an alert box
            })
            .catch(error => {
                alert('Error fetching data: ' + error);
            });
    });
});
