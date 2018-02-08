'use strict';

import shell from 'shelljs';

module.exports = {
  /**
   * Pull from current remote branch. Like in `git pull origin master`
   */
  pull() {
    let cmd = shell.exec(`git pull origin #{getCurrentBranch()}`);
    return cmd.stdout.trim();
  },
  /**
   * Push to current remote branch. Like in `git push origin master`
   */
  push() {
    let cmd = shell.exec(`git push origin #{getCurrentBranch()}`);
    return cmd.stdout.trim();
  },
  /**
   * Return current git branch. Like in `git rev-parse --abbrev-ref HEAD`
   * @return {string}
   */
  getCurrentBranch() {
    let cmd = shell.exec('git rev-parse --abbrev-ref HEAD');
    return cmd.stdout.trim();
  },

  /**
   * Return current git repo name.
   * @return {string}
   */
  getRepoName() {
    let remoteOriginUrl = this.getRemoteOriginUrl();
    let match = remoteOriginUrl.match(/\:.+\/(.+)\.git/);

    return match[1];
  },

  /**
   * Return current git repo owner.
   * @return {string}
   */
  getRepoOwner() {
    let remoteOriginUrl = this.getRemoteOriginUrl();
    let match = remoteOriginUrl.match(/\:(.+)\/.+\.git/);

    return match[1];
  },

  /**
   * Return current git remote url config. Like in `git config --get remote.origin.url`
   * @return {string}
   */
  getRemoteOriginUrl() {
    let cmd = shell.exec('git config --get remote.origin.url');
    return cmd.stdout.trim();
  }
}
