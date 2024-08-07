// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('share-button');
    const embedModal = document.getElementById('embed-modal');
    const closeModal = document.getElementById('close-modal');
    const generateEmbed = document.getElementById('generate-embed');
    const embedCode = document.getElementById('embed-code');

    shareButton.addEventListener('click', () => {
        embedModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        embedModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === embedModal) {
            embedModal.style.display = 'none';
        }
    });

    generateEmbed.addEventListener('click', () => {
        const autoplay = document.getElementById('autoplay').checked ? 1 : 0;
        const controls = document.getElementById('controls').checked ? 1 : 0;
        const size = document.getElementById('size').value;
        const [width, height] = size.split('x');

        const iframeCode = `<iframe width="${width}" height="${height}" src="video.mp4?autoplay=${autoplay}&controls=${controls}" frameborder="0" allowfullscreen></iframe>`;
        embedCode.value = iframeCode;
    });
});
