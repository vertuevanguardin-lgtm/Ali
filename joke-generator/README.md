# 😂 Random Joke Generator

A fun and interactive random joke generator that fetches jokes from an external API. Features include multiple joke types, history tracking, and sharing capabilities!

## ✨ Features

- 🎯 **Random Jokes**: Get random jokes instantly
- 🏆 **Multiple Categories**: General, Programming, Knock-Knock jokes
- 📜 **Joke History**: Keep track of last 10 jokes viewed
- 📋 **Copy to Clipboard**: Easily share jokes with others
- 📤 **Share Function**: Share directly (if supported by device)
- ⚡ **Real-time Loading**: Animated loading indicator
- 🎨 **Beautiful UI**: Modern gradient design with smooth animations
- 📱 **Fully Responsive**: Works on desktop, tablet, and mobile

## 🌐 Joke Sources

The application uses the **Official Joke API** to fetch jokes:

- **Random**: Get any type of random joke
- **General**: General/common jokes
- **Programming**: Developer and tech-related jokes
- **Knock-Knock**: Classic knock-knock jokes

API: https://official-joke-api.appspot.com/

## 🚀 How to Use

1. **Open the application**
   - Open `index.html` in your web browser
   - No server or build tools needed!

2. **Get a Joke**
   - Click the "Get Joke" button to load a random joke
   - Watch the loading spinner while the joke is being fetched

3. **Select Joke Type**
   - Use the dropdown menu to choose a specific joke category
   - The next joke will be from your selected category

4. **Share or Copy**
   - Click "Share Joke" to share via your device's share menu
   - Click "Copy" to copy the joke to your clipboard

5. **View History**
   - See your last 10 jokes in the history panel
   - Click any previous joke to view it again

## 📁 Files

- `index.html` - HTML structure with complete UI
- `style.css` - Beautiful styling with animations
- `script.js` - Joke fetching logic and history management
- `README.md` - Documentation

## 🖥️ Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript
- Fetch API
- CSS Grid and Flexbox
- LocalStorage (for future enhancements)

✅ Chrome 60+
✅ Firefox 55+
✅ Safari 12+
✅ Edge 79+

## 📚 API Details

### Endpoints Used

```
Random Joke:
https://official-joke-api.appspot.com/random_joke

General Jokes:
https://official-joke-api.appspot.com/jokes/general/random

Programming Jokes:
https://official-joke-api.appspot.com/jokes/programming/random

Knock-Knock Jokes:
https://official-joke-api.appspot.com/jokes/knock-knock/random
```

### Response Format

```json
{
  "type": "general",
  "setup": "Why did the joke go to school?",
  "punchline": "Because it wanted to be a funny punch line!",
  "id": 123
}
```

## 🎨 Customization

### Change Colors

Edit `style.css` to modify the gradient:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Add More Joke Categories

Edit `script.js` and add to `JOKE_APIS`:

```javascript
const JOKE_APIS = {
    random: 'https://official-joke-api.appspot.com/random_joke',
    // Add more here...
};
```

### Change History Limit

Edit `script.js` and modify:

```javascript
if (jokeHistory.length >= 10) {  // Change 10 to desired number
    jokeHistory.pop();
}
```

## 💡 Tips

- **Offline Mode**: The app requires internet to fetch jokes from the API
- **API Rate Limit**: The Official Joke API is free and has generous rate limits
- **Mobile Sharing**: On mobile devices, the Share button uses the native sharing interface
- **History Persistence**: Current implementation keeps history in browser memory (page reload clears it)

## 🔧 Future Enhancements

- Add LocalStorage to persist history across sessions
- Add favorite jokes functionality
- Add custom joke submission
- Dark mode toggle
- Multiple API sources for more variety

## 📄 License

MIT License - Feel free to use and modify!

## 🙏 Credits

- Jokes provided by: [Official Joke API](https://official-joke-api.appspot.com/)
- Built with vanilla HTML, CSS, and JavaScript

---

**Made with 😄 by vertuevanguardin-lgtm**

Have fun sharing jokes! 🎉