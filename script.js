
const movies = [
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "INCEPTION",
    color: "linear-gradient(145deg, #263c59, #10121d)"
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "INTERSTELLAR",
    color: "linear-gradient(145deg, #54402e, #111827)"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster: "DARK KNIGHT",
    color: "linear-gradient(145deg, #353535, #101010)"
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    rating: 8.4,
    poster: "ENDGAME",
    color: "linear-gradient(145deg, #54352e, #14101a)"
  },
  {
    title: "The Martian",
    year: 2015,
    genre: "Adventure",
    rating: 8.0,
    poster: "THE MARTIAN",
    color: "linear-gradient(145deg, #8b4930, #281820)"
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    poster: "SHAWSHANK",
    color: "linear-gradient(145deg, #42564b, #101c19)"
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    rating: 8.1,
    poster: "MAD MAX",
    color: "linear-gradient(145deg, #a04d27, #291b17)"
  },
  {
    title: "Dune",
    year: 2021,
    genre: "Adventure",
    rating: 8.0,
    poster: "DUNE",
    color: "linear-gradient(145deg, #98714a, #30251d)"
  }
];

const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const movieCount = document.getElementById("movie-count");
const genreButtons = document.querySelectorAll(".genre");

let selectedGenre = "All";

function displayMovies() {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredMovies = movies.filter(movie => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchTerm);

    const matchesGenre =
      selectedGenre === "All" ||
      movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  movieCount.textContent =
    `${filteredMovies.length} movies found`;

  if (filteredMovies.length === 0) {
    movieGrid.innerHTML =
      '<p class="no-results">No movies found. Try another search.</p>';
    return;
  }

  movieGrid.innerHTML = filteredMovies.map(movie => `
    <article class="movie-card">
      <div class="movie-poster"
        style="background: ${movie.color}">
        ${movie.poster}
      </div>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <div class="movie-meta">
          <span>${movie.year} · ${movie.genre}</span>
          <span class="rating">★ ${movie.rating}</span>
        </div>
      </div>
    </article>
  `).join("");
}

searchInput.addEventListener("input", displayMovies);

genreButtons.forEach(button => {
  button.addEventListener("click", () => {
    genreButtons.forEach(item =>
      item.classList.remove("active")
    );

    button.classList.add("active");
    selectedGenre = button.dataset.genre;

    displayMovies();
  });
});

displayMovies();
