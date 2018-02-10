'use strict';

import { expect } from 'chai';
import sinon from 'sinon';

import { execSync } from 'child_process';


import git from '../src/git';

// Could not find a better way to test that
const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

describe('#Git Tools', function() {

  let sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  context('current_branch', function() {
    it('should return current branch', function() {

      let result = git.getCurrentBranch();
      expect(result).to.equal(currentBranch);
    });
  });

  context('remote origin path', function() {
    it('should return current remote origin path', function() {

      let result = git.getRemoteOriginPath();
      expect(result).to.equal('giovanecosta/magic-wand.git');
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


  context('git pull', function() {

    it('should send git command to shell', function() {
      const exec = sandbox.stub(git.shell, 'exec').returns({stdout: 'ok'});
      git.pull();
      expect(exec.calledWithMatch(/git pull origin/)).to.be.true;
    });
  });

  context('git push', function() {

    it('should send git command to shell', function() {
      const exec = sandbox.stub(git.shell, 'exec').returns({stdout: 'ok'});
      git.push();
      expect(exec.calledWithMatch(/git push origin/)).to.be.true;
    });
  });

});
