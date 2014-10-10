/**
 * Cloud4all Preferences Management Tools - Sign Up UI
 *
 * Copyright 2014 CERTH/HIT
 *
 */

var demo = demo || {};

(function ($, fluid) {

    demo.initSignUpPanel = function () {
        gpii.signupPanel(".main", {
            templatePrefix: "../../src/signup/",
            messagePrefix: "../../src/signup/"
        });
    };

})(jQuery, fluid);
