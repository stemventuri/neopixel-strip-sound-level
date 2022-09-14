let strip = neopixel.create(DigitalPin.P1, 60, NeoPixelMode.RGBW)
strip.showRainbow(1, 360)
basic.forever(function () {
    if (input.soundLevel() > 40 && input.soundLevel() < 80) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(1000)
        strip.showRainbow(1, 360)
    } else if (input.soundLevel() > 80 && input.soundLevel() < 120) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        strip.showRainbow(1, 360)
    } else if (input.soundLevel() > 120 && input.soundLevel() < 180) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(1000)
        strip.showRainbow(1, 360)
    }
})
