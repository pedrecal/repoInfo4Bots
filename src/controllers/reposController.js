const { getRepoData } = require('../services/githubService');
const { getReposFilteredInfo } = require('../services/blipService');

/**
 *  @swagger
 * /allRepos:
 *   get:
 *     tags:
 *     - "Repository"
 *     summary: "Return an array of repositories, given an organization"
 *     description: ""
 *     operationId: "allRepos"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: query
 *       name: org
 *       description: "GitHub Organization Name"
 *       required: true
 *       schema:
 *         type: string
 *         example: "takenet"
 *     responses:
 *       200:
 *         description: "Array of repositories objects"
 */

const getOrgRepos = async (req, res) => {
  const resp = await getRepoData(req.query);

  return res.status(200).json(resp);
};

/**
 *  @swagger
 * /ReposForCarousel:
 *   get:
 *     tags:
 *     - "Repository"
 *     summary: "Return an array of repositories with the necessary info for blip carousel element"
 *     description: ""
 *     operationId: "ReposForCarousel"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: query
 *       name: org
 *       description: "GitHub Organization Name"
 *       required: true
 *       schema:
 *         type: string
 *         example: "takenet"
 *     - in: query
 *       name: language
 *       description: "Langugae for the repositories"
 *       required: true
 *       schema:
 *         type: string
 *         example: "C#"
 *     responses:
 *       200:
 *         description: "Array of basic information about organization repositories"
 */

const getReposForCarousel = async (req, res) => {
  const resp = await getReposFilteredInfo(req.query);

  return res.status(200).json(resp);
};

module.exports = { getOrgRepos, getReposForCarousel };
