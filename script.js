// script.js

// Scroll smooth untuk semua anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Event untuk tombol Download GrowRushPS
document.getElementById('downloadBtn')?.addEventListener('click', () => {
    alert("📥 File GrowRushPS sedang diunduh...");
    window.location.href = "link-download-client.zip"; // Ganti dengan link download asli
});

// Event untuk tombol Join Discord
document.getElementById('discordBtn')?.addEventListener('click', () => {
    window.open("https://discord.gg/xxxxx", "_blank"); // Ganti dengan link Discord asli
});

// Animasi sederhana untuk fitur ketika muncul di layar
const features = document.querySelectorAll('.feature');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.5 });

features.forEach(feature => {
    observer.observe(feature);
});
