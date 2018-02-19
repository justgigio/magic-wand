'use strict';

import { expect } from 'chai';
import sinon from 'sinon';

import asana from 'asana';
import { Asana } from '../src/asana';

describe('#Asana Tools', function() {

  let sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  context('create Object', function() {
    it('should create Asana Client', function() {
      const asanaApi = new Asana('access_token_qwerty_lorem_ipsum');
      expect(asanaApi.client).to.be.an.instanceof(asana.Client);
    });

    it('should broke without access token', function() {
      expect(() => new Asana()).to.throw(/No Asana access token provided/);
    });

  });

  context('Manage Task info', function(){

    var asana = new Asana('some_mocked_token');
    it('should get Task info', async function(){

      let getTask = sandbox.stub(asana.client.tasks, 'findById').returns({name: 'Stubbed task name'});

      var task = await asana.getTask(553688717926160);
      expect(task.name).to.eq('Stubbed task name');
    });

    it('should update Task info', async function() {
      expect(() => asana.updateTask()).to.throw(/Not implemented/);
    });
  });

});
