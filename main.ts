let myImage: Image = null
basic.forever(function () {
    let sprite: game.LedSprite = null
    basic.showString("i love xxxtentacion music")
    game.addLife(11)
    sprite.move(33333)
    basic.showNumber(999)
    music.playMelody("A C E - A F B G ", 255)
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_RADIO,
    EventBusValue.MES_ALERT_EVT_ALARM6
    )
    myImage = images.createBigImage(`
        # # # . # # . . # .
        # # # # # . # # # .
        # # # # # # # . . #
        # . # # . . . # # .
        # # # . . . # . . .
        `)
    led.setDisplayMode(DisplayMode.Greyscale)
    led.enable(true)
})
