--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
function run()
    local win = gui:window({title = "Hello Paxo.ts", size = {width = 320, height = 240}})
    local label = gui:label({
        text = "Hello, World!",
        position = {x = 100, y = 100},
        color = gui:color(255, 0, 0)
    })
    local button = gui:button({
        text = "Click me!",
        position = {x = 100, y = 150},
        onClick = function()
            label:setText("Button clicked!")
        end
    })
    win:addChild(label)
    win:addChild(button)
    win:show()
end
function quit()
end
