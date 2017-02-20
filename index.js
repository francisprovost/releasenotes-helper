const GitlabService = require('./services/gitlab.service');

GitlabService.getMergeRequestCommits(169, 7980).then((commits) => {
    console.log(JSON.stringify(commits));
});