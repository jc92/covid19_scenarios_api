'use strict';
var validate = (function() {
  var refVal = [];
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict';
    if ((typeof data !== "number" || (data % 1) || data !== data)) {
      validate.errors = [{
        keyword: 'type',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/type',
        params: {
          type: 'integer'
        },
        message: 'should be integer'
      }];
      return false;
    }
    if (typeof data === "number") {
      var division0;
      if ((division0 = data / 1, division0 !== parseInt(division0))) {
        validate.errors = [{
          keyword: 'multipleOf',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/multipleOf',
          params: {
            multipleOf: 1
          },
          message: 'should be multiple of 1'
        }];
        return false;
      }
    }
    validate.errors = null;
    return true;
  };
})();
validate.schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "integer",
  "multipleOf": 1
};
validate.errors = null;
module.exports = validate;