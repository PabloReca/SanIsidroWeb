export function initializeMarquee() {
    const marqueeContainer = document.getElementById('marquee-text');
    const marqueeData = ["27/32Km", "25/30 Pistas", "Soleado", "-4°C", "88% Humedad", "Nieve Polvo"];
    const marqueeSpeed = 2; // Speed

    let marqueeContent = '';
    marqueeData.forEach((item, index) => {
        marqueeContent += `<span>${item}</span>`;
        if (index < marqueeData.length - 1) {
            marqueeContent += ' • ';
        }
    });
    marqueeContainer.innerHTML = marqueeContent;

    const updateMarqueeWidth = () => {
        const clone = marqueeContainer.cloneNode(true);
        clone.style.visibility = 'hidden';
        clone.style.position = 'absolute';
        document.body.appendChild(clone);
        const width = clone.offsetWidth;
        document.body.removeChild(clone);
        return width;
    };

    let marqueeWidth = updateMarqueeWidth();
    let posX = window.innerWidth;

    const updateMarquee = () => {
        posX -= marqueeSpeed;
        if (-posX >= marqueeWidth) {
            posX = window.innerWidth;
        }
        marqueeContainer.style.transform = `translateX(${posX}px)`;
        requestAnimationFrame(updateMarquee);
    };

    updateMarquee();

    window.addEventListener('resize', () => {
        marqueeWidth = updateMarqueeWidth();
        posX = window.innerWidth;
    });
}
