const config = require('../config.json');
const https = require('https');

class GitlabService {
    constructor() {
        this.headers = {
            'PRIVATE-TOKEN': config.private_token
        }
    }

    getMergeRequestCommits(projectId, mrId) {
        const promise = new Promise((resolve, reject) => {

            const options = {
                hostname: config.endpoint.gitlab,
                path: `/api/v3/projects/${projectId}/merge_requests/${mrId}/commits`,
                headers: this.headers
            }

            //TODO move this in his own service
            https.get(options, (res) => {
                let body = ''
                res.on('data', (dataChunk) =>{
                    body += dataChunk;
                });

                res.on('end', () => {
                    resolve(body)
                });
            });
        });
        return promise;
    }
}

module.exports = new GitlabService();