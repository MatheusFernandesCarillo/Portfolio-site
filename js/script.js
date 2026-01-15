// Menu Toggle for Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current page in navigation
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filterValue = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const checkVisibility = () => {
        fadeElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    // Add subtle parallax effect to hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            if (name && email && message) {
                alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }

/* ==========================================
       ZOOM NAS IMAGENS (VERSÃO SEM PULO)
       ========================================== */
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgExpanded");

    if (modal && modalImg) {
        document.querySelectorAll('.dashboard-visual img').forEach(img => {
            img.onclick = function() {
                // MUITO IMPORTANTE: mudar para 'flex'
                modal.style.display = "flex"; 
                modalImg.src = this.src;
                document.body.style.overflow = "hidden";
            }
        });

        // Clique no fundo fecha
        modal.onclick = function(e) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };

        // Clique na imagem NÃO fecha
        modalImg.onclick = function(e) {
            e.stopPropagation();
        };

        const closeModal = document.querySelector('.close-modal');
        if (closeModal) {
            closeModal.onclick = function() {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            };
        }
    }
});
