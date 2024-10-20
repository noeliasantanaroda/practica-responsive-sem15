// Script para el carrusel de texto
const texts = [
    '...vestibulum mollis, tortor ac congue commodo',
    '...phasellus eleifend semper tempor',
    '...nulla hendrerit maximus ante'
];
let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    document.getElementById('carouselText').textContent = texts[currentIndex];
}, 2000);

// Script para la búsqueda en tiempo real
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const dummyData = ['Lorem ipsum dolor sit amet', 'Phasellus eleifend semper tempor', 'Nulla hendrerit maximus ante', 'Orci varius natoque penatibus'];

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';
    if (query) {
        const filteredData = dummyData.filter(item => item.toLowerCase().includes(query));
        if (filteredData.length > 0) {
            searchResults.style.display = 'block';
            filteredData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                searchResults.appendChild(li);
            });
        } else {
            searchResults.style.display = 'none';
        }
    } else {
        searchResults.style.display = 'none';
    }
});


