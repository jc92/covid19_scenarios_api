'use strict';
var equal = require('ajv/lib/compile/equal');
var validate = (function() {
  var refVal = [];
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict';
    var vErrors = null;
    var errors = 0;
    if (Array.isArray(data)) {
      var errs__0 = errors;
      var valid0;
      for (var i0 = 0; i0 < data.length; i0++) {
        var data1 = data[i0];
        var errs_1 = errors;
        if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
          if (true) {
            var errs__1 = errors;
            var valid2 = true;
            for (var key1 in data1) {
              var isAdditional1 = !(false || key1 == 'id' || key1 == 'ageGroup' || key1 == 'isolated' || key1 == 'confirmed' || key1 == 'severe' || key1 == 'critical' || key1 == 'fatal');
              if (isAdditional1) {
                valid2 = false;
                validate.errors = [{
                  keyword: 'additionalProperties',
                  dataPath: (dataPath || '') + '[' + i0 + ']',
                  schemaPath: '#/items/additionalProperties',
                  params: {
                    additionalProperty: '' + key1 + ''
                  },
                  message: 'should NOT have additional properties'
                }];
                return false;
                break;
              }
            }
            if (valid2) {
              if (data1.id === undefined) {
                valid2 = false;
                validate.errors = [{
                  keyword: 'required',
                  dataPath: (dataPath || '') + '[' + i0 + ']',
                  schemaPath: '#/items/required',
                  params: {
                    missingProperty: 'id'
                  },
                  message: 'should have required property \'id\''
                }];
                return false;
              } else {
                var errs_2 = errors;
                if (typeof data1.id !== "number") {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '[' + i0 + '].id',
                    schemaPath: '#/items/properties/id/type',
                    params: {
                      type: 'number'
                    },
                    message: 'should be number'
                  }];
                  return false;
                }
                var valid2 = errors === errs_2;
              }
              if (valid2) {
                var data2 = data1.ageGroup;
                if (data2 === undefined) {
                  valid2 = false;
                  validate.errors = [{
                    keyword: 'required',
                    dataPath: (dataPath || '') + '[' + i0 + ']',
                    schemaPath: '#/items/required',
                    params: {
                      missingProperty: 'ageGroup'
                    },
                    message: 'should have required property \'ageGroup\''
                  }];
                  return false;
                } else {
                  var errs_2 = errors;
                  if (typeof data2 !== "string") {
                    validate.errors = [{
                      keyword: 'type',
                      dataPath: (dataPath || '') + '[' + i0 + '].ageGroup',
                      schemaPath: '#/items/properties/ageGroup/type',
                      params: {
                        type: 'string'
                      },
                      message: 'should be string'
                    }];
                    return false;
                  }
                  var schema2 = validate.schema.items.properties.ageGroup.enum;
                  var valid2;
                  valid2 = false;
                  for (var i2 = 0; i2 < schema2.length; i2++)
                    if (equal(data2, schema2[i2])) {
                      valid2 = true;
                      break;
                    } if (!valid2) {
                    validate.errors = [{
                      keyword: 'enum',
                      dataPath: (dataPath || '') + '[' + i0 + '].ageGroup',
                      schemaPath: '#/items/properties/ageGroup/enum',
                      params: {
                        allowedValues: schema2
                      },
                      message: 'should be equal to one of the allowed values'
                    }];
                    return false;
                  }
                  var valid2 = errors === errs_2;
                }
                if (valid2) {
                  var data2 = data1.isolated;
                  if (data2 === undefined) {
                    valid2 = false;
                    validate.errors = [{
                      keyword: 'required',
                      dataPath: (dataPath || '') + '[' + i0 + ']',
                      schemaPath: '#/items/required',
                      params: {
                        missingProperty: 'isolated'
                      },
                      message: 'should have required property \'isolated\''
                    }];
                    return false;
                  } else {
                    var errs_2 = errors;
                    if (typeof data2 === "number") {
                      if (data2 > 100 || data2 !== data2) {
                        validate.errors = [{
                          keyword: 'maximum',
                          dataPath: (dataPath || '') + '[' + i0 + '].isolated',
                          schemaPath: '#/items/properties/isolated/maximum',
                          params: {
                            comparison: '<=',
                            limit: 100,
                            exclusive: false
                          },
                          message: 'should be <= 100'
                        }];
                        return false;
                      } else {
                        if (data2 < 0 || data2 !== data2) {
                          validate.errors = [{
                            keyword: 'minimum',
                            dataPath: (dataPath || '') + '[' + i0 + '].isolated',
                            schemaPath: '#/items/properties/isolated/minimum',
                            params: {
                              comparison: '>=',
                              limit: 0,
                              exclusive: false
                            },
                            message: 'should be >= 0'
                          }];
                          return false;
                        }
                      }
                    } else {
                      validate.errors = [{
                        keyword: 'type',
                        dataPath: (dataPath || '') + '[' + i0 + '].isolated',
                        schemaPath: '#/items/properties/isolated/type',
                        params: {
                          type: 'number'
                        },
                        message: 'should be number'
                      }];
                      return false;
                    }
                    var valid2 = errors === errs_2;
                  }
                  if (valid2) {
                    var data2 = data1.confirmed;
                    if (data2 === undefined) {
                      valid2 = false;
                      validate.errors = [{
                        keyword: 'required',
                        dataPath: (dataPath || '') + '[' + i0 + ']',
                        schemaPath: '#/items/required',
                        params: {
                          missingProperty: 'confirmed'
                        },
                        message: 'should have required property \'confirmed\''
                      }];
                      return false;
                    } else {
                      var errs_2 = errors;
                      if (typeof data2 === "number") {
                        if (data2 > 100 || data2 !== data2) {
                          validate.errors = [{
                            keyword: 'maximum',
                            dataPath: (dataPath || '') + '[' + i0 + '].confirmed',
                            schemaPath: '#/items/properties/confirmed/maximum',
                            params: {
                              comparison: '<=',
                              limit: 100,
                              exclusive: false
                            },
                            message: 'should be <= 100'
                          }];
                          return false;
                        } else {
                          if (data2 < 0 || data2 !== data2) {
                            validate.errors = [{
                              keyword: 'minimum',
                              dataPath: (dataPath || '') + '[' + i0 + '].confirmed',
                              schemaPath: '#/items/properties/confirmed/minimum',
                              params: {
                                comparison: '>=',
                                limit: 0,
                                exclusive: false
                              },
                              message: 'should be >= 0'
                            }];
                            return false;
                          }
                        }
                      } else {
                        validate.errors = [{
                          keyword: 'type',
                          dataPath: (dataPath || '') + '[' + i0 + '].confirmed',
                          schemaPath: '#/items/properties/confirmed/type',
                          params: {
                            type: 'number'
                          },
                          message: 'should be number'
                        }];
                        return false;
                      }
                      var valid2 = errors === errs_2;
                    }
                    if (valid2) {
                      var data2 = data1.severe;
                      if (data2 === undefined) {
                        valid2 = false;
                        validate.errors = [{
                          keyword: 'required',
                          dataPath: (dataPath || '') + '[' + i0 + ']',
                          schemaPath: '#/items/required',
                          params: {
                            missingProperty: 'severe'
                          },
                          message: 'should have required property \'severe\''
                        }];
                        return false;
                      } else {
                        var errs_2 = errors;
                        if (typeof data2 === "number") {
                          if (data2 > 100 || data2 !== data2) {
                            validate.errors = [{
                              keyword: 'maximum',
                              dataPath: (dataPath || '') + '[' + i0 + '].severe',
                              schemaPath: '#/items/properties/severe/maximum',
                              params: {
                                comparison: '<=',
                                limit: 100,
                                exclusive: false
                              },
                              message: 'should be <= 100'
                            }];
                            return false;
                          } else {
                            if (data2 < 0 || data2 !== data2) {
                              validate.errors = [{
                                keyword: 'minimum',
                                dataPath: (dataPath || '') + '[' + i0 + '].severe',
                                schemaPath: '#/items/properties/severe/minimum',
                                params: {
                                  comparison: '>=',
                                  limit: 0,
                                  exclusive: false
                                },
                                message: 'should be >= 0'
                              }];
                              return false;
                            }
                          }
                        } else {
                          validate.errors = [{
                            keyword: 'type',
                            dataPath: (dataPath || '') + '[' + i0 + '].severe',
                            schemaPath: '#/items/properties/severe/type',
                            params: {
                              type: 'number'
                            },
                            message: 'should be number'
                          }];
                          return false;
                        }
                        var valid2 = errors === errs_2;
                      }
                      if (valid2) {
                        var data2 = data1.critical;
                        if (data2 === undefined) {
                          valid2 = false;
                          validate.errors = [{
                            keyword: 'required',
                            dataPath: (dataPath || '') + '[' + i0 + ']',
                            schemaPath: '#/items/required',
                            params: {
                              missingProperty: 'critical'
                            },
                            message: 'should have required property \'critical\''
                          }];
                          return false;
                        } else {
                          var errs_2 = errors;
                          if (typeof data2 === "number") {
                            if (data2 > 100 || data2 !== data2) {
                              validate.errors = [{
                                keyword: 'maximum',
                                dataPath: (dataPath || '') + '[' + i0 + '].critical',
                                schemaPath: '#/items/properties/critical/maximum',
                                params: {
                                  comparison: '<=',
                                  limit: 100,
                                  exclusive: false
                                },
                                message: 'should be <= 100'
                              }];
                              return false;
                            } else {
                              if (data2 < 0 || data2 !== data2) {
                                validate.errors = [{
                                  keyword: 'minimum',
                                  dataPath: (dataPath || '') + '[' + i0 + '].critical',
                                  schemaPath: '#/items/properties/critical/minimum',
                                  params: {
                                    comparison: '>=',
                                    limit: 0,
                                    exclusive: false
                                  },
                                  message: 'should be >= 0'
                                }];
                                return false;
                              }
                            }
                          } else {
                            validate.errors = [{
                              keyword: 'type',
                              dataPath: (dataPath || '') + '[' + i0 + '].critical',
                              schemaPath: '#/items/properties/critical/type',
                              params: {
                                type: 'number'
                              },
                              message: 'should be number'
                            }];
                            return false;
                          }
                          var valid2 = errors === errs_2;
                        }
                        if (valid2) {
                          var data2 = data1.fatal;
                          if (data2 === undefined) {
                            valid2 = false;
                            validate.errors = [{
                              keyword: 'required',
                              dataPath: (dataPath || '') + '[' + i0 + ']',
                              schemaPath: '#/items/required',
                              params: {
                                missingProperty: 'fatal'
                              },
                              message: 'should have required property \'fatal\''
                            }];
                            return false;
                          } else {
                            var errs_2 = errors;
                            if (typeof data2 === "number") {
                              if (data2 > 100 || data2 !== data2) {
                                validate.errors = [{
                                  keyword: 'maximum',
                                  dataPath: (dataPath || '') + '[' + i0 + '].fatal',
                                  schemaPath: '#/items/properties/fatal/maximum',
                                  params: {
                                    comparison: '<=',
                                    limit: 100,
                                    exclusive: false
                                  },
                                  message: 'should be <= 100'
                                }];
                                return false;
                              } else {
                                if (data2 < 0 || data2 !== data2) {
                                  validate.errors = [{
                                    keyword: 'minimum',
                                    dataPath: (dataPath || '') + '[' + i0 + '].fatal',
                                    schemaPath: '#/items/properties/fatal/minimum',
                                    params: {
                                      comparison: '>=',
                                      limit: 0,
                                      exclusive: false
                                    },
                                    message: 'should be >= 0'
                                  }];
                                  return false;
                                }
                              }
                            } else {
                              validate.errors = [{
                                keyword: 'type',
                                dataPath: (dataPath || '') + '[' + i0 + '].fatal',
                                schemaPath: '#/items/properties/fatal/type',
                                params: {
                                  type: 'number'
                                },
                                message: 'should be number'
                              }];
                              return false;
                            }
                            var valid2 = errors === errs_2;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          validate.errors = [{
            keyword: 'type',
            dataPath: (dataPath || '') + '[' + i0 + ']',
            schemaPath: '#/items/type',
            params: {
              type: 'object'
            },
            message: 'should be object'
          }];
          return false;
        }
        var valid1 = errors === errs_1;
        if (!valid1) break;
      }
    } else {
      validate.errors = [{
        keyword: 'type',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/type',
        params: {
          type: 'array'
        },
        message: 'should be array'
      }];
      return false;
    }
    validate.errors = vErrors;
    return errors === 0;
  };
})();
validate.schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "title": "Severity",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["id", "ageGroup", "isolated", "confirmed", "severe", "critical", "fatal"],
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "number"
      },
      "ageGroup": {
        "type": "string",
        "enum": ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80+"]
      },
      "isolated": {
        "type": "number",
        "minimum": 0,
        "maximum": 100
      },
      "confirmed": {
        "type": "number",
        "minimum": 0,
        "maximum": 100
      },
      "severe": {
        "type": "number",
        "minimum": 0,
        "maximum": 100
      },
      "critical": {
        "type": "number",
        "minimum": 0,
        "maximum": 100
      },
      "fatal": {
        "type": "number",
        "minimum": 0,
        "maximum": 100
      }
    }
  }
};
validate.errors = null;
module.exports = validate;