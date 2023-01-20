input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playMelody("D G E A F G B C5 ", 307)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        # # . # #
        # # . # #
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("HI MUBINA!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Giraffe)
})
basic.forever(function () {
	
})
