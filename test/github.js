'use strict';

import { expect } from 'chai';
import sinon from 'sinon';

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

    it('should get pull requests', async function(){
      sandbox.stub(github.client.pullRequests, 'getAll').returns([{title: 'Stubbed PR #1'}, {title: 'Stubbed PR #2'}]);

      var prs = await github.pullRequests();
      expect(prs.length).to.eq(2);
      expect(prs[0].title).to.eq('Stubbed PR #1');
      expect(prs[1].title).to.eq('Stubbed PR #2');
    });

    it('should get pull request by number', async function(){
      sandbox.stub(github.client.pullRequests, 'get').returns({title: 'Stubbed PR #1', data: {number: 1}});

      var pr = await github.pullRequest(1);
      expect(pr.title).to.eq('Stubbed PR #1');
      expect(pr.data.number).to.eq(1);
    });

    it('should create pull request', async function(){
      sandbox.stub(github.client.pullRequests, 'create').returns({title: 'Stubbed new PR'});

      var pr = await github.createPullRequest("branch");
      expect(pr.title).to.eq('Stubbed new PR');
    });

    it('should request reviewers', async function(){
      sandbox.stub(github.client.pullRequests, 'get').returns({title: 'Stubbed PR #1', data: {number: 1}});
      sandbox.stub(github.client.pullRequests, 'createReviewRequest').returns({title: 'Stubbed new PR'});

      var pr = await github.pullRequest(1);
      var reviewer = await github.requestReview(pr, ["someone"]);
      expect(reviewer.title).to.eq('Stubbed new PR');
    });
  });

});
