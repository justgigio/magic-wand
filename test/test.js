'use strict';

import { expect } from 'chai';

import magicWand from '../index';

describe('#dummyFunc', function() {

  it('should return a dummy message', function() {

    let result = magicWand.foo();
    expect(result).to.equal('Not implemented');
  });
});
