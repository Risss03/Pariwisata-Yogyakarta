document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/pariwisata')
        .then(response => response.json())
        .then(data => {
            const pariwisataList = document.getElementById('pariwisata-list');
            data.forEach(pariwisata => {
                const card = document.createElement('div');
                card.classList.add('card');

                const image = document.createElement('img');
                image.src = `/uploads/${pariwisata.gambar}`;
                image.alt = pariwisata.judul;
                image.style.maxWidth = '100%'; // Sesuaikan lebar gambar

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const title = document.createElement('h2');
                title.textContent = pariwisata.judul;

                const description = document.createElement('p');
                description.textContent = pariwisata.deskripsi;

                const readMoreLink = document.createElement('a');
                readMoreLink.href = `/pariwisata/${pariwisata.id}`;
                readMoreLink.textContent = 'Read more';

                cardBody.appendChild(title);
                cardBody.appendChild(description);
                cardBody.appendChild(readMoreLink);

                card.appendChild(image);
                card.appendChild(cardBody);

                pariwisataList.appendChild(card);
            });
        });
});
