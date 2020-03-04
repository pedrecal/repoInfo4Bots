const axios = require('axios');
const settings = require('../configs');

const api = axios.create({ baseURL: settings.githubApi });

module.exports = api;
