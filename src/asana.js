'use strict';

import asana from 'asana';
import { MagicWand } from '../index';

class Asana extends MagicWand {

  /**
   * Creates Asana object
   * @param {string} accessToken
   * @return {Object}
   */
  constructor(accessToken){
    if (!accessToken) {
      throw new Error('No Asana access token provided. For more information: https://github.com/giovanecosta/magic-wand#how-to-get-asana-access-token');
    }
    /* istanbul ignore next */
    // Remove ignore when issue solved: https://github.com/gotwarlost/istanbul/issues/690
    super();
    this.client = asana.Client.create().useAccessToken(accessToken);
  }

  /**
   * Get an Asana task
   * @param {number} taskId
   */
  getTask(taskId) {
    return this.spellfy(
      this.client.tasks.findById(taskId)
    );
  }

  /**
   * Update task on Asana
   * @param {number} taskId
   */
  updateTask(taskId) {
    throw new Error('Not implemented');
  }

}

module.exports = { Asana };
