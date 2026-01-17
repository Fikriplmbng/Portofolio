document.addEventListener('DOMContentLoaded', () => {
    // timeline
    const textModal = document.getElementById("textModal");
    const timelineItems = document.querySelectorAll(".clickable-item");
    const modalBody = document.getElementById("modalBody");
    const closeTextBtn = document.querySelector(".close-text");

    if (timelineItems.length > 0 && textModal) {
        timelineItems.forEach(item => {
            item.addEventListener('click', function() {
                const hiddenContent = this.querySelector(".detail-content");
                if (hiddenContent) {
                    modalBody.innerHTML = hiddenContent.innerHTML;
                    textModal.style.display = "block";
                }
            });
        });
    // cls btn
        if (closeTextBtn) {
            closeTextBtn.onclick = function() {
                textModal.style.display = "none";
            }
        }
        window.onclick = function(event) {
            if (event.target == textModal) {
                textModal.style.display = "none";
            }
            if (event.target == document.getElementById("imageModal")) {
                document.getElementById("imageModal").style.display = "none";
            }
        }
    }
    
// burger
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
    }
// Form validasi
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;

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
                alert('Terima kasih! Pesan Anda telah terkirim (Yang baca Gay).');
                contactForm.reset();
            }
        });
    }
// carousel nih
const track = document.querySelector('.carousel-track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

function getGap() {
    const style = window.getComputedStyle(track);
    return parseFloat(style.gap) || 0; 
}

if (track && nextBtn && prevBtn) {
    let isAnimating = false;

    nextBtn.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        const firstCard = track.firstElementChild;
        const cardWidth = firstCard.getBoundingClientRect().width;
        const currentGap = getGap(); 
        const slideAmount = cardWidth + currentGap;
        
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
        const currentGap = getGap(); 
        const slideAmount = cardWidth + currentGap;

        track.style.transition = "none";
        track.prepend(lastCard);
        track.style.transform = `translateX(-${slideAmount}px)`;
        
        void track.offsetWidth;

        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = "translateX(0)";

        setTimeout(() => { isAnimating = false; }, 500);
    });
}
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


var modal = document.getElementById("imageModal");

var modalImg = document.getElementById("imgPreview");

var images = document.querySelectorAll(".trigger-img");

images.forEach(function(img) {
  img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

modal.addEventListener("click", function(e) {
    if (e.target !== modalImg) {
        modal.style.display = "none";
    }
});
document.addEventListener('DOMContentLoaded', () => {
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

// modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgPreview");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
    const images = document.querySelectorAll(".cert-img");

    if (images.length > 0) {
        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src; 
                captionText.innerHTML = this.alt; 
            });
        });
    }
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');

            burger.classList.toggle('toggle');
        });
    }

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgPreview");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
    const images = document.querySelectorAll(".cert-img");

    if (images.length > 0) {
        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src; 
                captionText.innerHTML = this.alt; 
            });
        });
    }
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


});

