const ApiService = require('../api.service');
const https = require('https');

class GitlabService {

    getMergeRequestCommits(projectId, mrId) {
        return ApiService.get(`/api/v3/projects/${projectId}/merge_requests/${mrId}/commits`);
    }
}

module.exports = new GitlabService();
