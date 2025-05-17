// Pantalla de tutorial del juego
class TutorialScreen {
  constructor() {
    // Boton de retroceso
    this.botonAtras = new Button(
      imgBotonAtras,
      50,
      height - 100,
      imgBotonAtras.width / 2,
      imgBotonAtras.height / 2,
      () => (screen = new MainMenuScreen())
    )
  }

  // Método para actualizar la pantalla
  update() {}

  // Método para dibujar la pantalla
  draw() {
    image(imgTutorialBg, 0, 0, width, height)
    this.botonAtras.draw()
  }

  // Método para manejar eventos de teclado
  keyPressed(event) {
    // Si se presiona Escape, ir a la pantalla de menú principal
    if (event.key === 'Escape') {
      screen = new MainMenuScreen()
    }
  }

  // Método para manejar click del ratón
  mousePressed(event) {
    this.botonAtras.mousePressed()
  }

  // Método para manejar el movimiento del ratón
  mouseMoved(event) {
    // Actualizar el cursor según la posición del ratón
    if (this.botonAtras.isMouseOver()) {
      cursor(HAND)
    } else {
      cursor(ARROW)
    }
  }
}
