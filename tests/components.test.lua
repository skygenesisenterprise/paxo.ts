--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____components = require("src.components.index")
local Button = ____components.Button
local Label = ____components.Label
describe(
    nil,
    "Components",
    function()
        test(
            nil,
            "Button creation",
            function()
                local button = __TS__New(Button, {text = "Test", position = {x = 0, y = 0}})
                expect(nil, button):toBeDefined()
            end
        )
        test(
            nil,
            "Label creation",
            function()
                local label = __TS__New(Label, {text = "Test Label", position = {x = 0, y = 0}})
                expect(nil, label):toBeDefined()
            end
        )
    end
)
return ____exports
