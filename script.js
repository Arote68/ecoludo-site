// Configuration de la galerie
const galleryImages = [
    {
        src: 'images/maquette1.jpg',
        alt: 'Vue d\'ensemble de la maquette EcoLudo',
        description: 'Vue panoramique du complexe sportif'
    },
    {
        src: 'images/maquette2.jpg',
        alt: 'Détail de la piste d\'athlétisme',
        description: 'La piste d\'athlétisme avec ses marquages'
    },
    {
        src: 'images/maquette3.jpg',
        alt: 'Structure principale',
        description: 'La structure principale du bâtiment'
    },
    {
        src: 'images/maquette4.jpg',
        alt: 'Vue aérienne',
        description: 'Vue aérienne du complexe'
    }
];

// Fonction pour créer la galerie
function createGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Ajustement pour la barre de navigation fixe
                behavior: 'smooth'
            });
        }
    });
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    createGallery();
    handleScroll(); // Vérification initiale
    
    // Écouteur d'événement pour le défilement
    window.addEventListener('scroll', handleScroll);
});

// Animation du menu mobile
const menuButton = document.createElement('button');
menuButton.className = 'menu-button';
menuButton.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('.nav').appendChild(menuButton);

menuButton.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    menuButton.classList.toggle('active');
}); 