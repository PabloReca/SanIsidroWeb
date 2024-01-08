export async function createNavbar() {
    const menuContainer = document.getElementById('mobile-menu');
    const svgFiles = ['index.svg', 'slopes.svg', 'weather.svg', 'webcams.svg'];

    for (const file of svgFiles) {
        try {
            const baseName = file.split('.')[0];
            const svgContent = await fetch(`/assets/icons/menu/${file}`).then(res => res.text());
            // Aquí agregamos un enlace que apunta a la página correspondiente.
            menuContainer.innerHTML += `<a href="${baseName}.html"><button><span id="${baseName}-icon">${svgContent}</span></button></a>`;
        } catch (error) {
            console.error('Error loading SVG:', error);
        }
    }
}
