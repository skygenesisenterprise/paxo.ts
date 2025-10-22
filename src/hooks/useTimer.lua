--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
function ____exports.useTimer(self, callback, delay)
    local function start()
        return time:setTimeout(callback, delay)
    end
    local function stop(____, id)
        time:clearTimeout(id)
    end
    return {start = start, stop = stop}
end
return ____exports
