--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.colors = {
    black = gui:color(0, 0, 0),
    white = gui:color(255, 255, 255),
    red = gui:color(255, 0, 0),
    green = gui:color(0, 255, 0),
    blue = gui:color(0, 0, 255),
    yellow = gui:color(255, 255, 0),
    purple = gui:color(128, 0, 128),
    orange = gui:color(255, 165, 0),
    gray = gui:color(128, 128, 128),
    lightGray = gui:color(211, 211, 211)
}
function ____exports.rgb(self, r, g, b)
    return gui:color(r, g, b)
end
return ____exports
