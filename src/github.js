'use strict';

//
// # GitHub Client
//
// Docs:  https://github.com/octokit/rest.js
//        https://octokit.github.io/rest.js/
//        https://developer.github.com/v3/pulls/#create-a-pull-request
//
// ## Usage:
//
// var github = require("./src/github.js");
// var cli = new github.GitHub();
// cli.pullRequest(1).then(result => {cli.result = result})


import github from 'github';
import { MagicWand } from '../index';
require('dotenv').config()

class GitHub extends MagicWand {

  constructor() {
    if (!process.env.GITHUB_TOKEN) {
      throw new Error('No GitHub access token provided.');
    }
    /* istanbul ignore next */
    super();
    this.client = new github();
    this.client.authenticate({
      type: 'oauth',
      token: process.env.GITHUB_TOKEN
    });
    this.setRepo(process.env.REPO_OWNER, process.env.REPO);
  }

  setRepo(owner, repo) {
    this.current = {"owner": owner, "repo": repo };
  }

  pullRequests() {
    return this.spellfy(
      this.client.pullRequests.getAll(this.current)
    );
  }

  pullRequest(number) {
    let params = Object.assign({}, this.current, {"number": number});

    return this.spellfy(
      this.client.pullRequests.get(params)
    );
  }

  createPullRequest(head, base="master", title="PR") {
    let params = Object.assign({}, this.current, {"head": head, "base": base, "title": title});

    return this.spellfy(
      this.client.pullRequests.create(params)
    );
  }

  requestReview(pull_request, reviewers) {
    if (typeof pull_request !== "undefined") {
      let params = Object.assign({}, this.current, {"number": pull_request.data.number, "reviewers": reviewers});

      return this.spellfy(
        this.client.pullRequests.createReviewRequest(params)
      );
    }
  }
}

module.exports = { GitHub }
