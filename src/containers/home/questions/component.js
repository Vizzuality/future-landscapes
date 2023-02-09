"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_final_form_1 = require("react-final-form");
var step_1 = require("store/step");
var framer_motion_1 = require("framer-motion");
var jotai_1 = require("jotai");
var background_1 = require("components/background");
var constants_1 = require("./constants");
var question_1 = require("./question");
var INITIAL_VALUES = {
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined
};
var Questions = function () {
    var _a = (0, jotai_1.useAtom)(step_1.readWriteStepAtom), step = _a[0], setStep = _a[1];
    var bgColor = (step !== 0 && constants_1.COLORS.find(function (c) { return c.id === step; })).bgColor;
    var handleSubmit = (0, react_1.useCallback)(function (values) {
        console.log({ values: values });
        setStep(step + 1);
    }, [setStep, step]);
    return (<react_final_form_1.Form onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
      {function (fprops) { return (<background_1["default"] color={bgColor} step={step}>
          <form onSubmit={fprops.handleSubmit} autoComplete="off">
            {/* Questions */}
            <framer_motion_1.AnimatePresence>
              {constants_1.QUESTIONS.filter(function (q) { return q.id === step; }).map(function (q) { return (<question_1["default"] key={q.name} id={q.id}/>); })}
            </framer_motion_1.AnimatePresence>
          </form>
        </background_1["default"]>); }}
    </react_final_form_1.Form>);
};
exports["default"] = Questions;
