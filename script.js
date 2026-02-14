// ===================================
// MOVIE DATABASE
// ===================================
const moviesDatabase = [
    // Tamil Action Movies
        {
        id: 1,
        title: "Joe's College Road Trip",
        year: 2025,
        quality: "HD",
        category: ["Tamil", "Telugu", "Hindi", "English"],
        image: "https://graph.org/file/fe11e89059e47faf70f69-eb7d57f879051d5f1d.jpg",
        telegramLink: "https://askmovies.lcubots.news/?start=fs_MjEwODU="
    },
    {
        id: 1,
        title: "Thunivu",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://image.tmdb.org/t/p/w1280/q2FGtGWg5MzQo2yhGPEPrRrdw4V.jpg",
        telegramLink: "https://askmovies.lcubots.news/?start=fs_MjExOTM="
    },
    {
        id: 2,
        title: "Leo",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://image.tmdb.org/t/p/w1280/2XUHC4lp3tDsgfFLFygNZ2x2Um9.jpg",
        telegramLink: "https://askmovies.lcubots.news/?start=fs_MjEyMDA="
    },
    {
        id: 3,
        title: "Varisu",
        year: 2023,
        quality: "PreDvd",
        category: ["Tamil"],
        image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/varisu"
    },
    {
        id: 4,
        title: "Jailer",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1574267432644-f610a5804a31?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/jailer"
    },
    {
        id: 5,
        title: "Master",
        year: 2021,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/master"
    },
    
    // English Action Movies
    {
        id: 6,
        title: "John Wick 4",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1611419010196-a425a5b4e3d4?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/johnwick4"
    },
    {
        id: 7,
        title: "Mission Impossible 7",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/mi7"
    },
    {
        id: 8,
        title: "The Batman",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/batman"
    },
    {
        id: 9,
        title: "Top Gun Maverick",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/topgun"
    },
    {
        id: 10,
        title: "Avatar 2",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/avatar2"
    },
    
    // More Tamil Movies
    {
        id: 11,
        title: "Ponniyin Selvan",
        year: 2022,
        quality: "HD",
        category: ["Tamil"],
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/ps1"
    },
    {
        id: 12,
        title: "Valimai",
        year: 2022,
        quality: "PreDvd",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/valimai"
    },
    {
        id: 13,
        title: "Beast",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1606603696914-3b6e28c57f97?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/beast"
    },
    {
        id: 14,
        title: "Don",
        year: 2022,
        quality: "HD",
        category: ["Tamil"],
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/don"
    },
    {
        id: 15,
        title: "Kaithi",
        year: 2019,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/kaithi"
    },
    
    // More English Movies
    {
        id: 16,
        title: "Spider-Man No Way Home",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/spiderman"
    },
    {
        id: 17,
        title: "Dune",
        year: 2021,
        quality: "HD",
        category: ["English"],
        image: "https://images.unsplash.com/photo-1600262300671-295cb37d1e1d?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/dune"
    },
    {
        id: 18,
        title: "No Time To Die",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/bond"
    },
    {
        id: 19,
        title: "The Matrix Resurrections",
        year: 2021,
        quality: "PreDvd",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1554072675-66db59dba46f?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/matrix"
    },
    {
        id: 20,
        title: "Eternals",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/eternals"
    },
    
    // Additional Movies
    {
        id: 21,
        title: "Sardar",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/sardar"
    },
    {
        id: 22,
        title: "Pathaan",
        year: 2023,
        quality: "HD",
        category: ["Action"],
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/pathaan"
    },
    {
        id: 23,
        title: "Black Panther 2",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1518281361980-b26bfd556770?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/blackpanther2"
    },
    {
        id: 24,
        title: "RRR",
        year: 2022,
        quality: "HD",
        category: ["Action"],
        image: "https://images.unsplash.com/photo-1542204625-ca6c2f715f0c?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/rrr"
    },
    {
        id: 25,
        title: "Doctor Strange 2",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/doctorstrange2"
    },
    {
        id: 26,
        title: "Thor Love and Thunder",
        year: 2022,
        quality: "PreDvd",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/thor"
    },
    {
        id: 27,
        title: "Bullet Train",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/bullettrain"
    },
    {
        id: 28,
        title: "Thunivu",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/thunivu"
    },
    {
        id: 29,
        title: "Ant-Man Quantumania",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/antman"
    },
    {
        id: 30,
        title: "Fast X",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/fastx"
    },
    {
        id: 31,
        title: "Guardians Galaxy 3",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/gotg3"
    },
    {
        id: 32,
        title: "The Flash",
        year: 2023,
        quality: "PreDvd",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/flash"
    },
    {
        id: 33,
        title: "Transformers Rise",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/transformers"
    },
    {
        id: 34,
        title: "Cobra",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/cobra"
    },
    {
        id: 35,
        title: "Prince",
        year: 2022,
        quality: "PreDvd",
        category: ["Tamil"],
        image: "https://images.unsplash.com/photo-1574267432644-f610a5804a31?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/prince"
    },
    {
        id: 36,
        title: "Inception",
        year: 2010,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/inception"
    },
    {
        id: 37,
        title: "Interstellar",
        year: 2014,
        quality: "HD",
        category: ["English"],
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/interstellar"
    },
    {
        id: 38,
        title: "The Dark Knight",
        year: 2008,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/darkknight"
    },
    {
        id: 39,
        title: "Avengers Endgame",
        year: 2019,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/endgame"
    },
    {
        id: 40,
        title: "Gladiator",
        year: 2000,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1542204625-ca6c2f715f0c?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/gladiator"
    },
    {
        id: 41,
        title: "Baahubali 2",
        year: 2017,
        quality: "HD",
        category: ["Action"],
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/baahubali2"
    },
    {
        id: 42,
        title: "KGF Chapter 2",
        year: 2022,
        quality: "HD",
        category: ["Action"],
        image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/kgf2"
    },
    {
        id: 43,
        title: "Pushpa",
        year: 2021,
        quality: "HD",
        category: ["Action"],
        image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/pushpa"
    },
    {
        id: 44,
        title: "Shang-Chi",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/shangchi"
    },
    {
        id: 45,
        title: "Venom 2",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1611419010196-a425a5b4e3d4?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/venom2"
    },
    {
        id: 46,
        title: "Aquaman",
        year: 2018,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/aquaman"
    },
    {
        id: 47,
        title: "Wonder Woman",
        year: 2017,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/wonderwoman"
    },
    {
        id: 48,
        title: "Man of Steel",
        year: 2013,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/manofsteel"
    },
    {
        id: 49,
        title: "Vikram Vedha",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/vikramvedha"
    },
    {
        id: 50,
        title: "Sarpatta Parambarai",
        year: 2021,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/sarpatta"
    }
];

