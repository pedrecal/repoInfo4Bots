const api = require('../API');

const getRepoData = async query => {
  const resp = await api.get(
    `/orgs/${query.org}/repos?sort=created&direction=asc`
  );

  return resp.data;
};

module.exports = { getRepoData };
