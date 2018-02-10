'use strict';

import asana from 'asana';

class Asana {

  constructor(accessToken) {
    if (!accessToken) {
      throw new Error('No Asana access token provided. For more information: https://github.com/giovanecosta/magic-wand#how-to-get-asana-access-token');
    }
    this.client = asana.Client.create().useAccessToken(accessToken);
  }

}

module.exports = { Asana };
