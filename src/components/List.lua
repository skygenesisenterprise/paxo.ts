--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.List = __TS__Class()
local List = ____exports.List
List.name = "List"
function List.prototype.____constructor(self, props)
    self.guiList = gui:list({position = props.position, size = props.size, items = props.items})
    if props.onSelect then
        self:onSelect(props.onSelect)
    end
end
function List.prototype.setItems(self, items)
    self.guiList:setItems(items)
end
function List.prototype.onSelect(self, callback)
    self.guiList:onSelect(callback)
end
__TS__SetDescriptor(
    List.prototype,
    "element",
    {get = function(self)
        return self.guiList
    end},
    true
)
return ____exports
