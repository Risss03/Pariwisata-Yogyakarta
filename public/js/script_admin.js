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
  
      function filterPariwisataList(pariwisata) {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = `/uploads/${pariwisata.gambar}`;
        image.alt = pariwisata.judul;
        image.style.maxWidth = '100%';
        image.classList.add('gambar-pariwisata');
    

        const title = document.createElement('h2');
        title.textContent = pariwisata.judul;

        const description = document.createElement('p');
        description.textContent = pariwisata.deskripsi;

        
        const cardActions = document.createElement('div');
        cardActions.classList.add('card-actions');

        const editLink = document.createElement('a');
        editLink.href = `/admin/pariwisata/${pariwisata.id}/edit`;
        editLink.textContent = 'Update';
        editLink.classList.add('btn-warning');
        

        const deleteLink = document.createElement('a');
        deleteLink.href = `/admin/pariwisata/${pariwisata.id}/delete`;
        deleteLink.textContent = 'Delete';
        deleteLink.classList.add('btn-delete');
        
        const readMoreLink = document.createElement('a');
        readMoreLink.href = `/pariwisata/${pariwisata.id}`;
        readMoreLink.textContent = 'Lihat Detail';
        readMoreLink.classList.add('btn-secondary');

        card.appendChild(title);
        
        card.appendChild(image);
        card.appendChild(description);

        cardActions.appendChild(deleteLink);
        cardActions.appendChild(editLink);
        cardActions.appendChild(readMoreLink);

        card.appendChild(cardActions);
        return card;
      }

      function fetchPariwisata(searchTerm) {
        fetch(searchTerm? `/api/pariwisata?search=${searchTerm}` : '/api/pariwisata')
        .then(response => response.json())
        .then(data => {
            console.log("data", data);
            pariwisataList.innerHTML = '';
            data.forEach(pariwisata => {
                pariwisataList.appendChild(filterPariwisataList(pariwisata));
            });
        });
    }

    fetchPariwisata();
  
    searchInput.addEventListener('input', debounce(debounce(() => {
        const searchTerm = searchInput.value.trim();
        fetchPariwisata(searchTerm);
      }, 500)));
    }

      
  );
