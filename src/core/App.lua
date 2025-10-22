--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____Window = require("src.components.Window")
local Window = ____Window.Window
____exports.App = __TS__Class()
local App = ____exports.App
App.name = "App"
function App.prototype.____constructor(self, title)
    self.mainWindow = __TS__New(Window, {title = title})
end
function App.prototype.show(self)
    self.mainWindow:show()
end
return ____exports
