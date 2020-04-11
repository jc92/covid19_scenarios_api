'use strict';
var formats = require('ajv/lib/compile/formats')();
var ucs2length = require('ajv/lib/compile/ucs2length');
var validate = (function() {
  var refVal = [];
  var refVal1 = (function() {
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null;
      var errors = 0;
      if ((data && typeof data === "object" && !Array.isArray(data))) {
        if (true) {
          var errs__0 = errors;
          var valid1 = true;
          for (var key0 in data) {
            var isAdditional0 = !(false || key0 == 'country' || key0 == 'empiricalData');
            if (isAdditional0) {
              valid1 = false;
              validate.errors = [{
                keyword: 'additionalProperties',
                dataPath: (dataPath || '') + "",
                schemaPath: '#/additionalProperties',
                params: {
                  additionalProperty: '' + key0 + ''
                },
                message: 'should NOT have additional properties'
              }];
              return false;
              break;
            }
          }
          if (valid1) {
            var data1 = data.country;
            if (data1 === undefined) {
              valid1 = false;
              validate.errors = [{
                keyword: 'required',
                dataPath: (dataPath || '') + "",
                schemaPath: '#/required',
                params: {
                  missingProperty: 'country'
                },
                message: 'should have required property \'country\''
              }];
              return false;
            } else {
              var errs_1 = errors;
              if (typeof data1 === "string") {
                if (ucs2length(data1) < 1) {
                  validate.errors = [{
                    keyword: 'minLength',
                    dataPath: (dataPath || '') + '.country',
                    schemaPath: '#/properties/country/minLength',
                    params: {
                      limit: 1
                    },
                    message: 'should NOT be shorter than 1 characters'
                  }];
                  return false;
                }
              } else {
                validate.errors = [{
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.country',
                  schemaPath: '#/properties/country/type',
                  params: {
                    type: 'string'
                  },
                  message: 'should be string'
                }];
                return false;
              }
              var valid1 = errors === errs_1;
            }
            if (valid1) {
              var data1 = data.empiricalData;
              if (data1 === undefined) {
                valid1 = false;
                validate.errors = [{
                  keyword: 'required',
                  dataPath: (dataPath || '') + "",
                  schemaPath: '#/required',
                  params: {
                    missingProperty: 'empiricalData'
                  },
                  message: 'should have required property \'empiricalData\''
                }];
                return false;
              } else {
                var errs_1 = errors;
                if (Array.isArray(data1)) {
                  var errs__1 = errors;
                  var valid1;
                  for (var i1 = 0; i1 < data1.length; i1++) {
                    var data2 = data1[i1];
                    var errs_2 = errors;
                    var errs_3 = errors;
                    if ((data2 && typeof data2 === "object" && !Array.isArray(data2))) {
                      if (true) {
                        var errs__3 = errors;
                        var valid4 = true;
                        for (var key3 in data2) {
                          var isAdditional3 = !(false || key3 == 'time' || key3 == 'cases' || key3 == 'deaths' || key3 == 'hospitalized' || key3 == 'icu' || key3 == 'recovered');
                          if (isAdditional3) {
                            valid4 = false;
                            validate.errors = [{
                              keyword: 'additionalProperties',
                              dataPath: (dataPath || '') + '.empiricalData[' + i1 + ']',
                              schemaPath: '#/definitions/EmpiricalDatum/additionalProperties',
                              params: {
                                additionalProperty: '' + key3 + ''
                              },
                              message: 'should NOT have additional properties'
                            }];
                            return false;
                            break;
                          }
                        }
                        if (valid4) {
                          var data3 = data2.time;
                          if (data3 === undefined) {
                            valid4 = false;
                            validate.errors = [{
                              keyword: 'required',
                              dataPath: (dataPath || '') + '.empiricalData[' + i1 + ']',
                              schemaPath: '#/definitions/EmpiricalDatum/required',
                              params: {
                                missingProperty: 'time'
                              },
                              message: 'should have required property \'time\''
                            }];
                            return false;
                          } else {
                            var errs_4 = errors;
                            if (errors === errs_4) {
                              if (typeof data3 === "string") {
                                if (!formats.date.test(data3)) {
                                  validate.errors = [{
                                    keyword: 'format',
                                    dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].time',
                                    schemaPath: '#/definitions/EmpiricalDatum/properties/time/format',
                                    params: {
                                      format: 'date'
                                    },
                                    message: 'should match format "date"'
                                  }];
                                  return false;
                                }
                              } else {
                                validate.errors = [{
                                  keyword: 'type',
                                  dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].time',
                                  schemaPath: '#/definitions/EmpiricalDatum/properties/time/type',
                                  params: {
                                    type: 'string'
                                  },
                                  message: 'should be string'
                                }];
                                return false;
                              }
                            }
                            var valid4 = errors === errs_4;
                          }
                          if (valid4) {
                            var data3 = data2.cases;
                            if (data3 === undefined) {
                              valid4 = false;
                              validate.errors = [{
                                keyword: 'required',
                                dataPath: (dataPath || '') + '.empiricalData[' + i1 + ']',
                                schemaPath: '#/definitions/EmpiricalDatum/required',
                                params: {
                                  missingProperty: 'cases'
                                },
                                message: 'should have required property \'cases\''
                              }];
                              return false;
                            } else {
                              var errs_4 = errors;
                              var errs__4 = errors;
                              var valid4 = false;
                              var errs_5 = errors;
                              if ((typeof data3 !== "number" || (data3 % 1) || data3 !== data3)) {
                                var err = {
                                  keyword: 'type',
                                  dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].cases',
                                  schemaPath: '#/definitions/EmpiricalDatum/properties/cases/anyOf/0/type',
                                  params: {
                                    type: 'integer'
                                  },
                                  message: 'should be integer'
                                };
                                if (vErrors === null) vErrors = [err];
                                else vErrors.push(err);
                                errors++;
                              }
                              if (typeof data3 === "number") {
                                var division5;
                                if ((division5 = data3 / 1, division5 !== parseInt(division5))) {
                                  var err = {
                                    keyword: 'multipleOf',
                                    dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].cases',
                                    schemaPath: '#/definitions/EmpiricalDatum/properties/cases/anyOf/0/multipleOf',
                                    params: {
                                      multipleOf: 1
                                    },
                                    message: 'should be multiple of 1'
                                  };
                                  if (vErrors === null) vErrors = [err];
                                  else vErrors.push(err);
                                  errors++;
                                }
                              }
                              var valid5 = errors === errs_5;
                              valid4 = valid4 || valid5;
                              if (!valid4) {
                                var errs_5 = errors;
                                if (data3 !== null) {
                                  var err = {
                                    keyword: 'type',
                                    dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].cases',
                                    schemaPath: '#/definitions/EmpiricalDatum/properties/cases/anyOf/1/type',
                                    params: {
                                      type: 'null'
                                    },
                                    message: 'should be null'
                                  };
                                  if (vErrors === null) vErrors = [err];
                                  else vErrors.push(err);
                                  errors++;
                                }
                                var valid5 = errors === errs_5;
                                valid4 = valid4 || valid5;
                              }
                              if (!valid4) {
                                var err = {
                                  keyword: 'anyOf',
                                  dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].cases',
                                  schemaPath: '#/definitions/EmpiricalDatum/properties/cases/anyOf',
                                  params: {},
                                  message: 'should match some schema in anyOf'
                                };
                                if (vErrors === null) vErrors = [err];
                                else vErrors.push(err);
                                errors++;
                                validate.errors = vErrors;
                                return false;
                              } else {
                                errors = errs__4;
                                if (vErrors !== null) {
                                  if (errs__4) vErrors.length = errs__4;
                                  else vErrors = null;
                                }
                              }
                              var valid4 = errors === errs_4;
                            }
                            if (valid4) {
                              var data3 = data2.deaths;
                              if (data3 === undefined) {
                                valid4 = true;
                              } else {
                                var errs_4 = errors;
                                var errs__4 = errors;
                                var valid4 = false;
                                var errs_5 = errors;
                                if ((typeof data3 !== "number" || (data3 % 1) || data3 !== data3)) {
                                  var err = {
                                    keyword: 'type',
                                    dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].deaths',
                                    schemaPath: '#/definitions/EmpiricalDatum/properties/deaths/anyOf/0/type',
                                    params: {
                                      type: 'integer'
                                    },
                                    message: 'should be integer'
                                  };
                                  if (vErrors === null) vErrors = [err];
                                  else vErrors.push(err);
                                  errors++;
                                }
                                if (typeof data3 === "number") {
                                  var division5;
                                  if ((division5 = data3 / 1, division5 !== parseInt(division5))) {
                                    var err = {
                                      keyword: 'multipleOf',
                                      dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].deaths',
                                      schemaPath: '#/definitions/EmpiricalDatum/properties/deaths/anyOf/0/multipleOf',
                                      params: {
                                        multipleOf: 1
                                      },
                                      message: 'should be multiple of 1'
                                    };
                                    if (vErrors === null) vErrors = [err];
                                    else vErrors.push(err);
                                    errors++;
                                  }
                                }
                                var valid5 = errors === errs_5;
                                valid4 = valid4 || valid5;
                                if (!valid4) {
                                  var errs_5 = errors;
                                  if (data3 !== null) {
                                    var err = {
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].deaths',
                                      schemaPath: '#/definitions/EmpiricalDatum/properties/deaths/anyOf/1/type',
                                      params: {
                                        type: 'null'
                                      },
                                      message: 'should be null'
                                    };
                                    if (vErrors === null) vErrors = [err];
                                    else vErrors.push(err);
                                    errors++;
                                  }
                                  var valid5 = errors === errs_5;
                                  valid4 = valid4 || valid5;
                                }
                                if (!valid4) {
                                  var err = {
                                    keyword: 'anyOf',
                                    dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].deaths',
                                    schemaPath: '#/definitions/EmpiricalDatum/properties/deaths/anyOf',
                                    params: {},
                                    message: 'should match some schema in anyOf'
                                  };
                                  if (vErrors === null) vErrors = [err];
                                  else vErrors.push(err);
                                  errors++;
                                  validate.errors = vErrors;
                                  return false;
                                } else {
                                  errors = errs__4;
                                  if (vErrors !== null) {
                                    if (errs__4) vErrors.length = errs__4;
                                    else vErrors = null;
                                  }
                                }
                                var valid4 = errors === errs_4;
                              }
                              if (valid4) {
                                var data3 = data2.hospitalized;
                                if (data3 === undefined) {
                                  valid4 = true;
                                } else {
                                  var errs_4 = errors;
                                  var errs__4 = errors;
                                  var valid4 = false;
                                  var errs_5 = errors;
                                  if ((typeof data3 !== "number" || (data3 % 1) || data3 !== data3)) {
                                    var err = {
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].hospitalized',
                                      schemaPath: '#/definitions/EmpiricalDatum/properties/hospitalized/anyOf/0/type',
                                      params: {
                                        type: 'integer'
                                      },
                                      message: 'should be integer'
                                    };
                                    if (vErrors === null) vErrors = [err];
                                    else vErrors.push(err);
                                    errors++;
                                  }
                                  if (typeof data3 === "number") {
                                    var division5;
                                    if ((division5 = data3 / 1, division5 !== parseInt(division5))) {
                                      var err = {
                                        keyword: 'multipleOf',
                                        dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].hospitalized',
                                        schemaPath: '#/definitions/EmpiricalDatum/properties/hospitalized/anyOf/0/multipleOf',
                                        params: {
                                          multipleOf: 1
                                        },
                                        message: 'should be multiple of 1'
                                      };
                                      if (vErrors === null) vErrors = [err];
                                      else vErrors.push(err);
                                      errors++;
                                    }
                                  }
                                  var valid5 = errors === errs_5;
                                  valid4 = valid4 || valid5;
                                  if (!valid4) {
                                    var errs_5 = errors;
                                    if (data3 !== null) {
                                      var err = {
                                        keyword: 'type',
                                        dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].hospitalized',
                                        schemaPath: '#/definitions/EmpiricalDatum/properties/hospitalized/anyOf/1/type',
                                        params: {
                                          type: 'null'
                                        },
                                        message: 'should be null'
                                      };
                                      if (vErrors === null) vErrors = [err];
                                      else vErrors.push(err);
                                      errors++;
                                    }
                                    var valid5 = errors === errs_5;
                                    valid4 = valid4 || valid5;
                                  }
                                  if (!valid4) {
                                    var err = {
                                      keyword: 'anyOf',
                                      dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].hospitalized',
                                      schemaPath: '#/definitions/EmpiricalDatum/properties/hospitalized/anyOf',
                                      params: {},
                                      message: 'should match some schema in anyOf'
                                    };
                                    if (vErrors === null) vErrors = [err];
                                    else vErrors.push(err);
                                    errors++;
                                    validate.errors = vErrors;
                                    return false;
                                  } else {
                                    errors = errs__4;
                                    if (vErrors !== null) {
                                      if (errs__4) vErrors.length = errs__4;
                                      else vErrors = null;
                                    }
                                  }
                                  var valid4 = errors === errs_4;
                                }
                                if (valid4) {
                                  var data3 = data2.icu;
                                  if (data3 === undefined) {
                                    valid4 = true;
                                  } else {
                                    var errs_4 = errors;
                                    var errs__4 = errors;
                                    var valid4 = false;
                                    var errs_5 = errors;
                                    if ((typeof data3 !== "number" || (data3 % 1) || data3 !== data3)) {
                                      var err = {
                                        keyword: 'type',
                                        dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].icu',
                                        schemaPath: '#/definitions/EmpiricalDatum/properties/icu/anyOf/0/type',
                                        params: {
                                          type: 'integer'
                                        },
                                        message: 'should be integer'
                                      };
                                      if (vErrors === null) vErrors = [err];
                                      else vErrors.push(err);
                                      errors++;
                                    }
                                    if (typeof data3 === "number") {
                                      var division5;
                                      if ((division5 = data3 / 1, division5 !== parseInt(division5))) {
                                        var err = {
                                          keyword: 'multipleOf',
                                          dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].icu',
                                          schemaPath: '#/definitions/EmpiricalDatum/properties/icu/anyOf/0/multipleOf',
                                          params: {
                                            multipleOf: 1
                                          },
                                          message: 'should be multiple of 1'
                                        };
                                        if (vErrors === null) vErrors = [err];
                                        else vErrors.push(err);
                                        errors++;
                                      }
                                    }
                                    var valid5 = errors === errs_5;
                                    valid4 = valid4 || valid5;
                                    if (!valid4) {
                                      var errs_5 = errors;
                                      if (data3 !== null) {
                                        var err = {
                                          keyword: 'type',
                                          dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].icu',
                                          schemaPath: '#/definitions/EmpiricalDatum/properties/icu/anyOf/1/type',
                                          params: {
                                            type: 'null'
                                          },
                                          message: 'should be null'
                                        };
                                        if (vErrors === null) vErrors = [err];
                                        else vErrors.push(err);
                                        errors++;
                                      }
                                      var valid5 = errors === errs_5;
                                      valid4 = valid4 || valid5;
                                    }
                                    if (!valid4) {
                                      var err = {
                                        keyword: 'anyOf',
                                        dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].icu',
                                        schemaPath: '#/definitions/EmpiricalDatum/properties/icu/anyOf',
                                        params: {},
                                        message: 'should match some schema in anyOf'
                                      };
                                      if (vErrors === null) vErrors = [err];
                                      else vErrors.push(err);
                                      errors++;
                                      validate.errors = vErrors;
                                      return false;
                                    } else {
                                      errors = errs__4;
                                      if (vErrors !== null) {
                                        if (errs__4) vErrors.length = errs__4;
                                        else vErrors = null;
                                      }
                                    }
                                    var valid4 = errors === errs_4;
                                  }
                                  if (valid4) {
                                    var data3 = data2.recovered;
                                    if (data3 === undefined) {
                                      valid4 = true;
                                    } else {
                                      var errs_4 = errors;
                                      var errs__4 = errors;
                                      var valid4 = false;
                                      var errs_5 = errors;
                                      if ((typeof data3 !== "number" || (data3 % 1) || data3 !== data3)) {
                                        var err = {
                                          keyword: 'type',
                                          dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].recovered',
                                          schemaPath: '#/definitions/EmpiricalDatum/properties/recovered/anyOf/0/type',
                                          params: {
                                            type: 'integer'
                                          },
                                          message: 'should be integer'
                                        };
                                        if (vErrors === null) vErrors = [err];
                                        else vErrors.push(err);
                                        errors++;
                                      }
                                      if (typeof data3 === "number") {
                                        var division5;
                                        if ((division5 = data3 / 1, division5 !== parseInt(division5))) {
                                          var err = {
                                            keyword: 'multipleOf',
                                            dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].recovered',
                                            schemaPath: '#/definitions/EmpiricalDatum/properties/recovered/anyOf/0/multipleOf',
                                            params: {
                                              multipleOf: 1
                                            },
                                            message: 'should be multiple of 1'
                                          };
                                          if (vErrors === null) vErrors = [err];
                                          else vErrors.push(err);
                                          errors++;
                                        }
                                      }
                                      var valid5 = errors === errs_5;
                                      valid4 = valid4 || valid5;
                                      if (!valid4) {
                                        var errs_5 = errors;
                                        if (data3 !== null) {
                                          var err = {
                                            keyword: 'type',
                                            dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].recovered',
                                            schemaPath: '#/definitions/EmpiricalDatum/properties/recovered/anyOf/1/type',
                                            params: {
                                              type: 'null'
                                            },
                                            message: 'should be null'
                                          };
                                          if (vErrors === null) vErrors = [err];
                                          else vErrors.push(err);
                                          errors++;
                                        }
                                        var valid5 = errors === errs_5;
                                        valid4 = valid4 || valid5;
                                      }
                                      if (!valid4) {
                                        var err = {
                                          keyword: 'anyOf',
                                          dataPath: (dataPath || '') + '.empiricalData[' + i1 + '].recovered',
                                          schemaPath: '#/definitions/EmpiricalDatum/properties/recovered/anyOf',
                                          params: {},
                                          message: 'should match some schema in anyOf'
                                        };
                                        if (vErrors === null) vErrors = [err];
                                        else vErrors.push(err);
                                        errors++;
                                        validate.errors = vErrors;
                                        return false;
                                      } else {
                                        errors = errs__4;
                                        if (vErrors !== null) {
                                          if (errs__4) vErrors.length = errs__4;
                                          else vErrors = null;
                                        }
                                      }
                                      var valid4 = errors === errs_4;
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
                        dataPath: (dataPath || '') + '.empiricalData[' + i1 + ']',
                        schemaPath: '#/definitions/EmpiricalDatum/type',
                        params: {
                          type: 'object'
                        },
                        message: 'should be object'
                      }];
                      return false;
                    }
                    var valid3 = errors === errs_3;
                    var valid2 = errors === errs_2;
                    if (!valid2) break;
                  }
                } else {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.empiricalData',
                    schemaPath: '#/properties/empiricalData/type',
                    params: {
                      type: 'array'
                    },
                    message: 'should be array'
                  }];
                  return false;
                }
                var valid1 = errors === errs_1;
              }
            }
          }
        }
      } else {
        validate.errors = [{
          keyword: 'type',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/type',
          params: {
            type: 'object'
          },
          message: 'should be object'
        }];
        return false;
      }
      validate.errors = vErrors;
      return errors === 0;
    };
  })();
  refVal1.schema = {
    "type": "object",
    "required": ["country", "empiricalData"],
    "additionalProperties": false,
    "properties": {
      "country": {
        "type": "string",
        "minLength": 1
      },
      "empiricalData": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/EmpiricalDatum"
        }
      }
    }
  };
  refVal1.errors = null;
  refVal[1] = refVal1;
  var refVal2 = {
    "type": "object",
    "required": ["time", "cases"],
    "additionalProperties": false,
    "properties": {
      "time": {
        "type": "string",
        "format": "date"
      },
      "cases": {
        "anyOf": [{
          "type": "integer",
          "multipleOf": 1,
          "min": 0
        }, {
          "type": "null"
        }]
      },
      "deaths": {
        "anyOf": [{
          "type": "integer",
          "multipleOf": 1,
          "min": 0
        }, {
          "type": "null"
        }]
      },
      "hospitalized": {
        "anyOf": [{
          "type": "integer",
          "multipleOf": 1,
          "min": 0
        }, {
          "type": "null"
        }]
      },
      "icu": {
        "anyOf": [{
          "type": "integer",
          "multipleOf": 1,
          "min": 0
        }, {
          "type": "null"
        }]
      },
      "recovered": {
        "anyOf": [{
          "type": "integer",
          "multipleOf": 1,
          "min": 0
        }, {
          "type": "null"
        }]
      }
    }
  };
  refVal[2] = refVal2;
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict';
    var vErrors = null;
    var errors = 0;
    if (rootData === undefined) rootData = data;
    if (Array.isArray(data)) {
      var errs__0 = errors;
      var valid0;
      for (var i0 = 0; i0 < data.length; i0++) {
        var errs_1 = errors;
        if (!refVal1(data[i0], (dataPath || '') + '[' + i0 + ']', data, i0, rootData)) {
          if (vErrors === null) vErrors = refVal1.errors;
          else vErrors = vErrors.concat(refVal1.errors);
          errors = vErrors.length;
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
  "title": "CaseCounts",
  "type": "array",
  "items": {
    "$ref": "#/definitions/CaseCountsForOneCountry"
  },
  "definitions": {
    "CaseCountsForOneCountry": {
      "type": "object",
      "required": ["country", "empiricalData"],
      "additionalProperties": false,
      "properties": {
        "country": {
          "type": "string",
          "minLength": 1
        },
        "empiricalData": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/EmpiricalDatum"
          }
        }
      }
    },
    "EmpiricalDatum": {
      "type": "object",
      "required": ["time", "cases"],
      "additionalProperties": false,
      "properties": {
        "time": {
          "type": "string",
          "format": "date"
        },
        "cases": {
          "anyOf": [{
            "type": "integer",
            "multipleOf": 1,
            "min": 0
          }, {
            "type": "null"
          }]
        },
        "deaths": {
          "anyOf": [{
            "type": "integer",
            "multipleOf": 1,
            "min": 0
          }, {
            "type": "null"
          }]
        },
        "hospitalized": {
          "anyOf": [{
            "type": "integer",
            "multipleOf": 1,
            "min": 0
          }, {
            "type": "null"
          }]
        },
        "icu": {
          "anyOf": [{
            "type": "integer",
            "multipleOf": 1,
            "min": 0
          }, {
            "type": "null"
          }]
        },
        "recovered": {
          "anyOf": [{
            "type": "integer",
            "multipleOf": 1,
            "min": 0
          }, {
            "type": "null"
          }]
        }
      }
    }
  }
};
validate.errors = null;
module.exports = validate;