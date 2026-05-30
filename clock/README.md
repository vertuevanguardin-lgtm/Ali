# 🌍 Digital Clock - Multiple Timezones

A beautiful, responsive digital clock that displays the current time in different time zones around the world. Features real-time updates, date display, and timezone offset information.

## ✨ Features

- 📍 **Multiple Timezones**: Displays time for 6 major cities by default
- 🎨 **Beautiful Design**: Modern gradient background with smooth animations
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⏱️ **Real-time Updates**: Clock updates every second with hours, minutes, and seconds
- 📅 **Date Display**: Shows full date for each timezone location
- 🕐 **UTC Offset**: Displays timezone offset for each location
- ➕ **Customizable**: Add your own cities and timezones
- ⚡ **Pure JavaScript**: No dependencies required

## 🌐 Default Timezones

| City | Timezone |
|------|----------|
| New York | America/New_York |
| London | Europe/London |
| Paris | Europe/Paris |
| Tokyo | Asia/Tokyo |
| Sydney | Australia/Sydney |
| Dubai | Asia/Dubai |

## 🚀 How to Use

1. **Open the clock**
   - Simply open `index.html` in your web browser
   - No server or build tools needed!

2. **View real-time clocks**
   - See current time for all 6 major cities
   - Each clock updates every second
   - Full date and UTC offset displayed

3. **Add custom timezones**
   - Click the "+ Add Timezone" button
   - Enter city name and IANA timezone identifier
   - Your custom timezone will be displayed immediately

## 📁 Files

- `index.html` - HTML structure with semantic markup
- `style.css` - Beautiful styling with CSS Grid and animations
- `script.js` - Clock logic with real-time timezone handling
- `README.md` - Documentation

## 🌐 Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- Intl.DateTimeFormat API

✅ Chrome 60+
✅ Firefox 55+
✅ Safari 12+
✅ Edge 79+

## 🔧 Valid Timezone Formats

Use IANA timezone identifiers:

**North America**
- `America/New_York`
- `America/Los_Angeles`
- `America/Chicago`
- `America/Denver`
- `America/Toronto`

**Europe**
- `Europe/London`
- `Europe/Paris`
- `Europe/Berlin`
- `Europe/Moscow`
- `Europe/Istanbul`

**Asia**
- `Asia/Tokyo`
- `Asia/Shanghai`
- `Asia/Hong_Kong`
- `Asia/Dubai`
- `Asia/Singapore`
- `Asia/Bangkok`
- `Asia/Jakarta`
- `Asia/Seoul`

**Australia & Pacific**
- `Australia/Sydney`
- `Australia/Melbourne`
- `Australia/Brisbane`
- `Pacific/Auckland`
- `Pacific/Fiji`

**Africa**
- `Africa/Cairo`
- `Africa/Johannesburg`
- `Africa/Lagos`
- `Africa/Nairobi`

See the complete [IANA Timezone Database](https://www.iana.org/time-zones) for more options.

## 💡 Usage Examples

### Adding a timezone via button
- Click the "+ Add Timezone" button
- Follow the prompts

### Using browser console
```javascript
// Open browser console (F12) and run:
addCustomTimezone();
```

### Programmatically adding timezones
```javascript
// Add to the defaultTimezones array:
defaultTimezones.push({ city: 'Singapore', timezone: 'Asia/Singapore' });
```

## 🎨 Customization

### Change colors
Edit `style.css` and modify the gradient:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Change update interval
Edit `script.js` and modify the setInterval value:
```javascript
setInterval(updateAllClocks, 1000); // Time in milliseconds
```

## 📄 License

MIT License - Feel free to use and modify!

---

**Made with ❤️ Perfect Base for Timezone Clock**