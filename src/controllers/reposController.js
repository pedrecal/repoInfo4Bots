const { getRepoData } = require('../services/githubService');
const { getCarouselDocument } = require('../services/blipService');

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
 *     - in: query
 *       name: language
 *       description: "Language for the repositories"
 *       required: true
 *       schema:
 *         type: string
 *         example: "C#"
 *     - in: query
 *       name: sort
 *       type: string
 *       description: "Parameter for sorting the repositories"
 *       enum:
 *         - created
 *         - updated
 *         - pushed
 *         - full_name
 *       default: created
 *     - in: query
 *       name: direction
 *       type: string
 *       description: "Direction in which the parameters are sorted"
 *       enum:
 *         - asc
 *         - desc
 *       default: asc
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
 * /reposCarousel:
 *   get:
 *     tags:
 *     - "Repository"
 *     summary: "Return an blip's carousel element with repos cards"
 *     description: ""
 *     operationId: "reposCarousel"
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
 *       description: "Language for the repositories"
 *       required: true
 *       schema:
 *         type: string
 *         example: "C#"
 *     - in: query
 *       name: sort
 *       type: string
 *       description: "Parameter for sorting the repositories"
 *       enum:
 *         - created
 *         - updated
 *         - pushed
 *         - full_name
 *       default: created
 *     - in: query
 *       name: direction
 *       type: string
 *       description: "Direction in which the parameters are sorted"
 *       enum:
 *         - asc
 *         - desc
 *       default: asc
 *     responses:
 *       200:
 *         description: "Array of basic information about organization repositories"
 */

const getCarouselRepos = async (req, res) => {
  const resp = await getCarouselDocument(req.query);

  return res.status(200).json(resp);
};

module.exports = { getOrgRepos, getCarouselRepos };
