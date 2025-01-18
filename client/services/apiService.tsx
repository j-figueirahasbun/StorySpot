import axios from 'axios';

const domainApi = 'http://localhost:5000/api/';

const apiService = {
     getText: async () => {
      try {
        const response = await axios.get(`${domainApi}/hello`);
        
        return JSON.stringify(response.data.textToDisplay);
      
        } catch (error) {
        
            console.error('Error fetching data from back-end server:', error);
        
        throw error;
        }
    }, 
}


export default apiService;
