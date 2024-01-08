export async function createNavbar() {
    const menuContainer = document.getElementById('mobile-nav');
    const svgFiles = ['index.svg', 'slopes.svg', 'weather.svg', 'webcams.svg'];

    const navList = document.createElement('ul');
    menuContainer.appendChild(navList);

    for (const file of svgFiles) {
        try {
            const baseName = file.split('.')[0];
            const svgContent = await fetch(`/assets/icons/menu/${file}`).then(res => res.text());

            const listItem = document.createElement('li');
            const button = document.createElement('button');
            button.innerHTML = svgContent;
            button.setAttribute('aria-label', baseName);
            button.onclick = () => location.href = `${baseName}.html`;

            listItem.appendChild(button);
            navList.appendChild(listItem);
        } catch (error) {
            console.error('Error loading SVG:', error);
        }
    }
}
