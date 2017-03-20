const GitlabService = require('./gitlab.service');
const ApiService = require('../api.service');
const sinon = require('sinon');
const { expect } = require('chai');

let ApiServiceMock
describe('GitlabService', () => {

    beforeEach(() => {
        ApiServiceMock = sinon.mock(ApiService);
    });

    describe('Function: getMergeRequestCommits', () => {
        it('should call ApiService.get', (done) => {
            const projectId = 169;
            const mrId = 7980;
            const url = `/api/v3/projects/${projectId}/merge_requests/${mrId}/commits`;
            const promise = new Promise((resolve) => {

                // TODO Find the best way to test with promises
                ApiServiceMock.expects('get').once().withArgs(url).returns(promise);

                GitlabService.getMergeRequestCommits(projectId, mrId)
                    .should.eventually.equal([{hello : 'hello'}])
                    .notify(done);

                resolve([{hello : 'hello'}]);
            });
        });
    });
});
