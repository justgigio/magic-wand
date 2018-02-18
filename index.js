'use strict';

class MagicWand {

  constructor(){}
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
      promise = new Promise((resolve, reject) => {
        if (typeof something === 'function') {
          try {
            resolve(something());
          } catch (err) {
            reject(err);
          }
        } else {
          resolve(something);
        }
      });
    }

    return new Promise((resolve, reject) => {
      promise.then(function(){
        resolve.apply(null, arguments);
      }).catch(function(error){
        reject(error);
      });
    });
  }
}

module.exports = { MagicWand };
