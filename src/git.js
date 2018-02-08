'use strict';

import shell from 'shelljs';

module.exports = {

  /**
   * Pull from current remote branch. Like in `git pull origin master`
   */
  pull() {
    const cmd = shell.exec(`git pull origin #{getCurrentBranch()}`);
    return cmd.stdout.trim();
  },

  /**
   * Push to current remote branch. Like in `git push origin master`
   */
  push() {
    const cmd = shell.exec(`git push origin #{getCurrentBranch()}`);
    return cmd.stdout.trim();
  },

  /**
   * Return current git branch. Like in `git rev-parse --abbrev-ref HEAD`
   * @return {string}
   */
  getCurrentBranch() {
    const cmd = shell.exec('git rev-parse --abbrev-ref HEAD');
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
   * Return current git remote url config. Like in `git config --get remote.origin.url`
   * @return {string}
   */
  getRemoteOriginPath() {
    const cmd = shell.exec('git config --get remote.origin.url');
    let url = cmd.stdout.trim();

    url = url.replace(/(https\:\/\/)?(git\@)?github\.com\:?\/?/, '');
    return url;
  }
}
