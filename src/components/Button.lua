--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.Button = __TS__Class()
local Button = ____exports.Button
Button.name = "Button"
function Button.prototype.____constructor(self, props)
    self.guiButton = gui:button({text = props.text, position = props.position, size = props.size, onClick = props.onClick})
end
function Button.prototype.setText(self, text)
    self.guiButton:setText(text)
end
function Button.prototype.setPosition(self, position)
    self.guiButton:setPosition(position)
end
function Button.prototype.onClick(self, callback)
    self.guiButton:onClick(callback)
end
__TS__SetDescriptor(
    Button.prototype,
    "element",
    {get = function(self)
        return self.guiButton
    end},
    true
)
return ____exports
