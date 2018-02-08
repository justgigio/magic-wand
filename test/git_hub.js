'use strict';

import { expect } from 'chai';

import { execSync } from 'child_process';


import git from '../src/git_hub';

describe('#GitHub Tools', function() {

  context('current_branch', function() {
    it('should return current branch', function() {
      // Could not find a better way to test that
      let currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

      let result = git.getCurrentBranch();
      expect(result).to.equal(currentBranch);
    });
  });

  context('remote origin url', function() {
    it('should return current remote origin url', function() {

      let result = git.getRemoteOriginUrl();
      expect(result).to.equal('git@github.com:giovanecosta/magic-wand.git');
    });
  });

  context('repo name', function() {
    it('should return current repo name', function() {

      let result = git.getRepoName();
      expect(result).to.equal('magic-wand');
    });
  });

  context('repo owner', function() {
    it('should return current repo owner', function() {

      let result = git.getRepoOwner();
      expect(result).to.equal('giovanecosta');
    });
  });
});
