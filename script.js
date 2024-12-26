function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.width === '250px') {
        sideMenu.style.width = '0';
    } else {
        sideMenu.style.width = '250px';
    }
}

// Legge un file di testo e restituisce un array di frasi
async function readTextFile(file) {
    try {
        // Effettua una richiesta per ottenere il file
        const response = await fetch(file);
        if (!response.ok) {
            // Se la risposta non è ok, lancia un errore
            throw new Error('Network response was not ok');
        }
        // Legge il contenuto del file come testo
        const text = await response.text();
        // Divide il testo in un array di frasi, separando per ogni nuova linea
        return text.split('\n');
    } catch (error) {
        // Gestisce eventuali errori durante il fetch del file
        console.error('Error fetching the file:', error);
        return [];
    }
}

// Mostra un messaggio casuale dal file 'barzellette.txt'
async function showMessage() {
    // Legge le frasi dal file 'barzellette.txt'
    const phrases = await readTextFile('barzellette.txt');
    if (phrases.length === 0) {
        // Se non ci sono frasi, mostra un messaggio di errore
        document.getElementById('message').textContent = 'Errore nel caricamento delle barzellette.';
        document.getElementById('message').style.display = 'block';
        return;
    }
    // Seleziona un indice casuale dall'array di frasi
    const randomIndex = Math.floor(Math.random() * phrases.length);
    // Prende la frase corrispondente all'indice casuale e rimuove eventuali spazi bianchi
    const message = phrases[randomIndex].trim();

    // Mostra la frase selezionata nell'elemento con id 'message'
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.display = 'block';
}