'use strict';

const responses = require('../../util/responses');
const eventParser = require('../../util/eventParser');
const exampleLib = require('../../util/exampleLib');

module.exports.example = (event, context, callback) => {
  let parsedEvent = eventParser.parseEvent(event);
  let body = eventParser.parseEventKey('body', parsedEvent);

  if (body.hello) {
    const result = exampleLib();

    callback(null, responses.successResponse(
      result
    ));
  } else {
    callback(null, responses.errorResponse(
      "Missing location in request"
    ));
  }
};
