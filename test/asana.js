'use strict';

import { expect } from 'chai';

import asana from 'asana';
import { Asana } from '../src/asana';

describe('#Asana Tools', function() {

  context('create Object', function() {
    it('should create Asana Client', function() {
      const asanaApi = new Asana('access_token_qwerty_lorem_ipsum');
      expect(asanaApi.client).to.be.an.instanceof(asana.Client);
    });

    it('should broke without access token', function() {
      expect(() => new Asana()).to.throw(/No Asana access token provided/);
    });

  });

});
