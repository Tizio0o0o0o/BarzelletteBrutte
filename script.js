function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.width === '250px') {
        sideMenu.style.width = '0';
    } else {
        sideMenu.style.width = '250px';
    }
}

async function readTextFile(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const text = await response.text();
        return text.split('\n');
    } catch (error) {
        console.error('Error fetching the file:', error);
        return [];
    }
}

async function showMessage() {
    const phrases = await readTextFile('barzellette.txt');
    if (phrases.length === 0) {
        document.getElementById('message').textContent = 'Errore nel caricamento delle barzellette.';
        document.getElementById('message').style.display = 'block';
        return;
    }
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const message = phrases[randomIndex].trim();

    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.display = 'block';
}