const sectors = [
    {
        name: "Sector Cebolledo",
        slopes: [
            { name: "Debutantes Cebolledo", status: "cerrada" },
            { name: "La Travesia", status: "abierta" },
            { name: "El Circo", status: "abierta" },
            { name: "Gran Cañón", status: "abierta" },
            { name: "La Collada", status: "cerrada" },
            { name: "La Solana", status: "cerrada" }
        ]
    },
    {
        name: "Sector Requejines",
        slopes: [
            { name: "Cinta El Rebeco", status: "abierta" },
            { name: "Respin", status: "abierta" },
            { name: "El Silencio", status: "abierta" }
        ]
    },
    {
        name: "Sector Riopinos",
        slopes: [
            { name: "Debutantes Riopinos", status: "abierta" },
            { name: "Del Oso", status: "abierta" },
            { name: "Cureño", status: "abierta" },
            { name: "El Valle", status: "abierta" },
            { name: "Vergarada Express", status: "abierta" },
            { name: "Peñalverales", status: "abierta" },
            { name: "Los Cazadores", status: "abierta" }
        ]
    }
];

function createHTMLSectors(sectors) {
    return sectors.map(sector => {
        const slopesHTML = sector.slopes.map(slope => `
        <div class="slope">
            <p>${slope.name}</p>
            <span>${slope.status === "abierta" ? '✅' : '❌'}</span>
        </div>
        `).join('');

        return `
        <div class="sector-card">
            <div class="card-title">
                <h2>${sector.name}</h2>
            </div>
            <div class="card-content">
                ${slopesHTML}
            </div>
        </div>
        `;
    }).join('');
}

export function initializeSlopes() {
    document.querySelector('#slope-group').innerHTML = createHTMLSectors(sectors);
}
