'use strict';

// Helpers
import { expect } from 'chai';
import sinon from 'sinon';
import envhelper from './env_helper';

// Factories
import factory from 'factory-girl';
import pr from './factories/pull_request';
import reviewers from './factories/requested_reviewers';

// Modules
import github from 'github';
import { GitHub } from '../src/github';

describe('#GitHub Tools', function() {

  let sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  context('create Object', function() {
    it('should create GitHub Client', function() {
      const githubApi = new GitHub();
      expect(githubApi).to.be.an.instanceof(GitHub);
    });
  });

  context('Manage Pull Requests', function(){
    var github = new GitHub('some_mocked_token');
    var pull_request_1 = factory.build('pull_request');
    var pull_request_2 = factory.build('pull_request');
    var requested_reviewers = factory.build('requested_reviewers');
    var pull_request_3 = factory.build('pull_request', {}, {requested_reviewers: requested_reviewers});

    it('should get pull requests', async function(){
      sandbox.stub(github.client.pullRequests, 'getAll').returns([pull_request_1, pull_request_2]);

      var prs = await github.pullRequests();
      expect(prs.length).to.eq(2);
    });

    it('should get pull request by number', async function(){
      sandbox.stub(github.client.pullRequests, 'get').returns(pull_request_1);

      var pr = await github.pullRequest(1);
      expect(pr.data.title).to.eq('PR #1');
      expect(pr.data.number).to.eq(1);
    });

    it('should create pull request', async function(){
      sandbox.stub(github.client.pullRequests, 'create').returns(pull_request_1);

      var pr = await github.createPullRequest("branch");
      expect(pr.data.title).to.eq('PR #1');
    });

    it('should request reviewers', async function(){
      sandbox.stub(github.client.pullRequests, 'get').returns(pull_request_1);
      sandbox.stub(github.client.pullRequests, 'createReviewRequest').returns(pull_request_3);

      var pr = await github.pullRequest(1);
      expect(pr.data.requested_reviewers.length).to.eq(0);

      var pr_with_reviewer = await github.requestReview(pr, ["someone"]);
      expect(pr_with_reviewer.data.requested_reviewers.length).to.eq(1);
      expect(pr_with_reviewer.data.requested_reviewers[0].login).to.eq("someone");
    });
  });

});
