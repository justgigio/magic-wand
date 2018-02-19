'use strict';

import shell from 'shelljs';

/**
 * @module git
 * @requires shelljs
 * @exports {git, shell}
 */
module.exports = {

  shell,

  /**
   * Pull from current remote branch. Like in <code>git pull origin master</code>
   */
  pull() {
    const cmd = this.shell.exec(`git pull origin ${this.getCurrentBranch()}`);
    return cmd.stdout.trim();
  },

  /**
   * Push to current remote branch. Like in <code>git push origin master</code>
   */
  push() {
    const cmd = this.shell.exec(`git push origin ${this.getCurrentBranch()}`);
    return cmd.stdout.trim();
  },

  /**
   * Return current git branch. Like in <code>git rev-parse --abbrev-ref HEAD</code>
   * @return {string}
   */
  getCurrentBranch() {
    const cmd = this.shell.exec('git rev-parse --abbrev-ref HEAD');
    return cmd.stdout.trim();
  },

  /**
   * Return current git repo name.
   * @return {string}
   */
  getRepoName() {
    const remoteOriginUrl = this.getRemoteOriginPath();
    let match = remoteOriginUrl.match(/\/(.+)\.git/);

    return match[1];
  },

  /**
   * Return current git repo owner.
   * @return {string}
   */
  getRepoOwner() {
    const remoteOriginUrl = this.getRemoteOriginPath();
    let parts = remoteOriginUrl.split('/');

    return parts[0];
  },

  /**
   * Return current git remote url config. Like in <code>git config --get remote.origin.url</code>
   * @return {string}
   */
  getRemoteOriginPath() {
    const cmd = this.shell.exec('git config --get remote.origin.url');
    let url = cmd.stdout.trim();

    url = url.replace(/(https:\/\/)?(git@)?github\.com:?\/?/, '');
    return url;
  }
};
