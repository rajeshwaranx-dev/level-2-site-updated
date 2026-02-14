// ============================================
// PROFESSIONAL LEVEL 2 MOVIE WEBSITE SCRIPT
// ============================================

// ================= MOVIE DATABASE =================
const movies = [
    {
        title: "Joe's College Road Trip",
        year: 2025,
        quality: "HD",
        category: ["Tamil", "Drama"],
        image: "https://image.tmdb.org/t/p/w1280/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
        telegramLink: "https://askmovies.lcubots.news/?start=fs_MjExODM="
    },
    {
        title: "Thunivu",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://image.tmdb.org/t/p/w1280/q2FGtGWg5MzQo2yhGPEPrRrdw4V.jpg",
        telegramLink: "https://askmovies.lcubots.news/?start=fs_MjExOTM="
    },
    {
        title: "Leo",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://image.tmdb.org/t/p/w1280/2XUHC4lp3tDsgfFLFygNZ2x2Um9.jpg",
        telegramLink: "https://askmovies.lcubots.news/?start=fs_MjEyMDA="
    }
];


// ===================================
// AUTO INCREMENT ID SYSTEM (FIXED)
// ===================================
movies.forEach((movie, index) => {
    movie.id = index + 1;
});


// ================= GLOBAL STATE =================
let selectedCategory = "all";
let searchTerm = "";


// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
    renderMovies(movies);
    initSearch();
    initCategoryFilter();
    initMobileMenu();
});


// ================= RENDER FUNCTION =================
function renderMovies(movieList) {
    const moviesGrid = document.getElementById("moviesGrid");
    const noResults = document.getElementById("noResults");

    if (!moviesGrid) return; // safety check

    moviesGrid.innerHTML = "";

    if (movieList.length === 0) {
        moviesGrid.style.display = "none";
        if (noResults) noResults.style.display = "block";
        return;
    }

    moviesGrid.style.display = "grid";
    if (noResults) noResults.style.display = "none";

    movieList.forEach(movie => {
        const card = createMovieCard(movie);
        moviesGrid.appendChild(card);
    });
}


// ================= CREATE MOVIE CARD =================
function createMovieCard(movie) {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.addEventListener("click", () => {
        window.open(movie.telegramLink, "_blank");
    });

    card.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <span class="quality-badge">${movie.quality}</span>
            <div class="movie-overlay">
                <button class="watch-btn">Watch Now</button>
            </div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span>${movie.year}</span>
                <span class="category-tag">
                    ${movie.category.join(", ")}
                </span>
            </div>
        </div>
    `;

    return card;
}


// ================= FILTER LOGIC =================
function applyFilters() {
    let filtered = movies;

    if (selectedCategory !== "all") {
        filtered = filtered.filter(movie =>
            movie.category.includes(selectedCategory)
        );
    }

    if (searchTerm) {
        filtered = filtered.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm)
        );
    }

    renderMovies(filtered);
}


// ================= SEARCH =================
function initSearch() {
    const searchInputs = [
        document.getElementById("searchInput"),
        document.getElementById("mobileSearchInput")
    ];

    searchInputs.forEach(input => {
        if (!input) return;

        input.addEventListener("input", e => {
            searchTerm = e.target.value.toLowerCase().trim();
            applyFilters();
        });
    });
}


// ================= CATEGORY FILTER =================
function initCategoryFilter() {
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {

            buttons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            selectedCategory = this.dataset.category;
            applyFilters();
        });
    });
}


// ================= MOBILE MENU =================
function initMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const mobileSearch = document.getElementById("mobileSearch");

    if (!hamburger) return;

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileSearch.classList.toggle("active");
    });
}

console.log("🎬 Movie Website Loaded");
console.log("Total movies:", movies.length);
