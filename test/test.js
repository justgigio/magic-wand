'use strict';

import { expect } from 'chai';

import MagicWand from '../index';

describe('#dummyFunc', function() {

  it('should return a dummy message', function() {

    let result = (new MagicWand).foo();
    expect(result).to.equal('Not implemented');
  });
});
