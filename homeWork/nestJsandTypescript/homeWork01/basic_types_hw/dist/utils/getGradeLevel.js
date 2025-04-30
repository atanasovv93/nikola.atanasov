"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeLevel = void 0;
exports.getGradeLevel = getGradeLevel;
var GradeLevel;
(function (GradeLevel) {
    GradeLevel[GradeLevel["FRESHMAN"] = 0] = "FRESHMAN";
    GradeLevel[GradeLevel["SOPHOMORE"] = 1] = "SOPHOMORE";
    GradeLevel[GradeLevel["JUNIOR"] = 2] = "JUNIOR";
    GradeLevel[GradeLevel["SENIOR"] = 3] = "SENIOR";
})(GradeLevel || (exports.GradeLevel = GradeLevel = {}));
function getGradeLevel(age) {
    if (age <= 14)
        return GradeLevel.FRESHMAN;
    if (age <= 15)
        return GradeLevel.SOPHOMORE;
    if (age <= 16)
        return GradeLevel.JUNIOR;
    return GradeLevel.SENIOR;
}
