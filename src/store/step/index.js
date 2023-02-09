"use strict";
exports.__esModule = true;
exports.readWriteStepAtom = exports.stepAtom = void 0;
var jotai_1 = require("jotai");
// Atom to save the step
exports.stepAtom = (0, jotai_1.atom)(0);
exports.readWriteStepAtom = (0, jotai_1.atom)(function (get) { return get(exports.stepAtom); }, function (get, set, newStep) {
    set(exports.stepAtom, newStep);
});
