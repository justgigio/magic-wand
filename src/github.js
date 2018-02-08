'use strict';

//
// # GitHub Client
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
    this.client = new github();
    this.client.authenticate({
      type: 'oauth',
      key: process.env.CLIENT_ID,
      secret: process.env.CLIENT_SECRET
    });
    this.setRepo(process.env.REPO_OWNER, process.env.REPO);
  }

  setRepo(owner, repo) {
    this.current_owner = owner;
    this.current_repo = repo;
  }

  pullRequests() {
    this.client.pullRequests.getAll({"owner": this.current_owner, "repo": this.current_repo}).then(result => { this.pull_requests = result; })
  }

}

module.exports = { GitHub }
