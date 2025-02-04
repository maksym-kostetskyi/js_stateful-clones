'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = { ...state };
  const resultArr = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        result[key] = action.extraData[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete result[key];
      }
    }

    if (action.type === 'clear') {
      for (const key in result) {
        delete result[key];
      }
    }
    resultArr.push({ ...result });
  }

  return resultArr;
}

module.exports = transformStateWithClones;
