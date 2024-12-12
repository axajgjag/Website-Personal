var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.clients-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector('.about');
    
    function handleScroll() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (sectionPosition < screenPosition) {
            aboutSection.classList.add('appear');
            window.removeEventListener("scroll", handleScroll); // Optional: Remove listener once animation is done
        }
    }

    window.addEventListener("scroll", handleScroll);
});


function playMusic() {
    console.log("Playing music");
    backgroundMusic.play();
}
const backgroundMusic = document.getElementById("backgroundMusic");

function playMusic() {
    backgroundMusic.play();
}

function pauseMusic() {
    backgroundMusic.pause();
}

function stopMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reset to start
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 2, // Tampilkan hanya 2 slide per baris
    spaceBetween: 10, // Jarak antar slide lebih kecil
    breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 }, // Jarak default
    },
});

