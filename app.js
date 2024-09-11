

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

const slides = document.querySelector('.carousel-slides');
const totalSlides = document.querySelectorAll('.carousel-slides img').length;
let slideIndex = 0;

function showSlide(index) {
    slideIndex = (index + totalSlides) % totalSlides;
    const offset = -slideIndex * 100 / totalSlides;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Avanza a la siguiente imagen al hacer clic en cualquier imagen
document.querySelectorAll('.carousel-slides img').forEach(img => {
    img.addEventListener('click', nextSlide);
});

// Cambio automático de imagen cada 10 segundos
let interval = setInterval(nextSlide, 10000); // Cambia cada 10 segundos

// Pausa el carrusel cuando el mouse está sobre él
document.querySelector('.carousel-container').addEventListener('mouseover', () => {
    clearInterval(interval);
});

// Reanuda el carrusel cuando el mouse sale
document.querySelector('.carousel-container').addEventListener('mouseout', () => {
    interval = setInterval(nextSlide, 10000);
});