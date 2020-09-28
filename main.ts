// Created by: Batuhan
// Created on: 2020-09-28
let hungryness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hungryness = hungryness + 1
        basic.showNumber(hungryness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungryness = hungryness + 0
        basic.showNumber(hungryness)
    }
})
