--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
function ____exports.useStorage(self, key, defaultValue)
    return {
        get = function()
            do
                local function ____catch()
                    return true, defaultValue
                end
                local ____try, ____hasReturned, ____returnValue = pcall(function()
                    local data = storage:readFile(key)
                    return true, json:decode(data)
                end)
                if not ____try then
                    ____hasReturned, ____returnValue = ____catch()
                end
                if ____hasReturned then
                    return ____returnValue
                end
            end
        end,
        set = function(____, value)
            local data = json:encode(value)
            storage:writeFile(key, data)
        end
    }
end
return ____exports
