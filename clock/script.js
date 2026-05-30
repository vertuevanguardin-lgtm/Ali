// Default timezone cities
const defaultTimezones = [
    { city: 'New York', timezone: 'America/New_York' },
    { city: 'London', timezone: 'Europe/London' },
    { city: 'Paris', timezone: 'Europe/Paris' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { city: 'Sydney', timezone: 'Australia/Sydney' },
    { city: 'Dubai', timezone: 'Asia/Dubai' }
];

// Function to format time for a specific timezone (HH:MM:SS)
function getTimeInTimezone(timezone) {
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        return formatter.format(new Date());
    } catch (error) {
        console.error(`Invalid timezone: ${timezone}`);
        return '--:--:--';
    }
}

// Function to get date in specific timezone
function getDateInTimezone(timezone) {
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        return formatter.format(new Date());
    } catch (error) {
        return 'Invalid timezone';
    }
}

// Function to get timezone offset
function getTimezoneOffset(timezone) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    const parts = formatter.formatToParts(now);
    const tzDate = new Date(
        parts.find(p => p.type === 'year').value,
        parseInt(parts.find(p => p.type === 'month').value) - 1,
        parts.find(p => p.type === 'day').value,
        parts.find(p => p.type === 'hour').value,
        parts.find(p => p.type === 'minute').value,
        parts.find(p => p.type === 'second').value
    );
    
    const offset = (now - tzDate) / 1000 / 60 / 60;
    const sign = offset >= 0 ? '+' : '-';
    const hours = Math.abs(Math.floor(offset));
    const minutes = Math.abs((offset - Math.floor(offset)) * 60);
    return `UTC${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

// Function to create a clock card
function createClockCard(city, timezone) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.innerHTML = `
        <div class="city-name">${city}</div>
        <div class="date-display" data-timezone="${timezone}">--</div>
        <div class="time-display" data-timezone="${timezone}">--:--:--</div>
        <div class="timezone-offset" data-offset="${timezone}">UTC+00:00</div>
    `;
    return card;
}

// Function to update all clocks
function updateAllClocks() {
    const timeDisplays = document.querySelectorAll('.time-display');
    const dateDisplays = document.querySelectorAll('.date-display');
    const offsets = document.querySelectorAll('.timezone-offset');
    
    timeDisplays.forEach(display => {
        const timezone = display.dataset.timezone;
        display.textContent = getTimeInTimezone(timezone);
    });
    
    dateDisplays.forEach(display => {
        const timezone = display.dataset.timezone;
        display.textContent = getDateInTimezone(timezone);
    });
    
    offsets.forEach(offset => {
        const timezone = offset.dataset.offset;
        offset.textContent = getTimezoneOffset(timezone);
    });
}

// Function to initialize the clock
function initializeClock() {
    const clocksGrid = document.getElementById('clocksGrid');
    clocksGrid.innerHTML = '';
    
    defaultTimezones.forEach(({ city, timezone }) => {
        const card = createClockCard(city, timezone);
        clocksGrid.appendChild(card);
    });
    
    // Initial update
    updateAllClocks();
    
    // Update every second
    setInterval(updateAllClocks, 1000);
}

// Add custom timezone functionality
function addCustomTimezone() {
    const city = prompt('Enter city name:');
    if (!city) return;
    
    const timezone = prompt('Enter timezone (e.g., America/Los_Angeles):');
    if (!timezone) return;
    
    // Test if timezone is valid
    if (getTimeInTimezone(timezone) === '--:--:--') {
        alert('Invalid timezone. Please use IANA timezone format.');
        return;
    }
    
    defaultTimezones.push({ city, timezone });
    initializeClock();
    alert(`${city} added successfully!`);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeClock);
} else {
    initializeClock();
}