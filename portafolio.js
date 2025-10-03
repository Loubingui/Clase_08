//console.log("hola");

// portafolio.js

// Lista de trabajos
const trabajos = [
    {
        titulo: "Identidad Corporativa",
        categoria: "Branding",
        imagen: "images/1.png"
    },
    {
        titulo: "Diseño de Espacios",
        categoria: "Espacios",
        imagen: "images/3.png"
    },
    {
        titulo: "Packaging",
        categoria: "Product Design",
        imagen: "images/2.png"
    },
    {
        titulo: "Campaña Digital",
        categoria: "Marketing",
        imagen: "images/6.png"
    },
    {
        titulo: "Web Design",
        categoria: "Digital",
        imagen: "images/4.png"
    },
    {
        titulo: "Ilustración",
        categoria: "Illustration",
        imagen: "images/5.png"
    },
    {
        titulo: "App Design",
        categoria: "UX/UI",
        imagen: "images/10.png"
    },
    {
        titulo: "Poster Design",
        categoria: "Print",
        imagen: "images/7.png"
    },
    {
        titulo: "Logotipo",
        categoria: "Logo Design",
        imagen: "images/9.png"
    },
    {
        titulo: "Catálogo",
        categoria: "Editorial",
        imagen: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&h=500&fit=crop&crop=center"
    },
    {
        titulo: "Tipografía",
        categoria: "Typography",
        imagen: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop&crop=center"
    },
    {
        titulo: "Social Media",
        categoria: "Digital",
        imagen: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=500&h=500&fit=crop&crop=center"
    },
    {
        titulo: "Infografía",
        categoria: "Information Design",
        imagen: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=500&fit=crop&crop=center"
    },
    {
        titulo: "Packaging Tea",
        categoria: "Product Design",
        imagen: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop&crop=center"
    },
    {
        titulo: "Banner Design",
        categoria: "Advertising",
        imagen: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=500&fit=crop&crop=center"
    },
    {
        titulo: "Motion Graphics",
        categoria: "Animation",
        imagen: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=500&h=500&fit=crop&crop=center"
    }
];

// Selecciona el contenedor de la galería
const galleryGrid = document.querySelector('.gallery-grid');

// Genera dinámicamente los ítems de la galería
trabajos.forEach(trabajo => {
    const item = document.createElement('div');
    item.classList.add('gallery-item');

    item.innerHTML = `
        <img src="${trabajo.imagen}" alt="${trabajo.titulo}">
        <div class="gallery-overlay">
            <h3>${trabajo.titulo}</h3>
            <p>${trabajo.categoria}</p>
        </div>
    `;

    galleryGrid.appendChild(item);
});