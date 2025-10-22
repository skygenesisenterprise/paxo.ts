--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.Window = __TS__Class()
local Window = ____exports.Window
Window.name = "Window"
function Window.prototype.____constructor(self, props)
    if props == nil then
        props = {}
    end
    self.children = {}
    self.guiWindow = gui:window({title = props.title or "Paxo App", size = props.size or ({width = 320, height = 240}), position = props.position})
end
function Window.prototype.addChild(self, child)
    local ____self_children_0 = self.children
    ____self_children_0[#____self_children_0 + 1] = child
    self.guiWindow:addChild(child.element or child)
end
function Window.prototype.show(self)
    self.guiWindow:show()
end
function Window.prototype.hide(self)
    self.guiWindow:hide()
end
function Window.prototype.close(self)
    self.guiWindow:close()
end
function Window.prototype.setTitle(self, title)
    self.guiWindow:setTitle(title)
end
__TS__SetDescriptor(
    Window.prototype,
    "element",
    {get = function(self)
        return self.guiWindow
    end},
    true
)
return ____exports
