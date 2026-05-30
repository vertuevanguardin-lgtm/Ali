# 🌍 Advanced World Clock - Digital & Analog

An advanced, fully-featured world clock with both digital and analog display modes. Real-time updates for multiple timezones with beautiful animations and smooth interactions.

## ✨ Features

### 🕐 Display Modes
- **Digital Clock**: Large, easy-to-read digital time display
- **Analog Clock**: Traditional clock faces with moving hands
- **Toggle Between Modes**: Switch views with one click

### ⏰ Time Format Options
- **12-Hour Format**: AM/PM display (default)
- **24-Hour Format**: Military time format
- **Toggle Control**: Easy switch between formats

### 🌍 Timezone Features
- **6 Pre-configured Cities**: New York, London, Paris, Tokyo, Sydney, Dubai
- **Real-time Updates**: Automatic updates every second
- **UTC Offset Display**: Shows timezone offset from UTC
- **Add Custom Timezones**: Add any IANA timezone
- **Remove Timezones**: Remove timezones you don't need
- **Full Date Display**: Shows weekday, month, day, and year

### 🎨 Design Features
- **Beautiful Gradient Background**: Purple gradient with modern styling
- **Smooth Animations**: Hover effects and transitions
- **Fully Responsive**: Works perfectly on all devices
- **Card Layout**: Easy-to-scan clock cards
- **Analog Hand Details**: Colored hands (hour, minute, second)

## 🚀 How to Use

1. **Open the Application**
   - Open `index.html` in your web browser
   - No server or build tools needed!

2. **Toggle Display Modes**
   - Use the "12/24 Hour" toggle to switch time formats
   - Use the "Digital/Analog" toggle to switch between clock types

3. **Add Custom Timezones**
   - Click "+ Add Timezone" button
   - Enter city name and IANA timezone identifier
   - Your timezone will be added and displayed immediately

4. **Remove Timezones**
   - Click "- Remove Last" to remove the most recently added timezone
   - You cannot remove the last timezone

5. **View Information**
   - Each clock shows:
     - City name
     - Current time (digital or analog)
     - Full date
     - UTC offset

## 📁 Files

- `index.html` - Complete HTML structure
- `style.css` - Beautiful styling with animations
- `script.js` - Advanced clock logic and timezone handling
- `README.md` - This documentation

## 🌐 Browser Support

Works in all modern browsers:
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

Requires support for:
- ES6+ JavaScript
- Intl.DateTimeFormat API
- CSS Grid and Flexbox
- CSS Transforms

## 🔧 Valid Timezone Formats

Use IANA timezone identifiers:

### North America
- `America/New_York`
- `America/Los_Angeles`
- `America/Chicago`
- `America/Denver`
- `America/Toronto`
- `America/Anchorage`
- `America/Juneau`
- `America/Phoenix`

### Europe
- `Europe/London`
- `Europe/Paris`
- `Europe/Berlin`
- `Europe/Moscow`
- `Europe/Istanbul`
- `Europe/Madrid`
- `Europe/Amsterdam`
- `Europe/Rome`

### Asia
- `Asia/Tokyo`
- `Asia/Shanghai`
- `Asia/Hong_Kong`
- `Asia/Dubai`
- `Asia/Singapore`
- `Asia/Bangkok`
- `Asia/Jakarta`
- `Asia/Seoul`
- `Asia/Bangkok`
- `Asia/Kolkata`

### Australia & Pacific
- `Australia/Sydney`
- `Australia/Melbourne`
- `Australia/Brisbane`
- `Pacific/Auckland`
- `Pacific/Fiji`
- `Pacific/Honolulu`

### Africa
- `Africa/Cairo`
- `Africa/Johannesburg`
- `Africa/Lagos`
- `Africa/Nairobi`
- `Africa/Casablanca`

See the complete [IANA Timezone Database](https://www.iana.org/time-zones) for more options.

## 🎨 Analog Clock Details

### Hand Colors
- **Hour Hand**: Dark gray
- **Minute Hand**: Blue (#667eea)
- **Second Hand**: Red (#ff6b6b)

### Features
- Smooth rotating hands
- Numbered clock face (1-12)
- Center dot design
- Shadow and depth effects

## 💡 Usage Examples

### Adding Timezones
```javascript
// Click "+ Add Timezone" button and follow prompts
// Or add programmatically:
timezones.push({ city: 'Singapore', timezone: 'Asia/Singapore' });
initializeClocks();
```

### Switching Between Formats
```javascript
// Toggle 12/24 hour format
is24HourFormat = !is24HourFormat;
updateAllClocks();

// Toggle digital/analog display
showAnalogClock = !showAnalogClock;
initializeClocks();
```

## 🎯 Customization

### Change Colors
Edit `style.css` to modify the gradient:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Change Hand Colors
Edit `style.css` to modify hand styles:
```css
.hour-hand {
    background: #333;
}
.minute-hand {
    background: #667eea;
}
.second-hand {
    background: #ff6b6b;
}
```

### Change Update Interval
Edit `script.js`:
```javascript
setInterval(updateAllClocks, 1000); // Time in milliseconds
```

## 🔮 Future Enhancements

- Weather integration
- Sunrise/Sunset times
- Alarm functionality
- Sound effects
- Local storage for saved timezones
- Dark mode theme
- Multiple theme colors
- Stopwatch and timer
- Time zone comparison chart

## 📄 License

MIT License - Feel free to use and modify!

## 🙏 Credits

- Built with vanilla HTML, CSS, and JavaScript
- Uses JavaScript Intl.DateTimeFormat API for timezone handling
- No external dependencies required

---

**Made with ❤️ by vertuevanguardin-lgtm**

Enjoy your advanced world clock! 🌍⏰