/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    
    fluid.defaults("gpii.uiOptions.panels.cursorSize", {
        gradeNames: ["fluid.uiOptions.panels", "gpii.uiOptions.pmt.previewPerSettingEnhanced", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/cursorSize": {
                "model.value": "default",
                "range.min": "minimum",
                "range.max": "maximum",
                "range.divisibleBy": "divisibleBy"
            }
        },
        range: {
            min: 1,
            max: 5,
            divisibleBy: 0.2
        },
        /*components: {
            preview: {
                type: "fluid.uiOptions.preview",
                createOnEvent: "afterRender",
                container: ".flc-uiOptions-cursor-size .flc-uiOptions-preview-per-setting-frame",
                options: {
                    templateUrl: "../../src/shared/preview/html/uiOptionsCursorPreview.html"
                }
            }
        },*/
        selectors: {
            textSize: ".flc-uiOptions-cursor-size",
            label: ".flc-uiOptions-cursor-size-label",
            multiplier: ".flc-uiOptions-multiplier"
        },
        protoTree: {
            label: {messagekey: "cursorSizeLabel"},
            multiplier: {messagekey: "multiplier"},
            textSize: {
                decorators: {
                    type: "fluid",
                    func: "fluid.uiOptions.textfieldSlider"
                }
            }
        },
        sliderOptions: {
            orientation: "horizontal",
            step: 0.2,
            range: "min"
        }/*,
        
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            removeSource: true,
            target: "{that preview enhancer}.options"
        }, {
            source: "{that}.options.emptyComponentType",
            target: "{that preview enhancer textSize}.type"
        }, {
            source: "{that}.options.emptyComponentType",
            removeSource: true,
            target: "{that preview enhancer magnifier}.type"
        }]*/
    });
    
})(jQuery, fluid);
