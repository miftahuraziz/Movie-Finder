class MovieItem extends HTMLElement {

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML =`
        <div class="card mb-3 mx-auto" style="max-width: 700px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">
            <div class="row g-0">
                <div class="col-md-4">
                    <img id="poster" src="https://image.tmdb.org/t/p/original/${this._movie.poster_path}" class="img-fluid rounded-start" alt="Movie Poster">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this._movie.title}</h5>
                        <p class="card-text">${this._movie.overview}</p>
                        <p class="card-text"><small class="text-muted">Released: ${this._movie.release_date}</small></p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("movie-item", MovieItem);