const lines = document.querySelectorAll('.text-line');
let currentIndex = 0;

function showNextLine() {
    lines[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % lines.length;
    lines[currentIndex].classList.add('active');
}

setInterval(showNextLine, 2000);

// Inicializar el primer texto
lines[currentIndex].classList.add('active');
