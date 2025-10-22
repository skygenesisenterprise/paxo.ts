--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
run = function(self)
    local win = gui:window({title = "Test App", size = {width = 320, height = 240}})
    local label = gui:label({
        text = "Welcome to test-app!",
        position = {x = 50, y = 50},
        color = gui:color(0, 0, 0)
    })
    win:addChild(label)
    win:show()
end
quit = function(self)
end
