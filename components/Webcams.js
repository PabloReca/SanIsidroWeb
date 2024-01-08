const webcams = ['cebolledo.jpeg','salencias.jpeg','riopinos.jpeg', 'requejines.jpeg'];

function formatTitle(filename) {
    return filename
        .replace(/-/g, ' ')
        .replace(/\..+$/, '')
        .replace(/^\w/, c => c.toUpperCase());
}

function createWebcamsHTML(webcams) {
    return webcams.map(webcam => {
        const title = formatTitle(webcam);
        return `
        <div class="webcam-card">
            <div class="card-title">
                <h2>${title}</h2>
            </div>
            <div class="card-image">
                <img src="assets/webcams/${webcam}" alt="${title}">
            </div>
        </div>
        `;
    }).join('');
}

export function initializeWebcams() {
    document.querySelector('#webcam-group').innerHTML = createWebcamsHTML(webcams);
}
