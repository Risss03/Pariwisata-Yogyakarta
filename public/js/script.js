function debounce(func, wait) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

document.addEventListener('DOMContentLoaded', () => {
    
    const pariwisataList = document.getElementById('pariwisata-list');
    const searchInput = document.getElementById('searchInput');

    function createCard (pariwisata) {
        const card = document.createElement('div');
                card.classList.add('card');

                const title = document.createElement('h2');
                title.textContent = pariwisata.judul;

                const image = document.createElement('img');
                image.alt = pariwisata.judul;
                image.src = `/uploads/${pariwisata.gambar}`;
                image.style.maxWidth = '100%';

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const description = document.createElement('p');
                description.textContent = pariwisata.deskripsi;

                const readMoreLink = document.createElement('a');
                readMoreLink.href = `/pariwisata/${pariwisata.id}`;
                readMoreLink.textContent = 'Read more';

                card.appendChild(title);

                card.appendChild(image);
                card.appendChild(description);
                cardBody.appendChild(readMoreLink);
                card.appendChild(cardBody);
                return card;
    }

    function fetchPariwisata(searchTerm) {
        fetch(searchTerm? `/api/pariwisata?search=${searchTerm}` : '/api/pariwisata')
        .then(response => response.json())
        .then(data => {
            console.log("data", data);
            pariwisataList.innerHTML = '';
            data.forEach(pariwisata => {
                pariwisataList.appendChild(createCard(pariwisata));
            });
        });
    }

    fetchPariwisata();
    
    searchInput.addEventListener('input', debounce(debounce(() => {
        const searchTerm = searchInput.value.trim();
        fetchPariwisata(searchTerm);
      }, 500)));
    
});