input.onButtonPressed(Button.A, function () {
    escolhahumana = escolhahumana - 1
    if (escolhahumana == 0) {
        escolhahumana = 3
    }
    if (escolhahumana == 3) {
        images.createImage(`
            # # . . .
            # # . # #
            . . # . .
            # # . # #
            # # . . .
            `).showImage(0)
    } else if (escolhahumana == 2) {
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
    } else {
        images.createImage(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `).showImage(0)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(500)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(500)
    escolhamaquina = randint(1, 3)
    if (escolhamaquina == 1) {
        images.createImage(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `).showImage(0)
    } else if (escolhamaquina == 2) {
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
    } else {
        images.createImage(`
            # # . . .
            # # . # #
            . . # . .
            # # . # #
            # # . . .
            `).showImage(0)
    }
    basic.pause(500)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(500)
    if (escolhahumana == escolhamaquina) {
        images.createImage(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `).showImage(0)
    } else if (escolhahumana == 1 && escolhamaquina == 3) {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    } else if (escolhahumana == 2 && escolhamaquina == 1) {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    } else if (escolhahumana == 3 && escolhamaquina == 2) {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    } else {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `).showImage(0)
    }
})
input.onButtonPressed(Button.B, function () {
    escolhahumana = escolhahumana + 1
    if (escolhahumana == 4) {
        escolhahumana = 1
    }
    if (escolhahumana == 1) {
        images.createImage(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `).showImage(0)
    } else if (escolhahumana == 2) {
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
    } else {
        images.createImage(`
            # # . . .
            # # . # #
            . . # . .
            # # . # #
            # # . . .
            `).showImage(0)
    }
})
let escolhamaquina = 0
let escolhahumana = 0
escolhahumana = 1
let pedra = 1
let papel = 2
let tesoura = 3
if (escolhahumana == 1) {
    images.createImage(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `).showImage(0)
} else if (escolhahumana == 2) {
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `).showImage(0)
} else if (escolhahumana == 3) {
    images.createImage(`
        # # . . .
        # # . # #
        . . # . .
        # # . # #
        # # . . .
        `).showImage(0)
}
if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
    basic.pause(500)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
}
