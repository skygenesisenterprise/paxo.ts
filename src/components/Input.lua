--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.Input = __TS__Class()
local Input = ____exports.Input
Input.name = "Input"
function Input.prototype.____constructor(self, props)
    self.guiInput = gui:input({position = props.position, size = props.size, placeholder = props.placeholder})
    if props.onChange then
        self:onChange(props.onChange)
    end
end
function Input.prototype.getText(self)
    return self.guiInput:getText()
end
function Input.prototype.setText(self, text)
    self.guiInput:setText(text)
end
function Input.prototype.onChange(self, callback)
    self.guiInput:onChange(callback)
end
__TS__SetDescriptor(
    Input.prototype,
    "element",
    {get = function(self)
        return self.guiInput
    end},
    true
)
return ____exports
