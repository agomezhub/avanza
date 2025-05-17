// Pantalla de presentación del juego
class SplashScreen {
  timeout

  constructor() {
    cursor(ARROW)
    // Ir a la pantalla de introducción después de 5 segundos
    this.timeout = setTimeout(() => {
      screen = new IntroScreen()
    }, 5000)
  }

  // Método para actualizar la pantalla
  update() {}

  // Método para dibujar la pantalla
  draw() {
    image(imgSplash, 0, 0, width, height)
  }

  // Método para manejar eventos de teclado
  keyPressed(event) {
    // Si se presiona la barra espaciadora, Enter o Escape, ir a la pantalla de introducción
    if (event.key === ' ' || event.key === 'Enter' || event.key === 'Escape') {
      clearTimeout(this.timeout)
      screen = new IntroScreen()
    }
  }

  // Método para manejar click del ratón
  mousePressed(event) {
    // Si se hace clic en la pantalla, ir a la pantalla de introducción
    clearTimeout(this.timeout)
    screen = new IntroScreen()
  }

  // Método para manejar el movimiento del ratón
  mouseMoved(event) {}
}
