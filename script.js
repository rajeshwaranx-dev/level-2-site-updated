// ==========================================
// MOVIE DATABASE
// ==========================================

const moviesDatabase = [
    {
        title: "Master",
        year: 2021,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Vikram",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Varisu",
        year: 2023,
        quality: "PreDvd",
        category: ["Tamil"],
        image: "https://images.unsplash.com/photo-1574267432644-f410f8ec2207?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Inception",
        year: 2010,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Leo",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Jailer",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Interstellar",
        year: 2014,
        quality: "HD",
        category: ["English"],
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Avengers Endgame",
        year: 2019,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Ponniyin Selvan",
        year: 2022,
        quality: "HD",
        category: ["Tamil"],
        image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Spider-Man No Way Home",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Thunivu",
        year: 2023,
        quality: "PreDvd",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Top Gun Maverick",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1583482183085-0e5c1b6e8e10?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Jawan",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Dunkirk",
        year: 2017,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Maaveeran",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "John Wick 4",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Sardar",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1611511450912-0c81f86d5b2e?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Oppenheimer",
        year: 2023,
        quality: "PreDvd",
        category: ["English"],
        image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Kaithi",
        year: 2019,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Mission Impossible 7",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Kantara",
        year: 2022,
        quality: "HD",
        category: ["Tamil"],
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "The Batman",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Vikrant Rona",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Avatar 2",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    // Additional movies to reach 25+ for pagination demo
    {
        title: "Beast",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Dune",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    },
    {
        title: "Pathaan",
        year: 2023,
        quality: "PreDvd",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies"
    }
];

// ==========================================
// AUTO ID GENERATOR
// ==========================================

// Automatically assign unique IDs to each movie
const movies = moviesDatabase.map((movie, index) => ({
    ...movie,
    id: index + 1
}));

// ==========================================
// GLOBAL STATE
// ==========================================

let state = {
    currentPage: 1,
    moviesPerPage: 20,
    selectedCategory: 'All',
    searchQuery: '',
    filteredMovies: [...movies]
};

// ==========================================
// DOM ELEMENTS
// ==========================================

const movieGrid = document.getElementById('movieGrid');
const pagination = document.getElementById('pagination');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const searchInputMobile = document.getElementById('searchInputMobile');
const filterButtons = document.querySelectorAll('.filter-btn');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileSearch = document.getElementById('mobileSearch');

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
    console.log('🎬 AskMovies initialized successfully!');
    console.log(`📊 Total movies loaded: ${movies.length}`);
    console.log(`🎯 Movies with auto-generated IDs: ${movies.every(m => m.id)}`);
    
    // Initial render
    applyFilters();
    
    // Setup event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Search functionality (both desktop and mobile)
    searchInput.addEventListener('input', handleSearch);
    searchInputMobile.addEventListener('input', handleSearch);
    
    // Category filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

// ==========================================
// FILTER ENGINE
// ==========================================

function applyFilters() {
    // Start with all movies
    let result = [...movies];
    
    // Apply category filter
    if (state.selectedCategory !== 'All') {
        result = result.filter(movie => 
            movie.category.includes(state.selectedCategory)
        );
    }
    
    // Apply search filter
    if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase().trim();
        result = result.filter(movie => 
            movie.title.toLowerCase().includes(query)
        );
    }
    
    // Update filtered movies
    state.filteredMovies = result;
    
    // Reset to first page when filters change
    state.currentPage = 1;
    
    // Render results
    renderMovies();
    renderPagination();
}

// ==========================================
// RENDER FUNCTION
// ==========================================

function renderMovies() {
    // Clear grid
    movieGrid.innerHTML = '';
    
    // Check if we have results
    if (state.filteredMovies.length === 0) {
        noResults.style.display = 'block';
        pagination.style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    pagination.style.display = 'flex';
    
    // Calculate pagination
    const startIndex = (state.currentPage - 1) * state.moviesPerPage;
    const endIndex = startIndex + state.moviesPerPage;
    const moviesToDisplay = state.filteredMovies.slice(startIndex, endIndex);
    
    // Create movie cards
    moviesToDisplay.forEach(movie => {
        const card = createMovieCard(movie);
        movieGrid.appendChild(card);
    });
    
    // Add fade-in animation
    movieGrid.classList.remove('fade-in');
    void movieGrid.offsetWidth; // Trigger reflow
    movieGrid.classList.add('fade-in');
    
    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==========================================
// CREATE MOVIE CARD
// ==========================================

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => openMovie(movie);
    
    // Create category tags
    const categoryTags = movie.category.map(cat => 
        `<span class="category-tag">${cat}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <div class="quality-badge">${movie.quality}</div>
            <div class="watch-overlay">
                <button class="watch-btn">WATCH NOW</button>
            </div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-year">${movie.year}</p>
            <div class="movie-categories">
                ${categoryTags}
            </div>
        </div>
    `;
    
    return card;
}

function openMovie(movie) {
    console.log(`🎬 Opening movie: ${movie.title} (ID: ${movie.id})`);
    window.open(movie.telegramLink, '_blank');
}

// ==========================================
// PAGINATION
// ==========================================

function renderPagination() {
    pagination.innerHTML = '';
    
    const totalPages = Math.ceil(state.filteredMovies.length / state.moviesPerPage);
    
    // Don't show pagination if only 1 page or no results
    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }
    
    pagination.style.display = 'flex';
    
    // Previous button
    const prevBtn = createPageButton('Previous', state.currentPage - 1, state.currentPage === 1);
    pagination.appendChild(prevBtn);
    
    // Page numbers
    const pageNumbers = getPageNumbers(state.currentPage, totalPages);
    pageNumbers.forEach(pageNum => {
        if (pageNum === '...') {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'page-ellipsis';
            ellipsis.textContent = '...';
            pagination.appendChild(ellipsis);
        } else {
            const pageBtn = createPageButton(pageNum, pageNum, false, pageNum === state.currentPage);
            pagination.appendChild(pageBtn);
        }
    });
    
    // Next button
    const nextBtn = createPageButton('Next', state.currentPage + 1, state.currentPage === totalPages);
    pagination.appendChild(nextBtn);
}

function createPageButton(text, pageNum, disabled, active = false) {
    const btn = document.createElement('button');
    btn.className = 'page-btn';
    btn.textContent = text;
    btn.disabled = disabled;
    
    if (active) {
        btn.classList.add('active');
    }
    
    if (!disabled) {
        btn.onclick = () => goToPage(pageNum);
    }
    
    return btn;
}

function getPageNumbers(current, total) {
    const pages = [];
    
    if (total <= 7) {
        // Show all pages if 7 or fewer
        for (let i = 1; i <= total; i++) {
            pages.push(i);
        }
    } else {
        // Always show first page
        pages.push(1);
        
        if (current > 3) {
            pages.push('...');
        }
        
        // Show pages around current
        const start = Math.max(2, current - 1);
        const end = Math.min(total - 1, current + 1);
        
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        
        if (current < total - 2) {
            pages.push('...');
        }
        
        // Always show last page
        pages.push(total);
    }
    
    return pages;
}

function goToPage(pageNum) {
    state.currentPage = pageNum;
    renderMovies();
    renderPagination();
}

// ==========================================
// SEARCH
// ==========================================

function handleSearch(e) {
    state.searchQuery = e.target.value;
    
    // Sync both search inputs
    if (e.target === searchInput) {
        searchInputMobile.value = e.target.value;
    } else {
        searchInput.value = e.target.value;
    }
    
    applyFilters();
}

// ==========================================
// CATEGORY FILTER
// ==========================================

function handleCategoryFilter(e) {
    const category = e.target.dataset.category;
    state.selectedCategory = category;
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    applyFilters();
}

// ==========================================
// MOBILE MENU
// ==========================================

function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('active');
    mobileSearch.classList.toggle('show');
}

// ==========================================
// START APPLICATION
// ==========================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
