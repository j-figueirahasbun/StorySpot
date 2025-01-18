const express = require('express');
const OmdbApiService = require('../services/omdbApiService');
const router = express.Router();

const omdbApiService = new OmdbApiService();

router.get('/api/search/:input', async (req, res) => {
    const {input} = req.params;
    try {
        const fetchedTitles = await omdbApiService.searchTitle(input);
        res.json(fetchedTitles);
    } catch(error){
        console.error(`Error. Failed fetching titles`, error.message);
    }
});

router.get('/api/details/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const titleDetails = await omdbApiService.fetchTitleDetails(id);
        res.json(titleDetails);
    } catch(error){
        console.error(`Error. Failed fetching details for title`, error.message);
    }
});

module.exports = router;