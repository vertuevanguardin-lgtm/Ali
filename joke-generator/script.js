let currentJoke = '';
let jokeHistory = [];
let selectedJokeType = 'random';

// API endpoints for different joke sources
const JOKE_APIS = {
    random: 'https://official-joke-api.appspot.com/random_joke',
    general: 'https://official-joke-api.appspot.com/jokes/general/random',
    programming: 'https://official-joke-api.appspot.com/jokes/programming/random',
    'knock-knock': 'https://official-joke-api.appspot.com/jokes/knock-knock/random'
};

// Function to fetch and display a joke
async function getJoke() {
    const loadingDiv = document.getElementById('loading');
    const jokeDisplay = document.getElementById('jokeDisplay');
    const buttons = document.querySelectorAll('.btn');
    
    // Show loading state
    loadingDiv.style.display = 'block';
    buttons.forEach(btn => btn.disabled = true);
    
    try {
        const apiUrl = JOKE_APIS[selectedJokeType] || JOKE_APIS.random;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }
        
        const data = await response.json();
        
        // Format the joke
        if (data.setup && data.punchline) {
            currentJoke = `${data.setup}\n\n${data.punchline}`;
        } else if (data.joke) {
            currentJoke = data.joke;
        } else {
            currentJoke = 'Could not load joke. Please try again!';
        }
        
        // Display the joke
        jokeDisplay.innerHTML = `<p>${currentJoke.replace(/\n/g, '<br>')}</p>`;
        
        // Add to history
        addToHistory(currentJoke);
        
    } catch (error) {
        console.error('Error fetching joke:', error);
        currentJoke = '😞 Oops! Could not load a joke. Please check your internet connection and try again.';
        jokeDisplay.innerHTML = `<p>${currentJoke}</p>`;
    } finally {
        // Hide loading state
        loadingDiv.style.display = 'none';
        buttons.forEach(btn => btn.disabled = false);
    }
}

// Function to add joke to history
function addToHistory(joke) {
    if (jokeHistory.length >= 10) {
        jokeHistory.pop();
    }
    jokeHistory.unshift(joke);
    updateHistoryDisplay();
}

// Function to update history display
function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    
    if (jokeHistory.length === 0) {
        historyList.innerHTML = '<li class="empty">No jokes yet. Get started!</li>';
        return;
    }
    
    jokeHistory.forEach((joke, index) => {
        const li = document.createElement('li');
        const shortJoke = joke.substring(0, 50) + (joke.length > 50 ? '...' : '');
        li.textContent = shortJoke;
        li.title = joke;
        li.onclick = () => displayJokeFromHistory(joke);
        historyList.appendChild(li);
    });
}

// Function to display a joke from history
function displayJokeFromHistory(joke) {
    currentJoke = joke;
    const jokeDisplay = document.getElementById('jokeDisplay');
    jokeDisplay.innerHTML = `<p>${currentJoke.replace(/\n/g, '<br>')}</p>`;
}

// Function to share the joke
function shareJoke() {
    if (!currentJoke) {
        alert('Get a joke first!');
        return;
    }
    
    const text = `Check out this joke: ${currentJoke}`;
    
    if (navigator.share) {
        navigator.share({
            title: '😂 Check out this joke!',
            text: currentJoke
        }).catch(err => console.log('Share failed:', err));
    } else {
        // Fallback: Copy to clipboard
        copyToClipboard();
        alert('Joke copied to clipboard! (Share API not available on this device)');
    }
}

// Function to copy joke to clipboard
function copyToClipboard() {
    if (!currentJoke) {
        alert('Get a joke first!');
        return;
    }
    
    const textArea = document.createElement('textarea');
    textArea.value = currentJoke;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert('Joke copied to clipboard!');
    } catch (err) {
        alert('Failed to copy joke');
    }
    
    document.body.removeChild(textArea);
}

// Function to update joke type
function updateJokeType() {
    selectedJokeType = document.getElementById('jokeType').value;
}

// Initialize on page load
window.addEventListener('load', () => {
    updateHistoryDisplay();
});
