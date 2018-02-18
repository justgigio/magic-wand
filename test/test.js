'use strict';

import { expect } from 'chai';

import { MagicWand } from '../index';

describe('#MagicWand', function() {

  context('spellfy', function(){

    it('should make functions work with await', async function() {

      let mw = new MagicWand();

      let spell = function(){
        return mw.spellfy(42);
      }

      let fourtyTwo = await spell();

      expect(fourtyTwo).to.equal(42);
    });

  });

});
