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
// cli.pullRequests();
// cli.pull_requests


import github from 'github';
require('dotenv').config()

class GitHub {

  constructor() {
    this.client = new github({
      debug: true
    });
    this.client.authenticate({
      type: 'oauth',
      token: process.env.TOKEN
    });
    this.setRepo(process.env.REPO_OWNER, process.env.REPO);
  }

  setRepo(owner, repo) {
    this.current = {"owner": owner, "repo": repo };
  }

  async pullRequests() {
    this.pull_requests = await this.client.pullRequests.getAll(this.current);
  }

  async pullRequest(number) {
    let params = Object.assign({}, this.current, {"number": number});
    this.pull_request = await this.client.pullRequests.get(params);
  }

  async createPullRequest(head, base="master", title="PR") {
    let params = Object.assign({}, this.current, {"head": head, "base": base, "title": title});
    this.pull_request = await this.client.pullRequests.create(params);
  }

  async requestReview(reviewers) {
    if (typeof this.pull_request !== "undefined") {
      let params = Object.assign({}, this.current, {"number": this.pull_request.data.number, "reviewers": reviewers});
      this.reviewrs = await this.client.pullRequests.createReviewRequest(params)
    }
  }
}

module.exports = { GitHub }
