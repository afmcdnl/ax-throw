input.onButtonPressed(Button.A, function () {
    Throw = 0
})
input.onGesture(Gesture.LogoUp, function () {
    Throw += 1
})
let Throw = 0
Throw = 0
basic.forever(function () {
    basic.showNumber(Throw)
})
