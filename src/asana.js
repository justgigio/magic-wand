'use strict';

import asana from 'asana';

class Asana {

  /**
   * Creates Asana object
   * @param {string} accessToken
   * @return {Object}
   */
  constructor(accessToken) {
    if (!accessToken) {

      throw new Error('No Asana access token provided. For more information: https://github.com/giovanecosta/magic-wand#how-to-get-asana-access-token');
    }
    this.client = asana.Client.create().useAccessToken(accessToken);
  }

  /**
   * Get an Asana task
   * @param {number} taskId
   */
  async getTask(taskId) {
    return this.spellfy((r) => {
      this.client.tasks.findById(taskId).then(function(data){
        r(data);
      });
    });
  }

  /**
   * Update task on Asana
   * @param {number} taskId
   */
  updateTask(taskId) {
    throw new Error('Not implemented');
  }

  async spellfy(fn) {
    return new Promise(resolve => {
      fn(resolve);
    });
  }

}

module.exports = { Asana };
