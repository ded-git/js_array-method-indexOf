'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex = 0) {
    let searchIndex = fromIndex;

    if (fromIndex >= this.length || arguments.length === 0) {
      return -1;
    }

    if (fromIndex < 0) {
      searchIndex = this.length + fromIndex;
    }

    if (searchIndex < 0) {
      searchIndex = 0;
    }

    for (let i = searchIndex; i < this.length; i++) {
      if (this[i] === searchElement
        || (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
        return i;
      }
    }

    return -1;
  };
}
module.exports = applyCustomIndexOf;
