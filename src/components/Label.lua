--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.Label = __TS__Class()
local Label = ____exports.Label
Label.name = "Label"
function Label.prototype.____constructor(self, props)
    self.guiLabel = gui:label({text = props.text, position = props.position, color = props.color})
end
function Label.prototype.setText(self, text)
    self.guiLabel:setText(text)
end
function Label.prototype.setColor(self, color)
    self.guiLabel:setColor(color)
end
__TS__SetDescriptor(
    Label.prototype,
    "element",
    {get = function(self)
        return self.guiLabel
    end},
    true
)
return ____exports
