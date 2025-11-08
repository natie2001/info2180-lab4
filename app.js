document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search');
  const resultDiv = document.getElementById('result');
  const resultTitle = document.getElementById('result-title');
  const searchField = document.getElementById('searchField');

  searchBtn.addEventListener('click', () => {
    const query = searchField.value.trim();
    const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : 'superheroes.php';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        resultTitle.style.display = 'block';
        if (data.length > 0) {
          resultDiv.innerHTML = '';
          data.forEach(hero => {
            resultDiv.innerHTML += `
              <div class="hero-card">
                <h4>${hero.name}</h4>
                <h3>AKA: ${hero.alias}</h3>
                <p>${hero.biography}</p>
              </div>
            `;
          });
        } else {
          resultDiv.innerHTML = `<p class="not-found">SUPERHERO NOT FOUND</p>`;
        }
        resultDiv.style.display = 'block';
      })
      .catch(error => {
        resultDiv.innerHTML = `<p style="color:red;">Error fetching data: ${error}</p>`;
        resultDiv.style.display = 'block';
      });
  });

  // Optional: Enter key triggers search
  searchField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') searchBtn.click();
  });
});