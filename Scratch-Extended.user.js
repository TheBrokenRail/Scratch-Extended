// ==UserScript==
// @name         Scratch Extended
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @run-at       document-end
// @match        *://*/*
// @grant        none
// @author       TheBrokenRail
// ==/UserScript==

window.scratchExtended = function() {
    var ScratchBlocks = ScratchBlocks || Blockly;
    var vm = window.vm;

    if (!ScratchBlocks || !ScratchBlocks.Blocks) {
        return;
    }

    ScratchBlocks.Categories.mod = {};

    ScratchBlocks.Colours.mod = {};

    ScratchBlocks.Colours.mod.primary = "#C0C0C0";

    ScratchBlocks.Colours.mod.secondary = "#A9A9A9";

    ScratchBlocks.Colours.mod.tertiary = "#808080";

    ScratchBlocks.Blocks['mod_get_variable_by_name'] = {
        init: function() {
            this.jsonInit({
                "message0": "get variable %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "VARIABLE"
                    }
                ],
                "category": ScratchBlocks.Categories.mod,
                "colour": ScratchBlocks.Colours.mod.primary,
                "colourSecondary": ScratchBlocks.Colours.mod.secondary,
                "colourTertiary": ScratchBlocks.Colours.mod.tertiary,
                "output": "String",
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_ROUND,
                "checkboxInFlyout": false
            });
        }
    };

    ScratchBlocks.Blocks['mod_rgba'] = {
        init: function() {
            this.jsonInit({
                "message0": "r: %1 g: %2 b: %3 a: %4",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "R"
                    },
                    {
                        "type": "input_value",
                        "name": "G"
                    },
                    {
                        "type": "input_value",
                        "name": "B"
                    },
                    {
                        "type": "input_value",
                        "name": "A"
                    }
                ],
                "category": ScratchBlocks.Categories.mod,
                "colour": ScratchBlocks.Colours.mod.primary,
                "colourSecondary": ScratchBlocks.Colours.mod.secondary,
                "colourTertiary": ScratchBlocks.Colours.mod.tertiary,
                "output": "String",
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_ROUND,
                "checkboxInFlyout": false
            });
        }
    };

    ScratchBlocks.Blocks['mod_pen_hue'] = {
        init: function() {
            this.jsonInit({
                "message0": "pen hue",
                "category": ScratchBlocks.Categories.mod,
                "colour": ScratchBlocks.Colours.mod.primary,
                "colourSecondary": ScratchBlocks.Colours.mod.secondary,
                "colourTertiary": ScratchBlocks.Colours.mod.tertiary,
                "output": "String",
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_ROUND,
                "checkboxInFlyout": true
            });
        }
    };

    ScratchBlocks.Blocks['mod_pen_shade'] = {
        init: function() {
            this.jsonInit({
                "message0": "pen shade",
                "category": ScratchBlocks.Categories.mod,
                "colour": ScratchBlocks.Colours.mod.primary,
                "colourSecondary": ScratchBlocks.Colours.mod.secondary,
                "colourTertiary": ScratchBlocks.Colours.mod.tertiary,
                "output": "String",
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_ROUND,
                "checkboxInFlyout": true
            });
        }
    };

    ScratchBlocks.Blocks['mod_pen_size'] = {
        init: function() {
            this.jsonInit({
                "message0": "pen size",
                "category": ScratchBlocks.Categories.mod,
                "colour": ScratchBlocks.Colours.mod.primary,
                "colourSecondary": ScratchBlocks.Colours.mod.secondary,
                "colourTertiary": ScratchBlocks.Colours.mod.tertiary,
                "output": "String",
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_ROUND,
                "checkboxInFlyout": true
            });
        }
    };

    ScratchBlocks.Blocks['mod_set_variable_by_name'] = {
        init: function() {
            this.jsonInit({
                "message0": "set variable %1 to %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "VARIABLE"
                    },
                    {
                        "type": "input_value",
                        "name": "TO"
                    }
                ],
                "category": ScratchBlocks.Categories.mod,
                "colour": ScratchBlocks.Colours.mod.primary,
                "colourSecondary": ScratchBlocks.Colours.mod.secondary,
                "colourTertiary": ScratchBlocks.Colours.mod.tertiary,
                "previousStatement": null,
                "nextStatement": null
            });
        }
    };

    ScratchBlocks.Blocks['mod_change_variable_by_name'] = {
        init: function() {
            this.jsonInit({
                "message0": "change variable %1 by %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "VARIABLE"
                    },
                    {
                        "type": "input_value",
                        "name": "BY"
                    }
                ],
                "category": ScratchBlocks.Categories.mod,
                "colour": ScratchBlocks.Colours.mod.primary,
                "colourSecondary": ScratchBlocks.Colours.mod.secondary,
                "colourTertiary": ScratchBlocks.Colours.mod.tertiary,
                "previousStatement": null,
                "nextStatement": null
            });
        }
    };

    ScratchBlocks.Blocks['mod_while'] = {
        init: function() {
            this.jsonInit({
                "message0": "while %1",
                "message1": "%1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "CONDITION",
                        "check": "Boolean"
                    }
                ],
                "args1": [
                    {
                        "type": "input_statement",
                        "name": "SUBSTACK"
                    }
                ],
                "inputsInline": true,
                "category": ScratchBlocks.Categories.mod,
                "colour": ScratchBlocks.Colours.mod.primary,
                "colourSecondary": ScratchBlocks.Colours.mod.secondary,
                "colourTertiary": ScratchBlocks.Colours.mod.tertiary,
                "previousStatement": null,
                "nextStatement": null
            });
        }
    };

    ScratchBlocks.Blocks['mod_true'] = {
        init: function() {
            this.jsonInit({
                "message0": "true",
                "category": ScratchBlocks.Categories.mod,
                "colour": ScratchBlocks.Colours.mod.primary,
                "colourSecondary": ScratchBlocks.Colours.mod.secondary,
                "colourTertiary": ScratchBlocks.Colours.mod.tertiary,
                "output": "Boolean",
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_HEXAGONAL,
                "checkboxInFlyout": false
            });
        }
    };

    ScratchBlocks.Blocks['mod_false'] = {
        init: function() {
            this.jsonInit({
                "message0": "false",
                "category": ScratchBlocks.Categories.mod,
                "colour": ScratchBlocks.Colours.mod.primary,
                "colourSecondary": ScratchBlocks.Colours.mod.secondary,
                "colourTertiary": ScratchBlocks.Colours.mod.tertiary,
                "output": "Boolean",
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_HEXAGONAL,
                "checkboxInFlyout": false
            });
        }
    };

    var oParser = new DOMParser();
    var dom = oParser.parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');

    dom.documentElement.innerHTML = dom.documentElement.innerHTML +
        '<category name="Scratch+" colour="#D3D3D3" secondaryColour="#C0C0C0">'+
            '<block type="mod_get_variable_by_name">'+
                '<value name="VARIABLE">'+
                    '<shadow type="text">'+
                        '<field name="TEXT"></field>'+
                    '</shadow>'+
                '</value>'+
            '</block>'+
            '<block type="mod_rgba">'+
                '<value name="R">'+
                    '<shadow type="text">'+
                        '<field name="TEXT"></field>'+
                    '</shadow>'+
                '</value>'+
                '<value name="G">'+
                    '<shadow type="text">'+
                        '<field name="TEXT"></field>'+
                    '</shadow>'+
                '</value>'+
                '<value name="B">'+
                    '<shadow type="text">'+
                        '<field name="TEXT"></field>'+
                    '</shadow>'+
                '</value>'+
                '<value name="A">'+
                    '<shadow type="text">'+
                        '<field name="TEXT"></field>'+
                    '</shadow>'+
                '</value>'+
            '</block>'+
            '<block type="mod_pen_hue"></block>'+
            '<block type="mod_pen_shade"></block>'+
            '<block type="mod_pen_size"></block>'+
            '<block type="mod_set_variable_by_name">'+
                '<value name="VARIABLE">'+
                    '<shadow type="text">'+
                        '<field name="TEXT"></field>'+
                    '</shadow>'+
                '</value>'+
                '<value name="TO">'+
                    '<shadow type="text">'+
                        '<field name="TEXT"></field>'+
                    '</shadow>'+
                '</value>'+
            '</block>'+
            '<block type="mod_change_variable_by_name">'+
                '<value name="VARIABLE">'+
                    '<shadow type="text">'+
                        '<field name="TEXT"></field>'+
                    '</shadow>'+
                '</value>'+
                '<value name="BY">'+
                    '<shadow type="math_number">'+
                        '<field name="NUM">0</field>'+
                    '</shadow>'+
                '</value>'+
            '</block>'+
            '<block type="mod_while"></block>'+
            '<block type="mod_true"></block>'+
            '<block type="mod_false"></block>'+
        '</category>';

    if (vm) {
        vm.runtime._primitives.mod_get_variable_by_name = function (args, util) {
            var variable = util.target.lookupOrCreateVariable(args.VARIABLE);
            return variable.value;
        };

        vm.runtime._primitives.mod_rgba = function (args, util) {
            args.R = Math.round(args.R);
            args.G = Math.round(args.G);
            args.B = Math.round(args.B);
            args.A = Math.round(args.A);
            return (args.A * 16777216) + (args.R * 65536) + (args.G * 255) + args.B;
        };

        vm.runtime._primitives.mod_pen_hue = function (args, util) {
            var penState = util.target.getCustomState('Scratch.pen');
            if (!penState) {
                return 120;
            }
            return penState.hue;
        };

        vm.runtime._primitives.mod_pen_shade = function (args, util) {
            var penState = util.target.getCustomState('Scratch.pen');
            if (!penState) {
                return 50;
            }
            return penState.shade;
        };

        vm.runtime._primitives.mod_pen_size = function (args, util) {
            var penState = util.target.getCustomState('Scratch.pen');
            if (!penState) {
                return 1;
            }
            return penState.penAttributes.diameter;
        };

        vm.runtime._primitives.mod_set_variable_by_name = function (args, util) {
            var variable = util.target.lookupOrCreateVariable(args.VARIABLE);
            variable.value = args.TO;
        };

        vm.runtime._primitives.mod_change_variable_by_name = function (args, util) {
            function toNumber(value) {
                var n = Number(value);
                if (isNaN(n)) {
                    // Scratch treats NaN as 0, when needed as a number.
                    // E.g., 0 + NaN -> 0.
                    return 0;
                }
                return n;
            }
            var variable = util.target.lookupOrCreateVariable(args.VARIABLE);
            var castedValue = toNumber(variable.value);
            var dValue = toNumber(args.BY);
            variable.value = castedValue + dValue;
        };

        vm.runtime._primitives.mod_while = function (args, util) {
            function toBoolean(value) {
                // Already a boolean?
                if (typeof value === 'boolean') {
                    return value;
                }
                if (typeof value === 'string') {
                    // These specific strings are treated as false in Scratch.
                    if ((value === '') ||
                        (value === '0') ||
                        (value.toLowerCase() === 'false')) {
                        return false;
                    }
                    // All other strings treated as true.
                    return true;
                }
                // Coerce other values and numbers.
                return Boolean(value);
            }
            var condition = toBoolean(args.CONDITION);
            // If the condition is true, start the branch.
            if (condition) {
                util.startBranch(1, true);
            }
        };

        vm.runtime._primitives.mod_true = function (args, util) {
            return true;
        };

        vm.runtime._primitives.mod_false = function (args, util) {
            return false;
        };
    }

    var toolbox = null;
    if (vm) {
        toolbox = vm.filterToolbox(dom.documentElement);
    } else {
        toolbox = dom.documentElement;
    }
    ScratchBlocks.getMainWorkspace().updateToolbox(toolbox);
};

(function () {
    var script = document.createElement("SCRIPT");
    script.innerHTML = "window.addEventListener('pageshow', function(event) { window.scratchExtended(); });";
    document.body.appendChild(script);
})();
