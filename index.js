'use strict';

class MagicWand {

  /**
   * Implements async/await interface for any value
   * @param {something} something like a promise, function or any value
   * @return {Promise}
   */
  async spellfy(something) {
    // Test if arg implements Promise interface
    let promise;
    if (typeof something.then === 'function' || typeof something.catch === 'function') {
      promise = something;
    } else {
      promise = new Promise(resolve => {
        if (typeof something === 'function') {
          resolve(something());
        } else {
          resolve(something);
        }
      });
    }

    return new Promise((resolve, reject) => {
      promise.then(function(){
        resolve.apply(null, arguments);
      }).catch(function(){
        throw new Error(`Promise rejected with arguments: ${arguments}`);
      });
    });
  }
}

module.exports = { MagicWand };
