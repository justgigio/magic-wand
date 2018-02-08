'use strict';

import { expect } from 'chai';

import { GitHub } from '../index';

describe('#dummyFunc', function() {

  it('should return a dummy message', function() {

    let result = GitHub.status();
    expect(result).to.equal('Not implemented');
  });
});
