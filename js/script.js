// D.1 Javascript Fitur Interaktif

document.addEventListener('DOMContentLoaded', () => {
    // --- 4. LOGIKA MODAL TIMELINE (TEXT) ---
    const textModal = document.getElementById("textModal");
    const timelineItems = document.querySelectorAll(".clickable-item");
    const modalBody = document.getElementById("modalBody");
    const closeTextBtn = document.querySelector(".close-text");

    if (timelineItems.length > 0 && textModal) {
        timelineItems.forEach(item => {
            item.addEventListener('click', function() {
                // 1. Cari konten rahasia di dalam item yang diklik
                const hiddenContent = this.querySelector(".detail-content");
                
                if (hiddenContent) {
                    // 2. Masukkan konten ke dalam modal
                    modalBody.innerHTML = hiddenContent.innerHTML;
                    
                    // 3. Tampilkan modal
                    textModal.style.display = "block";
                }
            });
        });

        // Fungsi tombol Close (X)
        if (closeTextBtn) {
            closeTextBtn.onclick = function() {
                textModal.style.display = "none";
            }
        }

        // Klik di luar modal untuk menutup
        window.onclick = function(event) {
            if (event.target == textModal) {
                textModal.style.display = "none";
            }
            // (Opsional) Biarkan ini tetap bekerja untuk modal gambar juga
            if (event.target == document.getElementById("imageModal")) {
                document.getElementById("imageModal").style.display = "none";
            }
        }
    }
    
    // 1. Menu Responsif (Hamburger Toggle)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    // 2. Validasi Form (Hanya berjalan di halaman kontak)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Mencegah submit default
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;

            // Simple Validation Logic
            if (name.value.trim() === '') {
                showError(name, 'Nama tidak boleh kosong');
                isValid = false;
            } else {
                clearError(name);
            }

            if (!isValidEmail(email.value)) {
                showError(email, 'Email tidak valid');
                isValid = false;
            } else {
                clearError(email);
            }

            if (message.value.trim().length < 10) {
                showError(message, 'Pesan minimal 10 karakter');
                isValid = false;
            } else {
                clearError(message);
            }

            if (isValid) {
                alert('Terima kasih! Pesan Anda telah terkirim (Simulasi).');
                contactForm.reset();
            }
        });
    }
    // --- 3. LOGIKA INFINITE CAROUSEL ---
    // --- 3. LOGIKA INFINITE CAROUSEL (REVISI GAP OTOMATIS) ---
const track = document.querySelector('.carousel-track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Fungsi untuk mendapatkan nilai Gap asli dari CSS
function getGap() {
    const style = window.getComputedStyle(track);
    // Mengambil nilai 'gap' (misal "20px") dan mengubahnya jadi angka (20)
    // Jika mobile (0px), dia akan otomatis jadi 0.
    return parseFloat(style.gap) || 0; 
}

if (track && nextBtn && prevBtn) {
    let isAnimating = false;

    nextBtn.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        const firstCard = track.firstElementChild;
        const cardWidth = firstCard.getBoundingClientRect().width;
        const currentGap = getGap(); // Hitung gap otomatis
        const slideAmount = cardWidth + currentGap;

        // Geser
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${slideAmount}px)`;

        setTimeout(() => {
            track.style.transition = "none";
            track.appendChild(firstCard);
            track.style.transform = "translateX(0)";
            
            setTimeout(() => { isAnimating = false; }, 50);
        }, 500);
    });

    prevBtn.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        const lastCard = track.lastElementChild;
        const cardWidth = lastCard.getBoundingClientRect().width;
        const currentGap = getGap(); // Hitung gap otomatis
        const slideAmount = cardWidth + currentGap;

        track.style.transition = "none";
        track.prepend(lastCard);
        track.style.transform = `translateX(-${slideAmount}px)`;

        // Force Reflow
        void track.offsetWidth;

        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = "translateX(0)";

        setTimeout(() => { isAnimating = false; }, 500);
    });
}
    // Helper functions
    function showError(input, msg) {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-msg');
        error.style.display = 'block';
        error.innerText = msg;
        input.style.borderColor = 'red';
    }

    function clearError(input) {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-msg');
        error.style.display = 'none';
        input.style.borderColor = '#ddd';
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

// card
// Ambil elemen modal
var modal = document.getElementById("imageModal");

// Ambil gambar di dalam modal untuk diisi nanti
var modalImg = document.getElementById("imgPreview");

// Ambil semua gambar yang punya class "trigger-img"
var images = document.querySelectorAll(".trigger-img");

// Loop setiap gambar agar bisa diklik
images.forEach(function(img) {
  img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src; // Masukkan gambar yang diklik ke modal
  });
});

// Ambil elemen tombol close
var span = document.getElementsByClassName("close")[0];

// Ketika tombol X diklik, tutup modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Opsional: Tutup modal jika user klik di area hitam (bukan di gambar)
modal.addEventListener("click", function(e) {
    if (e.target !== modalImg) {
        modal.style.display = "none";
    }
});
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LOGIKA UNTUK MENU BURGER (MOBILE) ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Burger Animation (Berubah jadi X)
            burger.classList.toggle('toggle');
        });
    }

    // --- 2. LOGIKA UNTUK MODAL PRESTASI (POPUP GAMBAR) ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgPreview");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
    
    // Ambil semua gambar yang punya class 'cert-img'
    const images = document.querySelectorAll(".cert-img");

    if (images.length > 0) {
        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src; // Ambil sumber gambar yang diklik
                captionText.innerHTML = this.alt; // Ambil teks alt sebagai caption
            });
        });
    }

    // Fungsi tombol Close (X)
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Klik di luar gambar untuk menutup modal (Opsional tapi bagus untuk UX)
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LOGIKA UNTUK MENU BURGER (MOBILE) ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Burger Animation (Berubah jadi X)
            burger.classList.toggle('toggle');
        });
    }

    // --- 2. LOGIKA UNTUK MODAL PRESTASI (POPUP GAMBAR) ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgPreview");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
    
    // Ambil semua gambar yang punya class 'cert-img'
    const images = document.querySelectorAll(".cert-img");

    if (images.length > 0) {
        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src; // Ambil sumber gambar yang diklik
                captionText.innerHTML = this.alt; // Ambil teks alt sebagai caption
            });
        });
    }

    // Fungsi tombol Close (X)
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Klik di luar gambar untuk menutup modal (Opsional tapi bagus untuk UX)
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});