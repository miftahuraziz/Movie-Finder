class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=4528cfa1f518f5632af694c6993871d2&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.total_results >= 1) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found ☹️`);
            }
        })
    }
}
export default DataSource;