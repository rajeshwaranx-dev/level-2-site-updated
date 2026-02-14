# 🎬 MovieHub - Level 2 Movie Website

A clean, modern movie poster website with live search, category filtering, and Telegram integration.

## ✨ Features

### 🎨 Design
- ✅ Netflix-inspired dark theme
- ✅ Clean and modern UI
- ✅ Smooth hover zoom effects on posters
- ✅ Soft shadow movie cards
- ✅ Fully responsive (Mobile + Tablet + Desktop)
- ✅ Sticky navbar

### 🔍 Functionality
- ✅ **Live Search** - Filter movies as you type (no page reload)
- ✅ **Category Filter** - Filter by All, Tamil, English, Horror, Action, Thriller
- ✅ **Telegram Redirect** - Click movie to watch via Telegram
- ✅ **Smooth Animations** - 0.3s-0.5s transitions
- ✅ **Responsive Grid** - 4 columns (desktop), 2 columns (tablet), 1 column (mobile)

### 🎭 Interactive Elements
- ✅ Poster zoom on hover
- ✅ Dark overlay appears on hover
- ✅ "Watch Now" button slides in
- ✅ Quality badges (HD/4K)
- ✅ Category tags

## 📂 File Structure

```
level2-movie-website/
├── index.html       # Main HTML structure
├── style.css        # All styling
├── script.js        # Movie data & functionality
└── README.md        # This file
```

## 🚀 Quick Start

### 1. Download Files
Extract all files to a folder.

### 2. Open in Browser
Simply open `index.html` in any web browser.

### 3. Customize Movies
Edit the `movies` array in `script.js`:

```javascript
const movies = [
    {
        title: "Your Movie Title",
        year: "2024",
        quality: "HD",  // or "4K"
        category: "Action",  // Tamil, English, Horror, Action, Thriller
        image: "https://your-image-url.com/poster.jpg",
        telegramLink: "https://t.me/your_channel/movie123"
    },
    // Add more movies...
];
```

## 🔧 Customization Guide

### Add Your Movies

1. Open `script.js`
2. Find the `movies` array
3. Add your movie objects:

```javascript
{
    title: "Spider-Man",
    year: "2022",
    quality: "4K",
    category: "Action",
    image: "https://example.com/spiderman.jpg",
    telegramLink: "https://t.me/moviehub/spiderman"
}
```

### Update Telegram Channel Link

In `index.html`, find:
```html
<a href="https://t.me/your_channel" class="telegram-btn">
```

Replace `https://t.me/your_channel` with your actual Telegram channel link.

### Change Colors

Edit CSS variables in `style.css`:

```css
/* Primary color (Red) */
.filter-btn.active {
    background: #e50914;  /* Change this */
}

.telegram-btn {
    background: #0088cc;  /* Telegram blue */
}
```

### Add More Categories

1. **Add filter button** in `index.html`:
```html
<button class="filter-btn" data-category="Comedy">Comedy</button>
```

2. **Add movies** with that category in `script.js`

### Change Movie Grid Columns

Edit in `style.css`:

```css
.movies-grid {
    grid-template-columns: repeat(4, 1fr); /* Change 4 to desired number */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 4 columns (1025px+)
- **Tablet**: 3 columns (769px - 1024px)
- **Mobile Large**: 2 columns (481px - 768px)
- **Mobile Small**: 1 column (< 480px)

## 🎯 How It Works

### Movie Display
1. Movies are stored in JavaScript array
2. `renderMovies()` function creates HTML cards
3. Cards are inserted into the grid dynamically

### Live Search
1. User types in search box
2. `handleSearch()` filters movies by title
3. Grid updates instantly (no page reload)

### Category Filter
1. User clicks category button
2. Active button gets highlighted
3. Movies filtered by selected category
4. Search still works with active filter

### Telegram Redirect
1. User clicks movie card OR "Watch Now" button
2. `window.open()` opens Telegram link in new tab
3. Each movie has unique Telegram link

## 🎨 Customization Examples

### Example 1: Add Your Logo
Replace the emoji in `index.html`:
```html
<div class="logo">
    <img src="your-logo.png" alt="Logo">
    <span>MovieHub</span>
</div>
```

### Example 2: Change Hover Effect
Edit in `style.css`:
```css
.movie-card:hover {
    transform: translateY(-10px) scale(1.05);
}
```

### Example 3: Add Loading Animation
Add to `style.css`:
```css
.movie-card {
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

## 🔍 Search Tips

The search function:
- ✅ Searches movie titles only
- ✅ Case-insensitive
- ✅ Works with partial matches
- ✅ Combines with category filters
- ✅ Shows "No Results" if nothing matches

## 📊 Movie Data Structure

Each movie object requires:

| Field | Type | Required | Example |
|-------|------|----------|---------|
| `title` | String | Yes | "Inception" |
| `year` | String | Yes | "2010" |
| `quality` | String | Yes | "HD" or "4K" |
| `category` | String | Yes | "Action" |
| `image` | String | Yes | "https://..." |
| `telegramLink` | String | Yes | "https://t.me/..." |

## 🌐 Image Sources

You can use:
- **Unsplash** (free): https://unsplash.com
- **TMDB** (The Movie Database)
- **Your own hosted images**
- **CDN services**

**Recommended size**: 500x750px (portrait)

## 🚀 Deployment

### Option 1: GitHub Pages
1. Create GitHub repository
2. Upload files
3. Enable GitHub Pages in settings
4. Access at: `https://username.github.io/repo-name`

### Option 2: Netlify
1. Drag folder to Netlify Drop
2. Site goes live instantly
3. Get shareable link

### Option 3: Vercel
1. Import from GitHub
2. Deploy automatically
3. Get custom domain

## 🐛 Troubleshooting

### Movies not showing?
- Check browser console for errors (F12)
- Verify `script.js` is loaded
- Check image URLs are valid

### Search not working?
- Ensure input IDs match: `searchInput` and `mobileSearchInput`
- Check JavaScript console for errors

### Telegram links not opening?
- Verify links start with `https://t.me/`
- Check popup blocker settings
- Test links in new tab manually

### Images not loading?
- Use HTTPS URLs (not HTTP)
- Check URLs are accessible
- Verify image hosting allows hotlinking

## 💡 Tips

1. **Optimize Images**: Compress before uploading (use TinyPNG)
2. **Test Responsive**: Use browser DevTools to test all screen sizes
3. **Backup Data**: Keep copy of movies array before editing
4. **Consistent Naming**: Use clear, descriptive movie titles
5. **Valid Links**: Always test Telegram links before adding

## 📈 Performance

The website is optimized for:
- ✅ Fast loading (no heavy libraries)
- ✅ Smooth animations (CSS transitions)
- ✅ Lazy loading images
- ✅ Minimal JavaScript
- ✅ Clean code structure

## 🔐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📝 Code Comments

All code includes comments explaining:
- What each section does
- How functions work
- Where to customize

Perfect for beginners learning web development!

## 🎓 Learning Resources

Want to learn more?
- **HTML/CSS**: MDN Web Docs
- **JavaScript**: JavaScript.info
- **Responsive Design**: CSS-Tricks
- **Grid Layout**: CSS Grid Garden

## 📞 Need Help?

Common issues:
1. Clear browser cache
2. Check console for errors (F12)
3. Verify all file paths are correct
4. Ensure CDNs are loading (check Network tab)

---

**Built with ❤️ using HTML, CSS, and Vanilla JavaScript**

🎬 **Happy Movie Streaming!**
