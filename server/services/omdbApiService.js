const axios = require('axios');

class OmdbApiService{
    
    omdbAPIUrl(input, searchType) {
    const key = '844eb1f6';
    const apiUrl = 'http://www.omdbapi.com/';
    return `${apiUrl}?apikey=${key}&${searchType}=${input}`;
    }

    async searchTitle(searchInput) {
        const searchType = "s"
        try {
            const response = await axios.get(this.omdbAPIUrl(searchInput, searchType));
            return response.data;
        } catch(error){
        console.error(`Error fetching titles by ${searchInput}: `, error.message);
        }
    } 

    async fetchTitleDetails(id) {
        const searchType = "i"
        try{
            const response = await axios.get(this.omdbAPIUrl(id, searchType));
            return response.data;
        } catch (error) {
            console.error(`Error fetching title by id ${id}: `, error.message)
        }
    }
}

module.exports = OmdbApiService;
