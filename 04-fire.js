var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {
    var pan = new five.Servo(9)
    var tilt = new five.Servo(10)
    var laser = new five.Led(11)

    pan.sweep()
    tilt.sweep()
    laser.strobe(250)

    board.wait(3000, function () {
        laser.stop()
        laser.off()
        pan.stop()
        pan.center()
        tilt.stop()
        tilt.center()
    })
})