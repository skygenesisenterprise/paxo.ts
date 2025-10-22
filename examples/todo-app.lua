--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local addTodo, removeTodo, updateList, input, list, statusLabel, todos, storage
local ____index = require("src.index")
local Window = ____index.Window
local Button = ____index.Button
local Input = ____index.Input
local List = ____index.List
local Label = ____index.Label
local colors = ____index.colors
local useStorage = ____index.useStorage
function addTodo(self)
    local text = __TS__StringTrim(input:getText())
    if text then
        todos[#todos + 1] = text
        updateList(nil)
        input:setText("")
        storage:set(todos)
    end
end
function removeTodo(self, index)
    __TS__ArraySplice(todos, index, 1)
    updateList(nil)
    storage:set(todos)
end
function updateList(self)
    list:setItems(todos)
    statusLabel:setText("Todos: " .. tostring(#todos))
end
local addButton
todos = {}
storage = useStorage(nil, "todos", {})
run = function(self)
    todos = storage:get()
    local win = __TS__New(Window, {title = "Todo App"})
    input = __TS__New(Input, {position = {x = 10, y = 10}, size = {width = 200, height = 30}, placeholder = "Enter a todo..."})
    addButton = __TS__New(Button, {text = "Add", position = {x = 220, y = 10}, onClick = addTodo})
    list = __TS__New(List, {position = {x = 10, y = 50}, size = {width = 300, height = 150}, items = todos, onSelect = removeTodo})
    statusLabel = __TS__New(
        Label,
        {
            text = "Todos: " .. tostring(#todos),
            position = {x = 10, y = 210},
            color = colors.blue
        }
    )
    win:addChild(input)
    win:addChild(addButton)
    win:addChild(list)
    win:addChild(statusLabel)
    win:show()
end
quit = function(self)
    storage:set(todos)
end
return ____exports
