class Title {
    constructor(data) {
        this.Title = data.Title || null;
        this.Year = data.Year || null;
        this.imdbID = data.imdbID || null;
        this.Type = data.Type || null;
        this.Poster = data.Poster || null;
    }

    getTitleInfo() {
        return {
            Title: this.Title,
            Year: this.Year,
            imdbID: this.imdbID,
            Type: this.Type,
            Poster: this.Poster
        };
    }
}