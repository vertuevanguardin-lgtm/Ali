// Advanced timezone cities
let timezones = [
    { city: 'New York', timezone: 'America/New_York' },
    { city: 'London', timezone: 'Europe/London' },
    { city: 'Paris', timezone: 'Europe/Paris' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { city: 'Sydney', timezone: 'Australia/Sydney' },
    { city: 'Dubai', timezone: 'Asia/Dubai' }
];

let is24HourFormat = false;
let showAnalogClock = false;

// Function to get time in specific timezone
function getTimeInTimezone(timezone, use24Hour = false) {
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: !use24Hour
        });
        return formatter.format(new Date());
    } catch (error) {
        return '--:--:--';
    }
}

// Function to get date in specific timezone
function getDateInTimezone(timezone) {
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            weekday: 'short',
            year: 'numeric',
            month: 'short',
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

// Function to get time components for analog clock
function getTimeComponents(timezone) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    const parts = formatter.formatToParts(now);
    const hours = parseInt(parts.find(p => p.type === 'hour').value);
    const minutes = parseInt(parts.find(p => p.type === 'minute').value);
    const seconds = parseInt(parts.find(p => p.type === 'second').value);
    
    return { hours, minutes, seconds };
}

// Function to create digital clock card
function createDigitalClockCard(city, timezone) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.innerHTML = `
        <div class="city-name">${city}</div>
        <div class="digital-clock">
            <div class="time-display" data-timezone="${timezone}">--:--:--</div>
            <div class="date-display" data-date="${timezone}">--</div>
            <div class="timezone-offset" data-offset="${timezone}">UTC+00:00</div>
        </div>
    `;
    return card;
}

// Function to create analog clock card
function createAnalogClockCard(city, timezone) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.innerHTML = `
        <div class="city-name">${city}</div>
        <div class="analog-clock">
            <div class="clock-face" data-timezone="${timezone}">
                <div class="clock-numbers" id="numbers-${timezone}"></div>
                <div class="hand hour-hand" data-hand="hour" data-timezone="${timezone}"></div>
                <div class="hand minute-hand" data-hand="minute" data-timezone="${timezone}"></div>
                <div class="hand second-hand" data-hand="second" data-timezone="${timezone}"></div>
            </div>
            <div class="analog-info">
                <div class="analog-date" data-date="${timezone}">--</div>
                <div class="analog-offset" data-offset="${timezone}">UTC+00:00</div>
            </div>
        </div>
    `;
    return card;
}

// Function to initialize analog clock numbers
function initializeAnalogNumbers(timezone) {
    const numbersContainer = document.getElementById(`numbers-${timezone}`);
    if (!numbersContainer) return;
    
    numbersContainer.innerHTML = '';
    const numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    
    numbers.forEach((num, index) => {
        const angle = (index * 30);
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.style.transform = `rotate(${angle}deg) translateY(-85px) rotate(-${angle}deg)`;
        numberDiv.textContent = num;
        numbersContainer.appendChild(numberDiv);
    });
}

// Function to update analog clock hands
function updateAnalogClocks() {
    document.querySelectorAll('[data-hand]').forEach(hand => {
        const timezone = hand.dataset.timezone;
        const handType = hand.dataset.hand;
        const { hours, minutes, seconds } = getTimeComponents(timezone);
        
        let angle = 0;
        if (handType === 'hour') {
            angle = (hours % 12) * 30 + minutes * 0.5;
        } else if (handType === 'minute') {
            angle = minutes * 6 + seconds * 0.1;
        } else if (handType === 'second') {
            angle = seconds * 6;
        }
        
        hand.style.transform = `rotate(${angle}deg)`;
    });
}

// Function to update all clocks
function updateAllClocks() {
    // Update digital displays
    document.querySelectorAll('[data-timezone]').forEach(element => {
        const timezone = element.dataset.timezone;
        
        if (element.classList.contains('time-display')) {
            element.textContent = getTimeInTimezone(timezone, is24HourFormat);
        }
    });
    
    // Update dates
    document.querySelectorAll('[data-date]').forEach(element => {
        const timezone = element.dataset.date;
        element.textContent = getDateInTimezone(timezone);
    });
    
    // Update offsets
    document.querySelectorAll('[data-offset]').forEach(element => {
        const timezone = element.dataset.offset;
        element.textContent = getTimezoneOffset(timezone);
    });
    
    // Update analog clocks
    if (showAnalogClock) {
        updateAnalogClocks();
    }
}

// Function to initialize clocks
function initializeClocks() {
    const clocksGrid = document.getElementById('clocksGrid');
    clocksGrid.innerHTML = '';
    
    timezones.forEach(({ city, timezone }) => {
        const card = showAnalogClock 
            ? createAnalogClockCard(city, timezone)
            : createDigitalClockCard(city, timezone);
        clocksGrid.appendChild(card);
        
        if (showAnalogClock) {
            initializeAnalogNumbers(timezone);
        }
    });
    
    updateAllClocks();
}

// Function to toggle time format (12/24 hour)
function toggleTimeFormat() {
    is24HourFormat = document.getElementById('formatToggle').checked;
    updateAllClocks();
}

// Function to toggle clock view (digital/analog)
function toggleClockView() {
    showAnalogClock = document.getElementById('viewToggle').checked;
    initializeClocks();
}

// Function to add custom timezone
function addCustomTimezone() {
    const city = prompt('Enter city name:');
    if (!city) return;
    
    const timezone = prompt('Enter timezone (e.g., America/Los_Angeles):');
    if (!timezone) return;
    
    if (getTimeInTimezone(timezone) === '--:--:--') {
        alert('Invalid timezone. Please use IANA timezone format.');
        return;
    }
    
    timezones.push({ city, timezone });
    initializeClocks();
    alert(`${city} added successfully!`);
}

// Function to remove last timezone
function removeLastTimezone() {
    if (timezones.length <= 1) {
        alert('Cannot remove the last timezone!');
        return;
    }
    const removed = timezones.pop();
    initializeClocks();
    alert(`${removed.city} removed!`);
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeClocks();
        setInterval(updateAllClocks, 1000);
    });
} else {
    initializeClocks();
    setInterval(updateAllClocks, 1000);
}
