// To parse this data:
//
//   import { Convert } from "./file";
//
//   const caseCounts = Convert.toCaseCounts(json);
//   const countryAgeDistribution = Convert.toCountryAgeDistribution(json);
//   const integer = Convert.toInteger(json);
//   const integerPositive = Convert.toIntegerPositive(json);
//   const scenario = Convert.toScenario(json);
//   const severity = Convert.toSeverity(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface CaseCounts {
    country:       string;
    empiricalData: EmpiricalDatum[];
}

export interface EmpiricalDatum {
    cases:         number | null;
    deaths?:       number | null;
    hospitalized?: number | null;
    icu?:          number | null;
    recovered?:    number | null;
    time:          Date;
}

export interface CountryAgeDistribution {
    ageDistribution: AgeDistribution;
    country:         string;
}

export interface AgeDistribution {
    "0-9":   number;
    "10-19": number;
    "20-29": number;
    "30-39": number;
    "40-49": number;
    "50-59": number;
    "60-69": number;
    "70-79": number;
    "80+":   number;
}

export interface Scenario {
    allParams: AllParams;
    country:   string;
}

export interface AllParams {
    containment:     ContainmentData;
    epidemiological: EpidemiologicalData;
    population:      PopulationData;
    simulation:      SimulationData;
}

export interface ContainmentData {
    mitigationIntervals: MitigationInterval[];
    numberPoints?:       number;
}

export interface MitigationInterval {
    color:           string;
    id:              string;
    mitigationValue: number;
    name:            string;
    timeRange:       DateRange;
}

export interface DateRange {
    tMax: Date;
    tMin: Date;
}

export interface EpidemiologicalData {
    infectiousPeriod:   number;
    latencyTime:        number;
    lengthHospitalStay: number;
    lengthICUStay:      number;
    overflowSeverity:   number;
    peakMonth:          number;
    r0:                 number;
    seasonalForcing:    number;
}

export interface PopulationData {
    cases:                string;
    country:              string;
    hospitalBeds:         number;
    ICUBeds:              number;
    importsPerDay:        number;
    initialNumberOfCases: number;
    populationServed:     number;
}

export interface SimulationData {
    numberStochasticRuns: number;
    simulationTimeRange:  DateRange;
}

export interface Severity {
    ageGroup:  AgeGroup;
    confirmed: number;
    critical:  number;
    fatal:     number;
    id:        number;
    isolated:  number;
    severe:    number;
}

export enum AgeGroup {
    The09 = "0-9",
    The1019 = "10-19",
    The2029 = "20-29",
    The3039 = "30-39",
    The4049 = "40-49",
    The5059 = "50-59",
    The6069 = "60-69",
    The7079 = "70-79",
    The80 = "80+",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toCaseCounts(json: string): CaseCounts[] {
        return cast(JSON.parse(json), a(r("CaseCounts")));
    }

    public static caseCountsToJson(value: CaseCounts[]): string {
        return JSON.stringify(uncast(value, a(r("CaseCounts"))), null, 2);
    }

    public static toCountryAgeDistribution(json: string): CountryAgeDistribution[] {
        return cast(JSON.parse(json), a(r("CountryAgeDistribution")));
    }

    public static countryAgeDistributionToJson(value: CountryAgeDistribution[]): string {
        return JSON.stringify(uncast(value, a(r("CountryAgeDistribution"))), null, 2);
    }

    public static toInteger(json: string): number {
        return cast(JSON.parse(json), 0);
    }

    public static integerToJson(value: number): string {
        return JSON.stringify(uncast(value, 0), null, 2);
    }

    public static toIntegerPositive(json: string): number {
        return cast(JSON.parse(json), 0);
    }

    public static integerPositiveToJson(value: number): string {
        return JSON.stringify(uncast(value, 0), null, 2);
    }

    public static toScenario(json: string): Scenario[] {
        return cast(JSON.parse(json), a(r("Scenario")));
    }

    public static scenarioToJson(value: Scenario[]): string {
        return JSON.stringify(uncast(value, a(r("Scenario"))), null, 2);
    }

    public static toSeverity(json: string): Severity[] {
        return cast(JSON.parse(json), a(r("Severity")));
    }

