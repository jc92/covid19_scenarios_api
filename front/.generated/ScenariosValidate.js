'use strict';
var formats = require('ajv/lib/compile/formats')();
var ucs2length = require('ajv/lib/compile/ucs2length');
var validate = (function() {
  var pattern0 = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
  var refVal = [];
  var refVal1 = (function() {
    var pattern0 = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null;
      var errors = 0;
      if (rootData === undefined) rootData = data;
      if ((data && typeof data === "object" && !Array.isArray(data))) {
        if (true) {
          var errs__0 = errors;
          var valid1 = true;
          for (var key0 in data) {
            var isAdditional0 = !(false || key0 == 'country' || key0 == 'allParams');
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
              if (data.allParams === undefined) {
                valid1 = false;
                validate.errors = [{
                  keyword: 'required',
                  dataPath: (dataPath || '') + "",
                  schemaPath: '#/required',
                  params: {
                    missingProperty: 'allParams'
                  },
                  message: 'should have required property \'allParams\''
                }];
                return false;
              } else {
                var errs_1 = errors;
                if (!refVal2(data.allParams, (dataPath || '') + '.allParams', data, 'allParams', rootData)) {
                  if (vErrors === null) vErrors = refVal2.errors;
                  else vErrors = vErrors.concat(refVal2.errors);
                  errors = vErrors.length;
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
    "required": ["country", "allParams"],
    "additionalProperties": false,
    "properties": {
      "country": {
        "type": "string",
        "minLength": 1
      },
      "allParams": {
        "$ref": "#/definitions/AllParams"
      }
    }
  };
  refVal1.errors = null;
  refVal[1] = refVal1;
  var refVal2 = (function() {
    var pattern0 = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null;
      var errors = 0;
      if (rootData === undefined) rootData = data;
      if ((data && typeof data === "object" && !Array.isArray(data))) {
        if (true) {
          var errs__0 = errors;
          var valid1 = true;
          for (var key0 in data) {
            var isAdditional0 = !(false || key0 == 'population' || key0 == 'epidemiological' || key0 == 'simulation' || key0 == 'containment');
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
            var data1 = data.population;
            if (data1 === undefined) {
              valid1 = false;
              validate.errors = [{
                keyword: 'required',
                dataPath: (dataPath || '') + "",
                schemaPath: '#/required',
                params: {
                  missingProperty: 'population'
                },
                message: 'should have required property \'population\''
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
                    var isAdditional2 = !(false || key2 == 'populationServed' || key2 == 'country' || key2 == 'cases' || key2 == 'initialNumberOfCases' || key2 == 'importsPerDay' || key2 == 'hospitalBeds' || key2 == 'ICUBeds');
                    if (isAdditional2) {
                      valid3 = false;
                      validate.errors = [{
                        keyword: 'additionalProperties',
                        dataPath: (dataPath || '') + '.population',
                        schemaPath: '#/definitions/PopulationData/additionalProperties',
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
                    var data2 = data1.populationServed;
                    if (data2 === undefined) {
                      valid3 = false;
                      validate.errors = [{
                        keyword: 'required',
                        dataPath: (dataPath || '') + '.population',
                        schemaPath: '#/definitions/PopulationData/required',
                        params: {
                          missingProperty: 'populationServed'
                        },
                        message: 'should have required property \'populationServed\''
                      }];
                      return false;
                    } else {
                      var errs_3 = errors;
                      if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                        validate.errors = [{
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.population.populationServed',
                          schemaPath: '#/definitions/PopulationData/properties/populationServed/type',
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
                            dataPath: (dataPath || '') + '.population.populationServed',
                            schemaPath: '#/definitions/PopulationData/properties/populationServed/minimum',
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
                              dataPath: (dataPath || '') + '.population.populationServed',
                              schemaPath: '#/definitions/PopulationData/properties/populationServed/multipleOf',
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
                      var data2 = data1.country;
                      if (data2 === undefined) {
                        valid3 = false;
                        validate.errors = [{
                          keyword: 'required',
                          dataPath: (dataPath || '') + '.population',
                          schemaPath: '#/definitions/PopulationData/required',
                          params: {
                            missingProperty: 'country'
                          },
                          message: 'should have required property \'country\''
                        }];
                        return false;
                      } else {
                        var errs_3 = errors;
                        if (typeof data2 === "string") {
                          if (ucs2length(data2) < 1) {
                            validate.errors = [{
                              keyword: 'minLength',
                              dataPath: (dataPath || '') + '.population.country',
                              schemaPath: '#/definitions/PopulationData/properties/country/minLength',
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
                            dataPath: (dataPath || '') + '.population.country',
                            schemaPath: '#/definitions/PopulationData/properties/country/type',
                            params: {
                              type: 'string'
                            },
                            message: 'should be string'
                          }];
                          return false;
                        }
                        var valid3 = errors === errs_3;
                      }
                      if (valid3) {
                        var data2 = data1.cases;
                        if (data2 === undefined) {
                          valid3 = false;
                          validate.errors = [{
                            keyword: 'required',
                            dataPath: (dataPath || '') + '.population',
                            schemaPath: '#/definitions/PopulationData/required',
                            params: {
                              missingProperty: 'cases'
                            },
                            message: 'should have required property \'cases\''
                          }];
                          return false;
                        } else {
                          var errs_3 = errors;
                          if (typeof data2 === "string") {
                            if (ucs2length(data2) < 1) {
                              validate.errors = [{
                                keyword: 'minLength',
                                dataPath: (dataPath || '') + '.population.cases',
                                schemaPath: '#/definitions/PopulationData/properties/cases/minLength',
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
                              dataPath: (dataPath || '') + '.population.cases',
                              schemaPath: '#/definitions/PopulationData/properties/cases/type',
                              params: {
                                type: 'string'
                              },
                              message: 'should be string'
                            }];
                            return false;
                          }
                          var valid3 = errors === errs_3;
                        }
                        if (valid3) {
                          var data2 = data1.initialNumberOfCases;
                          if (data2 === undefined) {
                            valid3 = false;
                            validate.errors = [{
                              keyword: 'required',
                              dataPath: (dataPath || '') + '.population',
                              schemaPath: '#/definitions/PopulationData/required',
                              params: {
                                missingProperty: 'initialNumberOfCases'
                              },
                              message: 'should have required property \'initialNumberOfCases\''
                            }];
                            return false;
                          } else {
                            var errs_3 = errors;
                            if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                              validate.errors = [{
                                keyword: 'type',
                                dataPath: (dataPath || '') + '.population.initialNumberOfCases',
                                schemaPath: '#/definitions/PopulationData/properties/initialNumberOfCases/type',
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
                                  dataPath: (dataPath || '') + '.population.initialNumberOfCases',
                                  schemaPath: '#/definitions/PopulationData/properties/initialNumberOfCases/minimum',
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
                                    dataPath: (dataPath || '') + '.population.initialNumberOfCases',
                                    schemaPath: '#/definitions/PopulationData/properties/initialNumberOfCases/multipleOf',
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
                            var data2 = data1.importsPerDay;
                            if (data2 === undefined) {
                              valid3 = false;
                              validate.errors = [{
                                keyword: 'required',
                                dataPath: (dataPath || '') + '.population',
                                schemaPath: '#/definitions/PopulationData/required',
                                params: {
                                  missingProperty: 'importsPerDay'
                                },
                                message: 'should have required property \'importsPerDay\''
                              }];
                              return false;
                            } else {
                              var errs_3 = errors;
                              if (typeof data2 === "number") {
                                if (data2 < 0 || data2 !== data2) {
                                  validate.errors = [{
                                    keyword: 'minimum',
                                    dataPath: (dataPath || '') + '.population.importsPerDay',
                                    schemaPath: '#/definitions/PopulationData/properties/importsPerDay/minimum',
                                    params: {
                                      comparison: '>=',
                                      limit: 0,
                                      exclusive: false
                                    },
                                    message: 'should be >= 0'
                                  }];
                                  return false;
                                }
                              } else {
                                validate.errors = [{
                                  keyword: 'type',
                                  dataPath: (dataPath || '') + '.population.importsPerDay',
                                  schemaPath: '#/definitions/PopulationData/properties/importsPerDay/type',
                                  params: {
                                    type: 'number'
                                  },
                                  message: 'should be number'
                                }];
                                return false;
                              }
                              var valid3 = errors === errs_3;
                            }
                            if (valid3) {
                              var data2 = data1.hospitalBeds;
                              if (data2 === undefined) {
                                valid3 = false;
                                validate.errors = [{
                                  keyword: 'required',
                                  dataPath: (dataPath || '') + '.population',
                                  schemaPath: '#/definitions/PopulationData/required',
                                  params: {
                                    missingProperty: 'hospitalBeds'
                                  },
                                  message: 'should have required property \'hospitalBeds\''
                                }];
                                return false;
                              } else {
                                var errs_3 = errors;
                                if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                                  validate.errors = [{
                                    keyword: 'type',
                                    dataPath: (dataPath || '') + '.population.hospitalBeds',
                                    schemaPath: '#/definitions/PopulationData/properties/hospitalBeds/type',
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
                                      dataPath: (dataPath || '') + '.population.hospitalBeds',
                                      schemaPath: '#/definitions/PopulationData/properties/hospitalBeds/minimum',
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
                                        dataPath: (dataPath || '') + '.population.hospitalBeds',
                                        schemaPath: '#/definitions/PopulationData/properties/hospitalBeds/multipleOf',
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
                                var data2 = data1.ICUBeds;
                                if (data2 === undefined) {
                                  valid3 = false;
                                  validate.errors = [{
                                    keyword: 'required',
                                    dataPath: (dataPath || '') + '.population',
                                    schemaPath: '#/definitions/PopulationData/required',
                                    params: {
                                      missingProperty: 'ICUBeds'
                                    },
                                    message: 'should have required property \'ICUBeds\''
                                  }];
                                  return false;
                                } else {
                                  var errs_3 = errors;
                                  if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                                    validate.errors = [{
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.population.ICUBeds',
                                      schemaPath: '#/definitions/PopulationData/properties/ICUBeds/type',
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
                                        dataPath: (dataPath || '') + '.population.ICUBeds',
                                        schemaPath: '#/definitions/PopulationData/properties/ICUBeds/minimum',
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
                                          dataPath: (dataPath || '') + '.population.ICUBeds',
                                          schemaPath: '#/definitions/PopulationData/properties/ICUBeds/multipleOf',
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
              } else {
                validate.errors = [{
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.population',
                  schemaPath: '#/definitions/PopulationData/type',
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
            if (valid1) {
              var data1 = data.epidemiological;
              if (data1 === undefined) {
                valid1 = false;
                validate.errors = [{
                  keyword: 'required',
                  dataPath: (dataPath || '') + "",
                  schemaPath: '#/required',
                  params: {
                    missingProperty: 'epidemiological'
                  },
                  message: 'should have required property \'epidemiological\''
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
                      var isAdditional2 = !(false || key2 == 'latencyTime' || key2 == 'infectiousPeriod' || key2 == 'lengthHospitalStay' || key2 == 'lengthICUStay' || key2 == 'seasonalForcing' || key2 == 'peakMonth' || key2 == 'overflowSeverity' || key2 == 'r0');
                      if (isAdditional2) {
                        valid3 = false;
                        validate.errors = [{
                          keyword: 'additionalProperties',
                          dataPath: (dataPath || '') + '.epidemiological',
                          schemaPath: '#/definitions/EpidemiologicalData/additionalProperties',
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
                      var data2 = data1.latencyTime;
                      if (data2 === undefined) {
                        valid3 = false;
                        validate.errors = [{
                          keyword: 'required',
                          dataPath: (dataPath || '') + '.epidemiological',
                          schemaPath: '#/definitions/EpidemiologicalData/required',
                          params: {
                            missingProperty: 'latencyTime'
                          },
                          message: 'should have required property \'latencyTime\''
                        }];
                        return false;
                      } else {
                        var errs_3 = errors;
                        if (typeof data2 === "number") {
                          if (data2 < 1 || data2 !== data2) {
                            validate.errors = [{
                              keyword: 'minimum',
                              dataPath: (dataPath || '') + '.epidemiological.latencyTime',
                              schemaPath: '#/definitions/EpidemiologicalData/properties/latencyTime/minimum',
                              params: {
                                comparison: '>=',
                                limit: 1,
                                exclusive: false
                              },
                              message: 'should be >= 1'
                            }];
                            return false;
                          }
                        } else {
                          validate.errors = [{
                            keyword: 'type',
                            dataPath: (dataPath || '') + '.epidemiological.latencyTime',
                            schemaPath: '#/definitions/EpidemiologicalData/properties/latencyTime/type',
                            params: {
                              type: 'number'
                            },
                            message: 'should be number'
                          }];
                          return false;
                        }
                        var valid3 = errors === errs_3;
                      }
                      if (valid3) {
                        var data2 = data1.infectiousPeriod;
                        if (data2 === undefined) {
                          valid3 = false;
                          validate.errors = [{
                            keyword: 'required',
                            dataPath: (dataPath || '') + '.epidemiological',
                            schemaPath: '#/definitions/EpidemiologicalData/required',
                            params: {
                              missingProperty: 'infectiousPeriod'
                            },
                            message: 'should have required property \'infectiousPeriod\''
                          }];
                          return false;
                        } else {
                          var errs_3 = errors;
                          if (typeof data2 === "number") {
                            if (data2 < 1 || data2 !== data2) {
                              validate.errors = [{
                                keyword: 'minimum',
                                dataPath: (dataPath || '') + '.epidemiological.infectiousPeriod',
                                schemaPath: '#/definitions/EpidemiologicalData/properties/infectiousPeriod/minimum',
                                params: {
                                  comparison: '>=',
                                  limit: 1,
                                  exclusive: false
                                },
                                message: 'should be >= 1'
                              }];
                              return false;
                            }
                          } else {
                            validate.errors = [{
                              keyword: 'type',
                              dataPath: (dataPath || '') + '.epidemiological.infectiousPeriod',
                              schemaPath: '#/definitions/EpidemiologicalData/properties/infectiousPeriod/type',
                              params: {
                                type: 'number'
                              },
                              message: 'should be number'
                            }];
                            return false;
                          }
                          var valid3 = errors === errs_3;
                        }
                        if (valid3) {
                          var data2 = data1.lengthHospitalStay;
                          if (data2 === undefined) {
                            valid3 = false;
                            validate.errors = [{
                              keyword: 'required',
                              dataPath: (dataPath || '') + '.epidemiological',
                              schemaPath: '#/definitions/EpidemiologicalData/required',
                              params: {
                                missingProperty: 'lengthHospitalStay'
                              },
                              message: 'should have required property \'lengthHospitalStay\''
                            }];
                            return false;
                          } else {
                            var errs_3 = errors;
                            if (typeof data2 === "number") {
                              if (data2 < 1 || data2 !== data2) {
                                validate.errors = [{
                                  keyword: 'minimum',
                                  dataPath: (dataPath || '') + '.epidemiological.lengthHospitalStay',
                                  schemaPath: '#/definitions/EpidemiologicalData/properties/lengthHospitalStay/minimum',
                                  params: {
                                    comparison: '>=',
                                    limit: 1,
                                    exclusive: false
                                  },
                                  message: 'should be >= 1'
                                }];
                                return false;
                              }
                            } else {
                              validate.errors = [{
                                keyword: 'type',
                                dataPath: (dataPath || '') + '.epidemiological.lengthHospitalStay',
                                schemaPath: '#/definitions/EpidemiologicalData/properties/lengthHospitalStay/type',
                                params: {
                                  type: 'number'
                                },
                                message: 'should be number'
                              }];
                              return false;
                            }
                            var valid3 = errors === errs_3;
                          }
                          if (valid3) {
                            var data2 = data1.lengthICUStay;
                            if (data2 === undefined) {
                              valid3 = false;
                              validate.errors = [{
                                keyword: 'required',
                                dataPath: (dataPath || '') + '.epidemiological',
                                schemaPath: '#/definitions/EpidemiologicalData/required',
                                params: {
                                  missingProperty: 'lengthICUStay'
                                },
                                message: 'should have required property \'lengthICUStay\''
                              }];
                              return false;
                            } else {
                              var errs_3 = errors;
                              if (typeof data2 === "number") {
                                if (data2 < 1 || data2 !== data2) {
                                  validate.errors = [{
                                    keyword: 'minimum',
                                    dataPath: (dataPath || '') + '.epidemiological.lengthICUStay',
                                    schemaPath: '#/definitions/EpidemiologicalData/properties/lengthICUStay/minimum',
                                    params: {
                                      comparison: '>=',
                                      limit: 1,
                                      exclusive: false
                                    },
                                    message: 'should be >= 1'
                                  }];
                                  return false;
                                }
                              } else {
                                validate.errors = [{
                                  keyword: 'type',
                                  dataPath: (dataPath || '') + '.epidemiological.lengthICUStay',
                                  schemaPath: '#/definitions/EpidemiologicalData/properties/lengthICUStay/type',
                                  params: {
                                    type: 'number'
                                  },
                                  message: 'should be number'
                                }];
                                return false;
                              }
                              var valid3 = errors === errs_3;
                            }
                            if (valid3) {
                              var data2 = data1.seasonalForcing;
                              if (data2 === undefined) {
                                valid3 = false;
                                validate.errors = [{
                                  keyword: 'required',
                                  dataPath: (dataPath || '') + '.epidemiological',
                                  schemaPath: '#/definitions/EpidemiologicalData/required',
                                  params: {
                                    missingProperty: 'seasonalForcing'
                                  },
                                  message: 'should have required property \'seasonalForcing\''
                                }];
                                return false;
                              } else {
                                var errs_3 = errors;
                                if (typeof data2 === "number") {
                                  if (data2 < 0 || data2 !== data2) {
                                    validate.errors = [{
                                      keyword: 'minimum',
                                      dataPath: (dataPath || '') + '.epidemiological.seasonalForcing',
                                      schemaPath: '#/definitions/EpidemiologicalData/properties/seasonalForcing/minimum',
                                      params: {
                                        comparison: '>=',
                                        limit: 0,
                                        exclusive: false
                                      },
                                      message: 'should be >= 0'
                                    }];
                                    return false;
                                  }
                                } else {
                                  validate.errors = [{
                                    keyword: 'type',
                                    dataPath: (dataPath || '') + '.epidemiological.seasonalForcing',
                                    schemaPath: '#/definitions/EpidemiologicalData/properties/seasonalForcing/type',
                                    params: {
                                      type: 'number'
                                    },
                                    message: 'should be number'
                                  }];
                                  return false;
                                }
                                var valid3 = errors === errs_3;
                              }
                              if (valid3) {
                                var data2 = data1.peakMonth;
                                if (data2 === undefined) {
                                  valid3 = false;
                                  validate.errors = [{
                                    keyword: 'required',
                                    dataPath: (dataPath || '') + '.epidemiological',
                                    schemaPath: '#/definitions/EpidemiologicalData/required',
                                    params: {
                                      missingProperty: 'peakMonth'
                                    },
                                    message: 'should have required property \'peakMonth\''
                                  }];
                                  return false;
                                } else {
                                  var errs_3 = errors;
                                  if ((typeof data2 !== "number" || (data2 % 1) || data2 !== data2)) {
                                    validate.errors = [{
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.epidemiological.peakMonth',
                                      schemaPath: '#/definitions/EpidemiologicalData/properties/peakMonth/type',
                                      params: {
                                        type: 'integer'
                                      },
                                      message: 'should be integer'
                                    }];
                                    return false;
                                  }
                                  if (typeof data2 === "number") {
                                    if (data2 > 11 || data2 !== data2) {
                                      validate.errors = [{
                                        keyword: 'maximum',
                                        dataPath: (dataPath || '') + '.epidemiological.peakMonth',
                                        schemaPath: '#/definitions/EpidemiologicalData/properties/peakMonth/maximum',
                                        params: {
                                          comparison: '<=',
                                          limit: 11,
                                          exclusive: false
                                        },
                                        message: 'should be <= 11'
                                      }];
                                      return false;
                                    } else {
                                      if (data2 < 0 || data2 !== data2) {
                                        validate.errors = [{
                                          keyword: 'minimum',
                                          dataPath: (dataPath || '') + '.epidemiological.peakMonth',
                                          schemaPath: '#/definitions/EpidemiologicalData/properties/peakMonth/minimum',
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
                                            dataPath: (dataPath || '') + '.epidemiological.peakMonth',
                                            schemaPath: '#/definitions/EpidemiologicalData/properties/peakMonth/multipleOf',
                                            params: {
                                              multipleOf: 1
                                            },
                                            message: 'should be multiple of 1'
                                          }];
                                          return false;
                                        }
                                      }
                                    }
                                  }
                                  var valid3 = errors === errs_3;
                                }
                                if (valid3) {
                                  var data2 = data1.overflowSeverity;
                                  if (data2 === undefined) {
                                    valid3 = false;
                                    validate.errors = [{
                                      keyword: 'required',
                                      dataPath: (dataPath || '') + '.epidemiological',
                                      schemaPath: '#/definitions/EpidemiologicalData/required',
                                      params: {
                                        missingProperty: 'overflowSeverity'
                                      },
                                      message: 'should have required property \'overflowSeverity\''
                                    }];
                                    return false;
                                  } else {
                                    var errs_3 = errors;
                                    if (typeof data2 === "number") {
                                      if (data2 < 0 || data2 !== data2) {
                                        validate.errors = [{
                                          keyword: 'minimum',
                                          dataPath: (dataPath || '') + '.epidemiological.overflowSeverity',
                                          schemaPath: '#/definitions/EpidemiologicalData/properties/overflowSeverity/minimum',
                                          params: {
                                            comparison: '>=',
                                            limit: 0,
                                            exclusive: false
                                          },
                                          message: 'should be >= 0'
                                        }];
                                        return false;
                                      }
                                    } else {
                                      validate.errors = [{
                                        keyword: 'type',
                                        dataPath: (dataPath || '') + '.epidemiological.overflowSeverity',
                                        schemaPath: '#/definitions/EpidemiologicalData/properties/overflowSeverity/type',
                                        params: {
                                          type: 'number'
                                        },
                                        message: 'should be number'
                                      }];
                                      return false;
                                    }
                                    var valid3 = errors === errs_3;
                                  }
                                  if (valid3) {
                                    var data2 = data1.r0;
                                    if (data2 === undefined) {
                                      valid3 = false;
                                      validate.errors = [{
                                        keyword: 'required',
                                        dataPath: (dataPath || '') + '.epidemiological',
                                        schemaPath: '#/definitions/EpidemiologicalData/required',
                                        params: {
                                          missingProperty: 'r0'
                                        },
                                        message: 'should have required property \'r0\''
                                      }];
                                      return false;
                                    } else {
                                      var errs_3 = errors;
                                      if (typeof data2 === "number") {
                                        if (data2 < 0 || data2 !== data2) {
                                          validate.errors = [{
                                            keyword: 'minimum',
                                            dataPath: (dataPath || '') + '.epidemiological.r0',
                                            schemaPath: '#/definitions/EpidemiologicalData/properties/r0/minimum',
                                            params: {
                                              comparison: '>=',
                                              limit: 0,
                                              exclusive: false
                                            },
                                            message: 'should be >= 0'
                                          }];
                                          return false;
                                        }
                                      } else {
                                        validate.errors = [{
                                          keyword: 'type',
                                          dataPath: (dataPath || '') + '.epidemiological.r0',
                                          schemaPath: '#/definitions/EpidemiologicalData/properties/r0/type',
                                          params: {
                                            type: 'number'
                                          },
                                          message: 'should be number'
                                        }];
                                        return false;
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
                } else {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.epidemiological',
                    schemaPath: '#/definitions/EpidemiologicalData/type',
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
              if (valid1) {
                if (data.simulation === undefined) {
                  valid1 = false;
                  validate.errors = [{
                    keyword: 'required',
                    dataPath: (dataPath || '') + "",
                    schemaPath: '#/required',
                    params: {
                      missingProperty: 'simulation'
                    },
                    message: 'should have required property \'simulation\''
                  }];
                  return false;
                } else {
                  var errs_1 = errors;
                  if (!refVal5(data.simulation, (dataPath || '') + '.simulation', data, 'simulation', rootData)) {
                    if (vErrors === null) vErrors = refVal5.errors;
                    else vErrors = vErrors.concat(refVal5.errors);
                    errors = vErrors.length;
                  }
                  var valid1 = errors === errs_1;
                }
                if (valid1) {
                  if (data.containment === undefined) {
                    valid1 = false;
                    validate.errors = [{
                      keyword: 'required',
                      dataPath: (dataPath || '') + "",
                      schemaPath: '#/required',
                      params: {
                        missingProperty: 'containment'
                      },
                      message: 'should have required property \'containment\''
                    }];
                    return false;
                  } else {
                    var errs_1 = errors;
                    if (!refVal7(data.containment, (dataPath || '') + '.containment', data, 'containment', rootData)) {
                      if (vErrors === null) vErrors = refVal7.errors;
                      else vErrors = vErrors.concat(refVal7.errors);
                      errors = vErrors.length;
                    }
                    var valid1 = errors === errs_1;
                  }
                }
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
  refVal2.schema = {
    "type": "object",
    "required": ["population", "epidemiological", "simulation", "containment"],
    "additionalProperties": false,
    "properties": {
      "population": {
        "$ref": "#/definitions/PopulationData"
      },
      "epidemiological": {
        "$ref": "#/definitions/EpidemiologicalData"
      },
      "simulation": {
        "$ref": "#/definitions/SimulationData"
      },
      "containment": {
        "$ref": "#/definitions/ContainmentData"
      }
    }
  };
  refVal2.errors = null;
  refVal[2] = refVal2;
  var refVal3 = {
    "type": "object",
    "required": ["populationServed", "country", "cases", "initialNumberOfCases", "importsPerDay", "hospitalBeds", "ICUBeds"],
    "additionalProperties": false,
    "properties": {
      "populationServed": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      },
      "country": {
        "type": "string",
        "minLength": 1
      },
      "cases": {
        "type": "string",
        "minLength": 1
      },
      "initialNumberOfCases": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      },
      "importsPerDay": {
        "type": "number",
        "minimum": 0
      },
      "hospitalBeds": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      },
      "ICUBeds": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0
      }
    }
  };
  refVal[3] = refVal3;
  var refVal4 = {
    "type": "object",
    "required": ["latencyTime", "infectiousPeriod", "lengthHospitalStay", "lengthICUStay", "seasonalForcing", "peakMonth", "overflowSeverity", "r0"],
    "additionalProperties": false,
    "properties": {
      "latencyTime": {
        "type": "number",
        "minimum": 1
      },
      "infectiousPeriod": {
        "type": "number",
        "minimum": 1
      },
      "lengthHospitalStay": {
        "type": "number",
        "minimum": 1
      },
      "lengthICUStay": {
        "type": "number",
        "minimum": 1
      },
      "seasonalForcing": {
        "type": "number",
        "minimum": 0
      },
      "peakMonth": {
        "type": "integer",
        "multipleOf": 1,
        "minimum": 0,
        "maximum": 11
      },
      "overflowSeverity": {
        "type": "number",
        "minimum": 0
      },
      "r0": {
        "type": "number",
        "minimum": 0
      }
    }
  };
  refVal[4] = refVal4;
  var refVal5 = (function() {
    var pattern0 = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null;
      var errors = 0;
      if ((data && typeof data === "object" && !Array.isArray(data))) {
        if (true) {
          var errs__0 = errors;
          var valid1 = true;
          for (var key0 in data) {
            var isAdditional0 = !(false || key0 == 'simulationTimeRange' || key0 == 'numberStochasticRuns');
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
            var data1 = data.simulationTimeRange;
            if (data1 === undefined) {
              valid1 = false;
              validate.errors = [{
                keyword: 'required',
                dataPath: (dataPath || '') + "",
                schemaPath: '#/required',
                params: {
                  missingProperty: 'simulationTimeRange'
                },
                message: 'should have required property \'simulationTimeRange\''
              }];
              return false;
            } else {
              var errs_1 = errors;
              var errs_2 = errors;
              if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
                if (true) {
                  var errs__2 = errors;
                  var valid3 = true;
                  var data2 = data1.tMin;
                  if (data2 === undefined) {
                    valid3 = false;
                    validate.errors = [{
                      keyword: 'required',
                      dataPath: (dataPath || '') + '.simulationTimeRange',
                      schemaPath: '#/definitions/DateRange/required',
                      params: {
                        missingProperty: 'tMin'
                      },
                      message: 'should have required property \'tMin\''
                    }];
                    return false;
                  } else {
                    var errs_3 = errors;
                    if (errors === errs_3) {
                      if (typeof data2 === "string") {
                        if (!formats.date.test(data2)) {
                          validate.errors = [{
                            keyword: 'format',
                            dataPath: (dataPath || '') + '.simulationTimeRange.tMin',
                            schemaPath: '#/definitions/DateRange/properties/tMin/format',
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
                          dataPath: (dataPath || '') + '.simulationTimeRange.tMin',
                          schemaPath: '#/definitions/DateRange/properties/tMin/type',
                          params: {
                            type: 'string'
                          },
                          message: 'should be string'
                        }];
                        return false;
                      }
                    }
                    var valid3 = errors === errs_3;
                  }
                  if (valid3) {
                    var data2 = data1.tMax;
                    if (data2 === undefined) {
                      valid3 = false;
                      validate.errors = [{
                        keyword: 'required',
                        dataPath: (dataPath || '') + '.simulationTimeRange',
                        schemaPath: '#/definitions/DateRange/required',
                        params: {
                          missingProperty: 'tMax'
                        },
                        message: 'should have required property \'tMax\''
                      }];
                      return false;
                    } else {
                      var errs_3 = errors;
                      if (errors === errs_3) {
                        if (typeof data2 === "string") {
                          if (!formats.date.test(data2)) {
                            validate.errors = [{
                              keyword: 'format',
                              dataPath: (dataPath || '') + '.simulationTimeRange.tMax',
                              schemaPath: '#/definitions/DateRange/properties/tMax/format',
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
                            dataPath: (dataPath || '') + '.simulationTimeRange.tMax',
                            schemaPath: '#/definitions/DateRange/properties/tMax/type',
                            params: {
                              type: 'string'
                            },
                            message: 'should be string'
                          }];
                          return false;
                        }
                      }
                      var valid3 = errors === errs_3;
                    }
                  }
                }
              } else {
                validate.errors = [{
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.simulationTimeRange',
                  schemaPath: '#/definitions/DateRange/type',
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
            if (valid1) {
              var data1 = data.numberStochasticRuns;
              if (data1 === undefined) {
                valid1 = false;
                validate.errors = [{
                  keyword: 'required',
                  dataPath: (dataPath || '') + "",
                  schemaPath: '#/required',
                  params: {
                    missingProperty: 'numberStochasticRuns'
                  },
                  message: 'should have required property \'numberStochasticRuns\''
                }];
                return false;
              } else {
                var errs_1 = errors;
                if (typeof data1 === "number") {
                  if (data1 < 0 || data1 !== data1) {
                    validate.errors = [{
                      keyword: 'minimum',
                      dataPath: (dataPath || '') + '.numberStochasticRuns',
                      schemaPath: '#/properties/numberStochasticRuns/minimum',
                      params: {
                        comparison: '>=',
                        limit: 0,
                        exclusive: false
                      },
                      message: 'should be >= 0'
                    }];
                    return false;
                  }
                } else {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.numberStochasticRuns',
                    schemaPath: '#/properties/numberStochasticRuns/type',
                    params: {
                      type: 'number'
                    },
                    message: 'should be number'
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
  refVal5.schema = {
    "type": "object",
    "required": ["simulationTimeRange", "numberStochasticRuns"],
    "additionalProperties": false,
    "properties": {
      "simulationTimeRange": {
        "$ref": "#/definitions/DateRange"
      },
      "numberStochasticRuns": {
        "type": "number",
        "minimum": 0
      }
    }
  };
  refVal5.errors = null;
  refVal[5] = refVal5;
  var refVal6 = {
    "type": "object",
    "required": ["tMin", "tMax"],
    "properties": {
      "tMin": {
        "type": "string",
        "format": "date"
      },
      "tMax": {
        "type": "string",
        "format": "date"
      }
    }
  };
  refVal[6] = refVal6;
  var refVal7 = (function() {
    var pattern0 = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null;
      var errors = 0;
      if (rootData === undefined) rootData = data;
      if ((data && typeof data === "object" && !Array.isArray(data))) {
        if (true) {
          var errs__0 = errors;
          var valid1 = true;
          for (var key0 in data) {
            var isAdditional0 = !(false || key0 == 'mitigationIntervals' || key0 == 'numberPoints');
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
            var data1 = data.mitigationIntervals;
            if (data1 === undefined) {
              valid1 = false;
              validate.errors = [{
                keyword: 'required',
                dataPath: (dataPath || '') + "",
                schemaPath: '#/required',
                params: {
                  missingProperty: 'mitigationIntervals'
                },
                message: 'should have required property \'mitigationIntervals\''
              }];
              return false;
            } else {
              var errs_1 = errors;
              if (Array.isArray(data1)) {
                var errs__1 = errors;
                var valid1;
                for (var i1 = 0; i1 < data1.length; i1++) {
                  var errs_2 = errors;
                  if (!refVal8(data1[i1], (dataPath || '') + '.mitigationIntervals[' + i1 + ']', data1, i1, rootData)) {
                    if (vErrors === null) vErrors = refVal8.errors;
                    else vErrors = vErrors.concat(refVal8.errors);
                    errors = vErrors.length;
                  }
                  var valid2 = errors === errs_2;
                  if (!valid2) break;
                }
              } else {
                validate.errors = [{
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.mitigationIntervals',
                  schemaPath: '#/properties/mitigationIntervals/type',
                  params: {
                    type: 'array'
                  },
                  message: 'should be array'
                }];
                return false;
              }
              var valid1 = errors === errs_1;
            }
            if (valid1) {
              if (data.numberPoints === undefined) {
                valid1 = true;
              } else {
                var errs_1 = errors;
                if (typeof data.numberPoints !== "number") {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.numberPoints',
                    schemaPath: '#/properties/numberPoints/type',
                    params: {
                      type: 'number'
                    },
                    message: 'should be number'
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
  refVal7.schema = {
    "type": "object",
    "required": ["mitigationIntervals"],
    "additionalProperties": false,
    "properties": {
      "mitigationIntervals": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/MitigationInterval"
        }
      },
      "numberPoints": {
        "type": "number"
      }
    }
  };
  refVal7.errors = null;
  refVal[7] = refVal7;
  var refVal8 = (function() {
    var pattern0 = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null;
      var errors = 0;
      if ((data && typeof data === "object" && !Array.isArray(data))) {
        if (true) {
          var errs__0 = errors;
          var valid1 = true;
          for (var key0 in data) {
            var isAdditional0 = !(false || key0 == 'id' || key0 == 'name' || key0 == 'color' || key0 == 'timeRange' || key0 == 'mitigationValue');
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
            var data1 = data.id;
            if (data1 === undefined) {
              valid1 = false;
              validate.errors = [{
                keyword: 'required',
                dataPath: (dataPath || '') + "",
                schemaPath: '#/required',
                params: {
                  missingProperty: 'id'
                },
                message: 'should have required property \'id\''
              }];
              return false;
            } else {
              var errs_1 = errors;
              if (errors === errs_1) {
                if (typeof data1 === "string") {
                  if (!formats.uuid.test(data1)) {
                    validate.errors = [{
                      keyword: 'format',
                      dataPath: (dataPath || '') + '.id',
                      schemaPath: '#/properties/id/format',
                      params: {
                        format: 'uuid'
                      },
                      message: 'should match format "uuid"'
                    }];
                    return false;
                  }
                } else {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.id',
                    schemaPath: '#/properties/id/type',
                    params: {
                      type: 'string'
                    },
                    message: 'should be string'
                  }];
                  return false;
                }
              }
              var valid1 = errors === errs_1;
            }
            if (valid1) {
              var data1 = data.name;
              if (data1 === undefined) {
                valid1 = false;
                validate.errors = [{
                  keyword: 'required',
                  dataPath: (dataPath || '') + "",
                  schemaPath: '#/required',
                  params: {
                    missingProperty: 'name'
                  },
                  message: 'should have required property \'name\''
                }];
                return false;
              } else {
                var errs_1 = errors;
                if (typeof data1 === "string") {
                  if (ucs2length(data1) < 1) {
                    validate.errors = [{
                      keyword: 'minLength',
                      dataPath: (dataPath || '') + '.name',
                      schemaPath: '#/properties/name/minLength',
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
                    dataPath: (dataPath || '') + '.name',
                    schemaPath: '#/properties/name/type',
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
                var data1 = data.color;
                if (data1 === undefined) {
                  valid1 = false;
                  validate.errors = [{
                    keyword: 'required',
                    dataPath: (dataPath || '') + "",
                    schemaPath: '#/required',
                    params: {
                      missingProperty: 'color'
                    },
                    message: 'should have required property \'color\''
                  }];
                  return false;
                } else {
                  var errs_1 = errors;
                  if (typeof data1 === "string") {
                    if (!pattern0.test(data1)) {
                      validate.errors = [{
                        keyword: 'pattern',
                        dataPath: (dataPath || '') + '.color',
                        schemaPath: '#/properties/color/pattern',
                        params: {
                          pattern: '^#(?:[0-9a-fA-F]{3}){1,2}$'
                        },
                        message: 'should match pattern "^#(?:[0-9a-fA-F]{3}){1,2}$"'
                      }];
                      return false;
                    }
                  } else {
                    validate.errors = [{
                      keyword: 'type',
                      dataPath: (dataPath || '') + '.color',
                      schemaPath: '#/properties/color/type',
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
                  var data1 = data.timeRange;
                  if (data1 === undefined) {
                    valid1 = false;
                    validate.errors = [{
                      keyword: 'required',
                      dataPath: (dataPath || '') + "",
                      schemaPath: '#/required',
                      params: {
                        missingProperty: 'timeRange'
                      },
                      message: 'should have required property \'timeRange\''
                    }];
                    return false;
                  } else {
                    var errs_1 = errors;
                    var errs_2 = errors;
                    if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
                      if (true) {
                        var errs__2 = errors;
                        var valid3 = true;
                        var data2 = data1.tMin;
                        if (data2 === undefined) {
                          valid3 = false;
                          validate.errors = [{
                            keyword: 'required',
                            dataPath: (dataPath || '') + '.timeRange',
                            schemaPath: '#/definitions/DateRange/required',
                            params: {
                              missingProperty: 'tMin'
                            },
                            message: 'should have required property \'tMin\''
                          }];
                          return false;
                        } else {
                          var errs_3 = errors;
                          if (errors === errs_3) {
                            if (typeof data2 === "string") {
                              if (!formats.date.test(data2)) {
                                validate.errors = [{
                                  keyword: 'format',
                                  dataPath: (dataPath || '') + '.timeRange.tMin',
                                  schemaPath: '#/definitions/DateRange/properties/tMin/format',
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
                                dataPath: (dataPath || '') + '.timeRange.tMin',
                                schemaPath: '#/definitions/DateRange/properties/tMin/type',
                                params: {
                                  type: 'string'
                                },
                                message: 'should be string'
                              }];
                              return false;
                            }
                          }
                          var valid3 = errors === errs_3;
                        }
                        if (valid3) {
                          var data2 = data1.tMax;
                          if (data2 === undefined) {
                            valid3 = false;
                            validate.errors = [{
                              keyword: 'required',
                              dataPath: (dataPath || '') + '.timeRange',
                              schemaPath: '#/definitions/DateRange/required',
                              params: {
                                missingProperty: 'tMax'
                              },
                              message: 'should have required property \'tMax\''
                            }];
                            return false;
                          } else {
                            var errs_3 = errors;
                            if (errors === errs_3) {
                              if (typeof data2 === "string") {
                                if (!formats.date.test(data2)) {
                                  validate.errors = [{
                                    keyword: 'format',
                                    dataPath: (dataPath || '') + '.timeRange.tMax',
                                    schemaPath: '#/definitions/DateRange/properties/tMax/format',
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
                                  dataPath: (dataPath || '') + '.timeRange.tMax',
                                  schemaPath: '#/definitions/DateRange/properties/tMax/type',
                                  params: {
                                    type: 'string'
                                  },
                                  message: 'should be string'
                                }];
                                return false;
                              }
                            }
                            var valid3 = errors === errs_3;
                          }
                        }
                      }
                    } else {
                      validate.errors = [{
                        keyword: 'type',
                        dataPath: (dataPath || '') + '.timeRange',
                        schemaPath: '#/definitions/DateRange/type',
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
                  if (valid1) {
                    var data1 = data.mitigationValue;
                    if (data1 === undefined) {
                      valid1 = false;
                      validate.errors = [{
                        keyword: 'required',
                        dataPath: (dataPath || '') + "",
                        schemaPath: '#/required',
                        params: {
                          missingProperty: 'mitigationValue'
                        },
                        message: 'should have required property \'mitigationValue\''
                      }];
                      return false;
                    } else {
                      var errs_1 = errors;
                      if (typeof data1 === "number") {
                        if (data1 < 0 || data1 !== data1) {
                          validate.errors = [{
                            keyword: 'minimum',
                            dataPath: (dataPath || '') + '.mitigationValue',
                            schemaPath: '#/properties/mitigationValue/minimum',
                            params: {
                              comparison: '>=',
                              limit: 0,
                              exclusive: false
                            },
                            message: 'should be >= 0'
                          }];
                          return false;
                        }
                      } else {
                        validate.errors = [{
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.mitigationValue',
                          schemaPath: '#/properties/mitigationValue/type',
                          params: {
                            type: 'number'
                          },
                          message: 'should be number'
                        }];
                        return false;
                      }
                      var valid1 = errors === errs_1;
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
  refVal8.schema = {
    "type": "object",
    "required": ["id", "name", "color", "timeRange", "mitigationValue"],
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "format": "uuid"
      },
      "name": {
        "type": "string",
        "minLength": 1
      },
      "color": {
        "type": "string",
        "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$"
      },
      "timeRange": {
        "$ref": "#/definitions/DateRange"
      },
      "mitigationValue": {
        "type": "number",
        "minimum": 0
      }
    }
  };
  refVal8.errors = null;
  refVal[8] = refVal8;
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
  "title": "Scenario",
  "type": "array",
  "items": {
    "$ref": "#/definitions/ScenarioForOneCountry"
  },
  "definitions": {
    "ScenarioForOneCountry": {
      "type": "object",
      "required": ["country", "allParams"],
      "additionalProperties": false,
      "properties": {
        "country": {
          "type": "string",
          "minLength": 1
        },
        "allParams": {
          "$ref": "#/definitions/AllParams"
        }
      }
    },
    "AllParams": {
      "type": "object",
      "required": ["population", "epidemiological", "simulation", "containment"],
      "additionalProperties": false,
      "properties": {
        "population": {
          "$ref": "#/definitions/PopulationData"
        },
        "epidemiological": {
          "$ref": "#/definitions/EpidemiologicalData"
        },
        "simulation": {
          "$ref": "#/definitions/SimulationData"
        },
        "containment": {
          "$ref": "#/definitions/ContainmentData"
        }
      }
    },
    "PopulationData": {
      "type": "object",
      "required": ["populationServed", "country", "cases", "initialNumberOfCases", "importsPerDay", "hospitalBeds", "ICUBeds"],
      "additionalProperties": false,
      "properties": {
        "populationServed": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        },
        "country": {
          "type": "string",
          "minLength": 1
        },
        "cases": {
          "type": "string",
          "minLength": 1
        },
        "initialNumberOfCases": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        },
        "importsPerDay": {
          "type": "number",
          "minimum": 0
        },
        "hospitalBeds": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        },
        "ICUBeds": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0
        }
      }
    },
    "EpidemiologicalData": {
      "type": "object",
      "required": ["latencyTime", "infectiousPeriod", "lengthHospitalStay", "lengthICUStay", "seasonalForcing", "peakMonth", "overflowSeverity", "r0"],
      "additionalProperties": false,
      "properties": {
        "latencyTime": {
          "type": "number",
          "minimum": 1
        },
        "infectiousPeriod": {
          "type": "number",
          "minimum": 1
        },
        "lengthHospitalStay": {
          "type": "number",
          "minimum": 1
        },
        "lengthICUStay": {
          "type": "number",
          "minimum": 1
        },
        "seasonalForcing": {
          "type": "number",
          "minimum": 0
        },
        "peakMonth": {
          "type": "integer",
          "multipleOf": 1,
          "minimum": 0,
          "maximum": 11
        },
        "overflowSeverity": {
          "type": "number",
          "minimum": 0
        },
        "r0": {
          "type": "number",
          "minimum": 0
        }
      }
    },
    "SimulationData": {
      "type": "object",
      "required": ["simulationTimeRange", "numberStochasticRuns"],
      "additionalProperties": false,
      "properties": {
        "simulationTimeRange": {
          "$ref": "#/definitions/DateRange"
        },
        "numberStochasticRuns": {
          "type": "number",
          "minimum": 0
        }
      }
    },
    "DateRange": {
      "type": "object",
      "required": ["tMin", "tMax"],
      "properties": {
        "tMin": {
          "type": "string",
          "format": "date"
        },
        "tMax": {
          "type": "string",
          "format": "date"
        }
      }
    },
    "ContainmentData": {
      "type": "object",
      "required": ["mitigationIntervals"],
      "additionalProperties": false,
      "properties": {
        "mitigationIntervals": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/MitigationInterval"
          }
        },
        "numberPoints": {
          "type": "number"
        }
      }
    },
    "MitigationInterval": {
      "type": "object",
      "required": ["id", "name", "color", "timeRange", "mitigationValue"],
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        },
        "name": {
          "type": "string",
          "minLength": 1
        },
        "color": {
          "type": "string",
          "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$"
        },
        "timeRange": {
          "$ref": "#/definitions/DateRange"
        },
        "mitigationValue": {
          "type": "number",
          "minimum": 0
        }
      }
    }
  }
};
validate.errors = null;
module.exports = validate;