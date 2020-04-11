'use strict';
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
            var isAdditional0 = !(false || key0 == 'country' || key0 == 'ageDistribution');
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
              var data1 = data.ageDistribution;
              if (data1 === undefined) {
                valid1 = false;
                validate.errors = [{
                  keyword: 'required',
                  dataPath: (dataPath || '') + "",
                  schemaPath: '#/required',
                  params: {
                    missingProperty: 'ageDistribution'
                  },
                  message: 'should have required property \'ageDistribution\''
                }];
                return false;
              } else {
                var errs_1 = errors;
                var errs_2 = errors;
                if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
                  if (true) {
                    var errs__2 = errors;
                    var valid3 = true;
                    for (var key2 in data1) {
                      var isAdditional2 = !(false || refVal2.properties.hasOwnProperty(key2));
                      if (isAdditional2) {
                        valid3 = false;
                        validate.errors = [{
                          keyword: 'additionalProperties',
                          dataPath: (dataPath || '') + '.ageDistribution',
                          schemaPath: '#/definitions/AgeDistribution/additionalProperties',
                          params: {
                            additionalProperty: '' + key2 + ''
                          },
                          message: 'should NOT have additional properties'
                        }];
                        return false;
                        break;
                      }
                    }
                    if (valid3) {
                      var data2 = data1['0-9'];
                      if (data2 === undefined) {
                        valid3 = false;
                        validate.errors = [{
                          keyword: 'required',
                          dataPath: (dataPath || '') + '.ageDistribution',
                          schemaPath: '#/definitions/AgeDistribution/required',
                          params: {
                            missingProperty: '0-9'
                          },
                          message: 'should have required property \'0-9\''
                        }];
                        return false;
                      } else {
                        var errs_3 = errors;
                        if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                          validate.errors = [{
                            keyword: 'type',
                            dataPath: (dataPath || '') + '.ageDistribution[\'0-9\']',
                            schemaPath: '#/definitions/AgeDistribution/properties/0-9/type',
                            params: {
                              type: 'integer'
                            },
                            message: 'should be integer'
                          }];
                          return false;
                        }
                        if (typeof data2 === "number") {
                          if (data2 < 0 || data2 !== data2) {
                            validate.errors = [{
                              keyword: 'minimum',
                              dataPath: (dataPath || '') + '.ageDistribution[\'0-9\']',
                              schemaPath: '#/definitions/AgeDistribution/properties/0-9/minimum',
                              params: {
                                comparison: '>=',
                                limit: 0,
                                exclusive: false
                              },
                              message: 'should be >= 0'
                            }];
                            return false;
                          } else {
                            var division3;
                            if ((division3 = data2 / 1, division3 !== parseInt(division3))) {
                              validate.errors = [{
                                keyword: 'multipleOf',
                                dataPath: (dataPath || '') + '.ageDistribution[\'0-9\']',
                                schemaPath: '#/definitions/AgeDistribution/properties/0-9/multipleOf',
                                params: {
                                  multipleOf: 1
                                },
                                message: 'should be multiple of 1'
                              }];
                              return false;
                            }
                          }
                        }
                        var valid3 = errors === errs_3;
                      }
                      if (valid3) {
                        var data2 = data1['10-19'];
                        if (data2 === undefined) {
                          valid3 = false;
                          validate.errors = [{
                            keyword: 'required',
                            dataPath: (dataPath || '') + '.ageDistribution',
                            schemaPath: '#/definitions/AgeDistribution/required',
                            params: {
                              missingProperty: '10-19'
                            },
                            message: 'should have required property \'10-19\''
                          }];
                          return false;
                        } else {
                          var errs_3 = errors;
                          if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                            validate.errors = [{
                              keyword: 'type',
                              dataPath: (dataPath || '') + '.ageDistribution[\'10-19\']',
                              schemaPath: '#/definitions/AgeDistribution/properties/10-19/type',
                              params: {
                                type: 'integer'
                              },
                              message: 'should be integer'
                            }];
                            return false;
                          }
                          if (typeof data2 === "number") {
                            if (data2 < 0 || data2 !== data2) {
                              validate.errors = [{
                                keyword: 'minimum',
                                dataPath: (dataPath || '') + '.ageDistribution[\'10-19\']',
                                schemaPath: '#/definitions/AgeDistribution/properties/10-19/minimum',
                                params: {
                                  comparison: '>=',
                                  limit: 0,
                                  exclusive: false
                                },
                                message: 'should be >= 0'
                              }];
                              return false;
                            } else {
                              var division3;
                              if ((division3 = data2 / 1, division3 !== parseInt(division3))) {
                                validate.errors = [{
                                  keyword: 'multipleOf',
                                  dataPath: (dataPath || '') + '.ageDistribution[\'10-19\']',
                                  schemaPath: '#/definitions/AgeDistribution/properties/10-19/multipleOf',
                                  params: {
                                    multipleOf: 1
                                  },
                                  message: 'should be multiple of 1'
                                }];
                                return false;
                              }
                            }
                          }
                          var valid3 = errors === errs_3;
                        }
                        if (valid3) {
                          var data2 = data1['20-29'];
                          if (data2 === undefined) {
                            valid3 = false;
                            validate.errors = [{
                              keyword: 'required',
                              dataPath: (dataPath || '') + '.ageDistribution',
                              schemaPath: '#/definitions/AgeDistribution/required',
                              params: {
                                missingProperty: '20-29'
                              },
                              message: 'should have required property \'20-29\''
                            }];
                            return false;
                          } else {
                            var errs_3 = errors;
                            if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                              validate.errors = [{
                                keyword: 'type',
                                dataPath: (dataPath || '') + '.ageDistribution[\'20-29\']',
                                schemaPath: '#/definitions/AgeDistribution/properties/20-29/type',
                                params: {
                                  type: 'integer'
                                },
                                message: 'should be integer'
                              }];
                              return false;
                            }
                            if (typeof data2 === "number") {
                              if (data2 < 0 || data2 !== data2) {
                                validate.errors = [{
                                  keyword: 'minimum',
                                  dataPath: (dataPath || '') + '.ageDistribution[\'20-29\']',
                                  schemaPath: '#/definitions/AgeDistribution/properties/20-29/minimum',
                                  params: {
                                    comparison: '>=',
                                    limit: 0,
                                    exclusive: false
                                  },
                                  message: 'should be >= 0'
                                }];
                                return false;
                              } else {
                                var division3;
                                if ((division3 = data2 / 1, division3 !== parseInt(division3))) {
                                  validate.errors = [{
                                    keyword: 'multipleOf',
                                    dataPath: (dataPath || '') + '.ageDistribution[\'20-29\']',
                                    schemaPath: '#/definitions/AgeDistribution/properties/20-29/multipleOf',
                                    params: {
                                      multipleOf: 1
                                    },
                                    message: 'should be multiple of 1'
                                  }];
                                  return false;
                                }
                              }
                            }
                            var valid3 = errors === errs_3;
                          }
                          if (valid3) {
                            var data2 = data1['30-39'];
                            if (data2 === undefined) {
                              valid3 = false;
                              validate.errors = [{
                                keyword: 'required',
                                dataPath: (dataPath || '') + '.ageDistribution',
                                schemaPath: '#/definitions/AgeDistribution/required',
                                params: {
                                  missingProperty: '30-39'
                                },
                                message: 'should have required property \'30-39\''
                              }];
                              return false;
                            } else {
                              var errs_3 = errors;
                              if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                                validate.errors = [{
                                  keyword: 'type',
                                  dataPath: (dataPath || '') + '.ageDistribution[\'30-39\']',
                                  schemaPath: '#/definitions/AgeDistribution/properties/30-39/type',
                                  params: {
                                    type: 'integer'
                                  },
                                  message: 'should be integer'
                                }];
                                return false;
                              }
                              if (typeof data2 === "number") {
                                if (data2 < 0 || data2 !== data2) {
                                  validate.errors = [{
                                    keyword: 'minimum',
                                    dataPath: (dataPath || '') + '.ageDistribution[\'30-39\']',
                                    schemaPath: '#/definitions/AgeDistribution/properties/30-39/minimum',
                                    params: {
                                      comparison: '>=',
                                      limit: 0,
                                      exclusive: false
                                    },
                                    message: 'should be >= 0'
                                  }];
                                  return false;
                                } else {
                                  var division3;
                                  if ((division3 = data2 / 1, division3 !== parseInt(division3))) {
                                    validate.errors = [{
                                      keyword: 'multipleOf',
                                      dataPath: (dataPath || '') + '.ageDistribution[\'30-39\']',
                                      schemaPath: '#/definitions/AgeDistribution/properties/30-39/multipleOf',
                                      params: {
                                        multipleOf: 1
                                      },
                                      message: 'should be multiple of 1'
                                    }];
                                    return false;
                                  }
                                }
                              }
                              var valid3 = errors === errs_3;
                            }
                            if (valid3) {
                              var data2 = data1['40-49'];
                              if (data2 === undefined) {
                                valid3 = false;
                                validate.errors = [{
                                  keyword: 'required',
                                  dataPath: (dataPath || '') + '.ageDistribution',
                                  schemaPath: '#/definitions/AgeDistribution/required',
                                  params: {
                                    missingProperty: '40-49'
                                  },
                                  message: 'should have required property \'40-49\''
                                }];
                                return false;
                              } else {
                                var errs_3 = errors;
                                if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                                  validate.errors = [{
                                    keyword: 'type',
                                    dataPath: (dataPath || '') + '.ageDistribution[\'40-49\']',
                                    schemaPath: '#/definitions/AgeDistribution/properties/40-49/type',
                                    params: {
                                      type: 'integer'
                                    },
                                    message: 'should be integer'
                                  }];
                                  return false;
                                }
                                if (typeof data2 === "number") {
                                  if (data2 < 0 || data2 !== data2) {
                                    validate.errors = [{
                                      keyword: 'minimum',
                                      dataPath: (dataPath || '') + '.ageDistribution[\'40-49\']',
                                      schemaPath: '#/definitions/AgeDistribution/properties/40-49/minimum',
                                      params: {
                                        comparison: '>=',
                                        limit: 0,
                                        exclusive: false
                                      },
                                      message: 'should be >= 0'
                                    }];
                                    return false;
                                  } else {
                                    var division3;
                                    if ((division3 = data2 / 1, division3 !== parseInt(division3))) {
                                      validate.errors = [{
                                        keyword: 'multipleOf',
                                        dataPath: (dataPath || '') + '.ageDistribution[\'40-49\']',
                                        schemaPath: '#/definitions/AgeDistribution/properties/40-49/multipleOf',
                                        params: {
                                          multipleOf: 1
                                        },
                                        message: 'should be multiple of 1'
                                      }];
                                      return false;
                                    }
                                  }
                                }
                                var valid3 = errors === errs_3;
                              }
                              if (valid3) {
                                var data2 = data1['50-59'];
                                if (data2 === undefined) {
                                  valid3 = false;
                                  validate.errors = [{
                                    keyword: 'required',
                                    dataPath: (dataPath || '') + '.ageDistribution',
                                    schemaPath: '#/definitions/AgeDistribution/required',
                                    params: {
                                      missingProperty: '50-59'
                                    },
                                    message: 'should have required property \'50-59\''
                                  }];
                                  return false;
                                } else {
                                  var errs_3 = errors;
                                  if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                                    validate.errors = [{
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.ageDistribution[\'50-59\']',
                                      schemaPath: '#/definitions/AgeDistribution/properties/50-59/type',
                                      params: {
                                        type: 'integer'
                                      },
                                      message: 'should be integer'
                                    }];
                                    return false;
                                  }
                                  if (typeof data2 === "number") {
                                    if (data2 < 0 || data2 !== data2) {
                                      validate.errors = [{
                                        keyword: 'minimum',
                                        dataPath: (dataPath || '') + '.ageDistribution[\'50-59\']',
                                        schemaPath: '#/definitions/AgeDistribution/properties/50-59/minimum',
                                        params: {
                                          comparison: '>=',
                                          limit: 0,
                                          exclusive: false
                                        },
                                        message: 'should be >= 0'
                                      }];
                                      return false;
                                    } else {
                                      var division3;
                                      if ((division3 = data2 / 1, division3 !== parseInt(division3))) {
                                        validate.errors = [{
                                          keyword: 'multipleOf',
                                          dataPath: (dataPath || '') + '.ageDistribution[\'50-59\']',
                                          schemaPath: '#/definitions/AgeDistribution/properties/50-59/multipleOf',
                                          params: {
                                            multipleOf: 1
                                          },
                                          message: 'should be multiple of 1'
                                        }];
                                        return false;
                                      }
                                    }
                                  }
                                  var valid3 = errors === errs_3;
                                }
                                if (valid3) {
                                  var data2 = data1['60-69'];
                                  if (data2 === undefined) {
                                    valid3 = false;
                                    validate.errors = [{
                                      keyword: 'required',
                                      dataPath: (dataPath || '') + '.ageDistribution',
                                      schemaPath: '#/definitions/AgeDistribution/required',
                                      params: {
                                        missingProperty: '60-69'
                                      },
                                      message: 'should have required property \'60-69\''
                                    }];
                                    return false;
                                  } else {
                                    var errs_3 = errors;
                                    if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                                      validate.errors = [{
                                        keyword: 'type',
                                        dataPath: (dataPath || '') + '.ageDistribution[\'60-69\']',
                                        schemaPath: '#/definitions/AgeDistribution/properties/60-69/type',
                                        params: {
                                          type: 'integer'
                                        },
                                        message: 'should be integer'
                                      }];
                                      return false;
                                    }
                                    if (typeof data2 === "number") {
                                      if (data2 < 0 || data2 !== data2) {
                                        validate.errors = [{
                                          keyword: 'minimum',
                                          dataPath: (dataPath || '') + '.ageDistribution[\'60-69\']',
                                          schemaPath: '#/definitions/AgeDistribution/properties/60-69/minimum',
                                          params: {
                                            comparison: '>=',
                                            limit: 0,
                                            exclusive: false
                                          },
                                          message: 'should be >= 0'
                                        }];
                                        return false;
                                      } else {
                                        var division3;
                                        if ((division3 = data2 / 1, division3 !== parseInt(division3))) {
                                          validate.errors = [{
                                            keyword: 'multipleOf',
                                            dataPath: (dataPath || '') + '.ageDistribution[\'60-69\']',
                                            schemaPath: '#/definitions/AgeDistribution/properties/60-69/multipleOf',
                                            params: {
                                              multipleOf: 1
                                            },
                                            message: 'should be multiple of 1'
                                          }];
                                          return false;
                                        }
                                      }
                                    }
                                    var valid3 = errors === errs_3;
                                  }
                                  if (valid3) {
                                    var data2 = data1['70-79'];
                                    if (data2 === undefined) {
                                      valid3 = false;
                                      validate.errors = [{
                                        keyword: 'required',
                                        dataPath: (dataPath || '') + '.ageDistribution',
                                        schemaPath: '#/definitions/AgeDistribution/required',
                                        params: {
                                          missingProperty: '70-79'
                                        },
                                        message: 'should have required property \'70-79\''
                                      }];
                                      return false;
                                    } else {
                                      var errs_3 = errors;
                                      if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                                        validate.errors = [{
                                          keyword: 'type',
                                          dataPath: (dataPath || '') + '.ageDistribution[\'70-79\']',
                                          schemaPath: '#/definitions/AgeDistribution/properties/70-79/type',
                                          params: {
                                            type: 'integer'
                                          },
                                          message: 'should be integer'
                                        }];
                                        return false;
                                      }
                                      if (typeof data2 === "number") {
                                        if (data2 < 0 || data2 !== data2) {
                                          validate.errors = [{
                                            keyword: 'minimum',
                                            dataPath: (dataPath || '') + '.ageDistribution[\'70-79\']',
                                            schemaPath: '#/definitions/AgeDistribution/properties/70-79/minimum',
                                            params: {
                                              comparison: '>=',
                                              limit: 0,
                                              exclusive: false
                                            },
                                            message: 'should be >= 0'
                                          }];
                                          return false;
                                        } else {
                                          var division3;
                                          if ((division3 = data2 / 1, division3 !== parseInt(division3))) {
                                            validate.errors = [{
                                              keyword: 'multipleOf',
                                              dataPath: (dataPath || '') + '.ageDistribution[\'70-79\']',
                                              schemaPath: '#/definitions/AgeDistribution/properties/70-79/multipleOf',
                                              params: {
                                                multipleOf: 1
                                              },
                                              message: 'should be multiple of 1'
                                            }];
                                            return false;
                                          }
                                        }
                                      }
                                      var valid3 = errors === errs_3;
                                    }
                                    if (valid3) {
                                      var data2 = data1['80+'];
                                      if (data2 === undefined) {
                                        valid3 = false;
                                        validate.errors = [{
                                          keyword: 'required',
                                          dataPath: (dataPath || '') + '.ageDistribution',
                                          schemaPath: '#/definitions/AgeDistribution/required',
                                          params: {
                                            missingProperty: '80+'
                                          },
                                          message: 'should have required property \'80+\''
                                        }];
                                        return false;
                                      } else {
                                        var errs_3 = errors;
                                        if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                                          validate.errors = [{
                                            keyword: 'type',
                                            dataPath: (dataPath || '') + '.ageDistribution[\'80+\']',
                                            schemaPath: '#/definitions/AgeDistribution/properties/80%2B/type',
                                            params: {
                                              type: 'integer'
                                            },
                                            message: 'should be integer'
                                          }];
                                          return false;
                                        }
                                        if (typeof data2 === "number") {
                                          if (data2 < 0 || data2 !== data2) {
                                            validate.errors = [{
                                              keyword: 'minimum',
                                              dataPath: (dataPath || '') + '.ageDistribution[\'80+\']',
                                              schemaPath: '#/definitions/AgeDistribution/properties/80%2B/minimum',
                                              params: {
                                                comparison: '>=',
                                                limit: 0,
                                                exclusive: false
                                              },
                                              message: 'should be >= 0'
                                            }];
                                            return false;
                                          } else {
                                            var division3;
                                            if ((division3 = data2 / 1, division3 !== parseInt(division3))) {
                                              validate.errors = [{
                                                keyword: 'multipleOf',
                                                dataPath: (dataPath || '') + '.ageDistribution[\'80+\']',
                                                schemaPath: '#/definitions/AgeDistribution/properties/80%2B/multipleOf',
                                                params: {
                                                  multipleOf: 1
                                                },
                                                message: 'should be multiple of 1'
                                              }];
                                              return false;
                                            }
                                          }
                                        }
                                        var valid3 = errors === errs_3;
                                      }
                                    }
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
                    dataPath: (dataPath || '') + '.ageDistribution',
                    schemaPath: '#/definitions/AgeDistribution/type',
                    params: {
                      type: 'object'
                    },
                    message: 'should be object'
                  }];
                  return false;
                }
                var valid2 = errors === errs_2;
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
    "required": ["country", "ageDistribution"],
    "additionalProperties": false,
    "properties": {
      "country": {
        "type": "string",
        "minLength": 1
      },
      "ageDistribution": {
        "$ref": "#/definitions/AgeDistribution"
      }
    }
  };
  refVal1.errors = null;
  refVal[1] = refVal1;
  var refVal2 = {
    "type": "object",
    "required": ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80+"],
    "additionalProperties": false,
    "properties": {
      "0-9": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      },
      "10-19": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      },
      "20-29": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      },
      "30-39": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      },
      "40-49": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      },
      "50-59": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      },
      "60-69": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      },
      "70-79": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      },
      "80+": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      }
    }
  };
  refVal[2] = refVal2;
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=schemas/CountryAgeDistribution.yml */
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
  "$id": "schemas/CountryAgeDistribution.yml",
  "title": "CountryAgeDistribution",
  "type": "array",
  "items": {
    "$ref": "#/definitions/AgeDistributionForOneCountry"
  },
  "definitions": {
    "AgeDistributionForOneCountry": {
      "type": "object",
      "required": ["country", "ageDistribution"],
      "additionalProperties": false,
      "properties": {
        "country": {
          "type": "string",
          "minLength": 1
        },
        "ageDistribution": {
          "$ref": "#/definitions/AgeDistribution"
        }
      }
    },
    "AgeDistribution": {
      "type": "object",
      "required": ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80+"],
      "additionalProperties": false,
      "properties": {
        "0-9": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        },
        "10-19": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        },
        "20-29": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        },
        "30-39": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        },
        "40-49": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        },
        "50-59": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        },
        "60-69": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        },
        "70-79": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        },
        "80+": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        }
      }
    }
  }
};
validate.errors = null;
module.exports = validate;