    public static severityToJson(value: Severity[]): string {
        return JSON.stringify(uncast(value, a(r("Severity"))), null, 2);
    }
}

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(typ: any, val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(typ, val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "CaseCounts": o([
        { json: "country", js: "country", typ: "" },
        { json: "empiricalData", js: "empiricalData", typ: a(r("EmpiricalDatum")) },
    ], false),
    "EmpiricalDatum": o([
        { json: "cases", js: "cases", typ: u(0, null) },
        { json: "deaths", js: "deaths", typ: u(undefined, u(0, null)) },
        { json: "hospitalized", js: "hospitalized", typ: u(undefined, u(0, null)) },
        { json: "icu", js: "icu", typ: u(undefined, u(0, null)) },
        { json: "recovered", js: "recovered", typ: u(undefined, u(0, null)) },
        { json: "time", js: "time", typ: Date },
    ], false),
    "CountryAgeDistribution": o([
        { json: "ageDistribution", js: "ageDistribution", typ: r("AgeDistribution") },
        { json: "country", js: "country", typ: "" },
    ], false),
    "AgeDistribution": o([
        { json: "0-9", js: "0-9", typ: 0 },
        { json: "10-19", js: "10-19", typ: 0 },
        { json: "20-29", js: "20-29", typ: 0 },
        { json: "30-39", js: "30-39", typ: 0 },
        { json: "40-49", js: "40-49", typ: 0 },
        { json: "50-59", js: "50-59", typ: 0 },
        { json: "60-69", js: "60-69", typ: 0 },
        { json: "70-79", js: "70-79", typ: 0 },
        { json: "80+", js: "80+", typ: 0 },
    ], false),
    "Scenario": o([
        { json: "allParams", js: "allParams", typ: r("AllParams") },
        { json: "country", js: "country", typ: "" },
    ], false),
    "AllParams": o([
        { json: "containment", js: "containment", typ: r("ContainmentData") },
        { json: "epidemiological", js: "epidemiological", typ: r("EpidemiologicalData") },
        { json: "population", js: "population", typ: r("PopulationData") },
        { json: "simulation", js: "simulation", typ: r("SimulationData") },
    ], false),
    "ContainmentData": o([
        { json: "mitigationIntervals", js: "mitigationIntervals", typ: a(r("MitigationInterval")) },
        { json: "numberPoints", js: "numberPoints", typ: u(undefined, 3.14) },
    ], false),
    "MitigationInterval": o([
        { json: "color", js: "color", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "mitigationValue", js: "mitigationValue", typ: 3.14 },
        { json: "name", js: "name", typ: "" },
        { json: "timeRange", js: "timeRange", typ: r("DateRange") },
    ], false),
    "DateRange": o([
        { json: "tMax", js: "tMax", typ: Date },
        { json: "tMin", js: "tMin", typ: Date },
    ], "any"),
    "EpidemiologicalData": o([
        { json: "infectiousPeriod", js: "infectiousPeriod", typ: 3.14 },
        { json: "latencyTime", js: "latencyTime", typ: 3.14 },
        { json: "lengthHospitalStay", js: "lengthHospitalStay", typ: 3.14 },
        { json: "lengthICUStay", js: "lengthICUStay", typ: 3.14 },
        { json: "overflowSeverity", js: "overflowSeverity", typ: 3.14 },
        { json: "peakMonth", js: "peakMonth", typ: 0 },
        { json: "r0", js: "r0", typ: 3.14 },
        { json: "seasonalForcing", js: "seasonalForcing", typ: 3.14 },
    ], false),
    "PopulationData": o([
        { json: "cases", js: "cases", typ: "" },
        { json: "country", js: "country", typ: "" },
        { json: "hospitalBeds", js: "hospitalBeds", typ: 0 },
        { json: "ICUBeds", js: "ICUBeds", typ: 0 },
        { json: "importsPerDay", js: "importsPerDay", typ: 3.14 },
        { json: "initialNumberOfCases", js: "initialNumberOfCases", typ: 0 },
        { json: "populationServed", js: "populationServed", typ: 0 },
    ], false),
    "SimulationData": o([
        { json: "numberStochasticRuns", js: "numberStochasticRuns", typ: 3.14 },
        { json: "simulationTimeRange", js: "simulationTimeRange", typ: r("DateRange") },
    ], false),
    "Severity": o([
        { json: "ageGroup", js: "ageGroup", typ: r("AgeGroup") },
        { json: "confirmed", js: "confirmed", typ: 3.14 },
        { json: "critical", js: "critical", typ: 3.14 },
        { json: "fatal", js: "fatal", typ: 3.14 },
        { json: "id", js: "id", typ: 3.14 },
        { json: "isolated", js: "isolated", typ: 3.14 },
        { json: "severe", js: "severe", typ: 3.14 },
    ], false),
    "AgeGroup": [
        "0-9",
        "10-19",
        "20-29",
        "30-39",
        "40-49",
        "50-59",
        "60-69",
        "70-79",
        "80+",
    ],
};
