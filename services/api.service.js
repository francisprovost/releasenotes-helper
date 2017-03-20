const config = require('../config.json');
const https = require('https');

class ApiService {

    constructor() {
        this.headers = {
            'PRIVATE-TOKEN': config.private_token
        }
    }

    get(path) {
        const options = {
            hostname: config.endpoint.gitlab,
            path,
            headers: this.headers
        }
        return new Promise((resolve, reject) => {
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
    }
}

module.exports = new ApiService();
