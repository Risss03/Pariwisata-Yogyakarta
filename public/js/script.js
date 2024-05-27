document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/pariwisata')
        .then(response => response.json())
        .then(data => {
            const pariwisataList = document.getElementById('pariwisata-list');
            data.forEach(pariwisata => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <h2>${pariwisata.judul}</h2>
                    <img src="/uploads/${pariwisata.gambar}" alt="${pariwisata.judul}" style="max-width: 300px;">
                    <p>${pariwisata.deskripsi}</p>
                    <a href="/pariwisata/${pariwisata.id}">Read more</a>
                `;
                pariwisataList.appendChild(div);
            });
        });
});
