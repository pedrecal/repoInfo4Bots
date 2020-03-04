const api = require('../api');

const getRepoData = async query => {
  if (!query.sort) {
    query.sort = 'created';
  }
  if (!query.direction) {
    query.direction = 'asc';
  }

  const resp = await api.get(
    `/orgs/${query.org}/repos?sort=${query.sort}&direction=${query.direction}`
  );
  const repos = resp.data;
  const { language } = query;
  return language ? repos.filter(r => r.language === language) : repos;
};

module.exports = { getRepoData };
