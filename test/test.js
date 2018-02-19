'use strict';

import { expect } from 'chai';

import { MagicWand } from '../index';

describe('#MagicWand', function() {

  context('spellfy', function(){

    it('should make functions work with await', async function() {

      let mw = new MagicWand();

      var spell = function(){
        return mw.spellfy(42);
      }

      let fourtyTwo = await spell();

      expect(fourtyTwo).to.equal(42);

      spell = function(){
        return mw.spellfy(function(){
          return 27;
        });
      }

      let twentySeven = await spell();

      expect(twentySeven).to.equal(27);

      spell = function(){
        return mw.spellfy(new Promise(resolve => {
          setTimeout(function(){
            resolve(9)
          }, 100);
        }));
      }

      let nine = await spell();

      expect(nine).to.equal(9);
    });

    it ('should break a call', async function() {
      let mw = new MagicWand();

      var spell = function(){
        return mw.spellfy(new Promise((resolve, reject) => {
          setTimeout(function(){
            reject("Some error")
          }, 100);
        }));
      }

      var result;
      var error;

      try {
        result = await spell();
      } catch(err) {
        error = err;
      }
      expect(result).to.be.an('undefined');
      expect(error).to.match(/Some error/);

      spell = function(){
        return mw.spellfy(function(){
          return x.f;
        });
      }

      try {
        result = await spell();
      } catch(err) {
        error = err;
      }

      expect(result).to.be.an('undefined');
      expect(error).to.match(/x is not defined/);

    });

  });

});
