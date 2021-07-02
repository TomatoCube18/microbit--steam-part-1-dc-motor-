let RelayStatus = 0
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
motorbit.stopMotor()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        basic.showIcon(IconNames.Happy)
        motorbit.setMotorRotation(MakerBitMotorRotation.Forward)
        motorbit.runMotor(100)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        basic.showIcon(IconNames.Silly)
        motorbit.setMotorRotation(MakerBitMotorRotation.Backward)
        motorbit.runMotor(100)
    } else {
        motorbit.stopMotor()
        basic.showIcon(IconNames.Skull)
    }
})
