--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
function ____exports.formatTime(self, timestamp)
    return time:formatTime(timestamp)
end
function ____exports.getCurrentTime(self)
    return time:formatTime(time:now())
end
return ____exports
