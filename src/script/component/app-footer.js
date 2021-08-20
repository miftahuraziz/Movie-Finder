class AppFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <span class="text-muted">© 2021 miftahuraziz</span>
        </div>`;
    }
}

customElements.define("app-footer", AppFooter);