// ===================================
// GLOBAL STATE MANAGEMENT
// ===================================
let currentPage = 1;
const moviesPerPage = 20;
let filteredMovies = [...moviesDatabase];
let selectedCategory = 'All';
let searchQuery = '';

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderMovies();
    renderPagination();
    updateResultsInfo();
    setupEventListeners();
}

// ===================================
// EVENT LISTENERS SETUP
// ===================================
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // Category filter buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const categoryFilters = document.getElementById('categoryFilters');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            categoryFilters.classList.toggle('show');
        });
    }
}

// ===================================
// FILTER ENGINE
// ===================================
function applyFilters() {
    // Reset to first page when filters change
    currentPage = 1;
    
    // Start with all movies
    filteredMovies = moviesDatabase.filter(movie => {
        // Apply category filter
        const categoryMatch = selectedCategory === 'All' || 
                             movie.category.includes(selectedCategory);
        
        // Apply search filter (case-insensitive)
        const searchMatch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Both conditions must be true
        return categoryMatch && searchMatch;
    });
    
    // Re-render everything
    renderMovies();
    renderPagination();
    updateResultsInfo();
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================
function handleSearch(event) {
    searchQuery = event.target.value.trim();
    applyFilters();
}

// ===================================
// CATEGORY FILTER FUNCTIONALITY
// ===================================
function handleCategoryFilter(event) {
    // Remove active class from all buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Update selected category
    selectedCategory = event.target.getAttribute('data-category');
    
    // Apply filters
    applyFilters();
}

// ===================================
// RENDER MOVIES FUNCTION
// ===================================
function renderMovies() {
    const movieGrid = document.getElementById('movieGrid');
    const noResults = document.getElementById('noResults');
    
    // Add fade-out effect
    movieGrid.classList.add('fade-out');
    
    setTimeout(() => {
        // Clear existing content
        movieGrid.innerHTML = '';
        
        // Calculate pagination
        const startIndex = (currentPage - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const moviesToShow = filteredMovies.slice(startIndex, endIndex);
        
        // Show/hide no results message
        if (filteredMovies.length === 0) {
            movieGrid.style.display = 'none';
            noResults.style.display = 'block';
        } else {
            movieGrid.style.display = 'grid';
            noResults.style.display = 'none';
            
            // Render movie cards
            moviesToShow.forEach(movie => {
                const movieCard = createMovieCard(movie);
                movieGrid.appendChild(movieCard);
            });
        }
        
        // Remove fade-out effect
        movieGrid.classList.remove('fade-out');
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
}

// ===================================
// CREATE MOVIE CARD FUNCTION
// ===================================
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => openTelegramLink(movie.telegramLink);
    
    card.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <span class="quality-badge">${movie.quality}</span>
            <div class="watch-overlay">
                <button class="watch-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Now
                </button>
            </div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="movie-year">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    ${movie.year}
                </span>
            </div>
            <div class="category-tags">
                ${movie.category.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// ===================================
// TELEGRAM LINK HANDLER
// ===================================
function openTelegramLink(link) {
    window.open(link, '_blank');
}

// ===================================
// PAGINATION SYSTEM
// ===================================
function renderPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    
    // Calculate total pages
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    
    // Don't show pagination if only one page or no results
    if (totalPages <= 1) {
        return;
    }
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn';
    prevBtn.textContent = '← Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => changePage(currentPage - 1);
    paginationContainer.appendChild(prevBtn);
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // First page button (if not visible)
    if (startPage > 1) {
        const firstPageBtn = document.createElement('button');
        firstPageBtn.className = 'page-number';
        firstPageBtn.textContent = '1';
        firstPageBtn.onclick = () => changePage(1);
        paginationContainer.appendChild(firstPageBtn);
        
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0 0.5rem';
            ellipsis.style.color = 'var(--text-secondary)';
            paginationContainer.appendChild(ellipsis);
        }
    }
    
    // Page number buttons
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-number';
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        pageBtn.textContent = i;
        pageBtn.onclick = () => changePage(i);
        paginationContainer.appendChild(pageBtn);
    }
    
    // Last page button (if not visible)
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0 0.5rem';
            ellipsis.style.color = 'var(--text-secondary)';
            paginationContainer.appendChild(ellipsis);
        }
        
        const lastPageBtn = document.createElement('button');
        lastPageBtn.className = 'page-number';
        lastPageBtn.textContent = totalPages;
        lastPageBtn.onclick = () => changePage(totalPages);
        paginationContainer.appendChild(lastPageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn';
    nextBtn.textContent = 'Next →';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => changePage(currentPage + 1);
    paginationContainer.appendChild(nextBtn);
}

function changePage(pageNumber) {
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    
    // Validate page number
    if (pageNumber < 1 || pageNumber > totalPages) {
        return;
    }
    
    currentPage = pageNumber;
    renderMovies();
    renderPagination();
    updateResultsInfo();
}

// ===================================
// UPDATE RESULTS INFO
// ===================================
function updateResultsInfo() {
    const resultsInfo = document.getElementById('resultsInfo');
    const totalMovies = filteredMovies.length;
    const startIndex = (currentPage - 1) * moviesPerPage + 1;
    const endIndex = Math.min(currentPage * moviesPerPage, totalMovies);
    
    if (totalMovies === 0) {
        resultsInfo.textContent = '';
    } else if (totalMovies <= moviesPerPage) {
        resultsInfo.textContent = `Showing ${totalMovies} ${totalMovies === 1 ? 'movie' : 'movies'}`;
    } else {
        resultsInfo.textContent = `Showing ${startIndex}-${endIndex} of ${totalMovies} movies`;
    }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for search optimization (optional enhancement)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
