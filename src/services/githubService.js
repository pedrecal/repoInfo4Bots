const api = require('../API');

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

  return resp.data;
};

module.exports = { getRepoData };
