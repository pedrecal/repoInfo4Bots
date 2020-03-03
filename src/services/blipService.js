const { getRepoData } = require('./githubService');

const carouselInfo = (repos, language) => {
  const cSharpRepos = [];

  repos.forEach(repo => {
    if (repo.language === language) {
      cSharpRepos.push({
        gitAvatar: repo.owner.avatar_url,
        repoName: repo.name,
        repoDescription: repo.description,
        repoLink: repo.html_url,
        createdAt: repo.created_at,
        language: repo.language,
      });
    }
  });

  return cSharpRepos;
};

const getReposFilteredInfo = async query => {
  const allRepos = await getRepoData(query);
  const carouselReadyInfo = carouselInfo(allRepos, query.language);

  return carouselReadyInfo;
};

module.exports = { carouselInfo, getReposFilteredInfo };
