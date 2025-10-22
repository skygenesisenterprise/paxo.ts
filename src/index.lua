--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.App = __TS__Class()
local App = ____exports.App
App.name = "App"
function App.prototype.____constructor(self)
end
do
    local ____export = require("src.index")
    for ____exportKey, ____exportValue in pairs(____export) do
        if ____exportKey ~= "default" then
            ____exports[____exportKey] = ____exportValue
        end
    end
end
return ____exports
