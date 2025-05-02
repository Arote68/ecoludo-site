// Configuration de la galerie
const galleryImages = [
    {
        src: 'images/etape1.jpg',
        alt: 'Vue de la maquette - Première étape',
        description: 'Début de la construction de la maquette avec la base verte'
    },
    {
        src: 'images/etape2.jpg',
        alt: 'Vue aérienne de la maquette',
        description: 'Vue d\'ensemble avec le pont et l\'environnement'
    },
    {
        src: 'images/etape3.jpg',
        alt: 'Détail de la structure bleue',
        description: 'Structure principale du pont en bleu'
    },
    {
        src: 'images/final.jpg',
        alt: 'Vue finale de la maquette',
        description: 'Vue d\'ensemble de la maquette terminée'
    },
    {
        src: 'images/hero-bg.jpg',
        alt: 'Image de fond héroïque',
        description: 'Vue panoramique du projet'
    },
    {
        src: 'images/maquette2.jpg',
        alt: 'Détails de la maquette',
        description: 'Vue rapprochée des détails de construction'
    },
    {
        src: 'images/maquette3.jpg',
        alt: 'Vue latérale de la maquette',
        description: 'Perspective latérale du pont'
    },
    {
        src: 'images/maquette6.jpg',
        alt: 'Vue d\'ensemble supplémentaire',
        description: 'Autre angle de la maquette'
    },
    {
        src: 'images/maquette7.jpg',
        alt: 'Détail final',
        description: 'Détails des finitions de la maquette'
    }
];

// Fonction pour créer la galerie
function createGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = ''; // Nettoie la galerie existante
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        
        const description = document.createElement('div');
        description.className = 'gallery-description';
        description.textContent = image.description;
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(description);
        galleryGrid.appendChild(galleryItem);
    });
}

// Animation au défilement
function handleScroll() {
    const elements = document.querySelectorAll('.feature, .timeline-item, .gallery-item');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Si l'élément est visible dans la fenêtre
        if(position.top < window.innerHeight * 0.75) {
            element.classList.add('visible');
        }
    });
}

// Navigation fluide
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Menu mobile
function initMobileMenu() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(menuButton);

    menuButton.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
        menuButton.classList.toggle('active');
    });

    // Fermeture du menu au clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('active');
            menuButton.classList.remove('active');
        });
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    createGallery();
    handleScroll();
    initSmoothScroll();
    initMobileMenu();
    
    window.addEventListener('scroll', handleScroll);
}); 