const { getRepoData } = require('./githubService');

const formatReposData = repos =>
  repos.map(repo => ({
    gitAvatar: repo.owner.avatar_url,
    repoName: repo.name,
    repoDescription: repo.description,
    repoLink: repo.html_url,
    createdAt: repo.created_at,
    language: repo.language,
  }));

const createRepoCardHeader = repo => ({
  type: 'application/vnd.lime.media-link+json',
  value: {
    title: repo.repoName,
    text: repo.repoDescription,
    type: 'image/jpeg',
    uri: repo.gitAvatar,
  },
});

const createRepoCards = repoInfos =>
  repoInfos.map(ri => ({ header: createRepoCardHeader(ri) }));

const createRepoCarouselDocument = repoInfos => ({
  itemType: 'application/vnd.lime.document-select+json',
  items: createRepoCards(repoInfos),
});

const getCarouselDocument = async query => {
  const repos = await getRepoData(query);
  const formattedReposData = formatReposData(repos);

  return createRepoCarouselDocument(formattedReposData.slice(0, 5));
};

module.exports = { formatReposData, getCarouselDocument };
