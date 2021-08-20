class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <div class="d-flex justify-content-center">
            <form class="d-inline-flex p-5 bd-highlight" id="searchForm">
                <input class="form-control me-2" type="search" placeholder="Search Movie Title" id="searchElement">
                <button class="btn btn-outline-dark btn-lg" id="searchButtonElement" type="submit">Search</button>
            </form>
        </div>
        `;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
        this.querySelector("#searchForm").addEventListener("submit", function (event) {
            event.preventDefault();
        })
    }
}

customElements.define("search-bar", SearchBar);