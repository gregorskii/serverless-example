'use strict';

module.exports.parseEvent = (event) => {
  let returnObj = {};
  if (event.hasOwnProperty('application/json')) {
    returnObj = event['application/json'];
  } else {
    returnObj = event;
  }

  return returnObj;
}

module.exports.parseEventKey = (key, event) => {
  if (event.hasOwnProperty(key)) {
    let value = event[key];
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch (e) {
        return e;
      }
    } else {
      return value;
    }
  } else {
    return "Missing key";
  }
}
