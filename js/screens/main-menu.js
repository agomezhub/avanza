// Pantalla de menú principal del juego
class MainMenuScreen {
  constructor() {
    cursor(ARROW)

    // Botón de iniciar juego
    this.botonJugar = new Button(
      imgBotonJugar,
      459,
      61,
      imgBotonJugar.width / 2,
      imgBotonJugar.height / 2,
      () => (screen = new GameScreen())
    )

    // Botón de música encendida
    this.botonMusicaOn = new Button(
      imgBotonMusicaOn,
      459,
      141,
      imgBotonMusicaOn.width / 2,
      imgBotonMusicaOn.height / 2,
      () => {
        music = !music
        music ? musicBg.play() : musicBg.stop()
        localStorage.setItem('avanza:music', music)
      }
    )

    // Botón de música apagada
    this.botonMusicaOff = new Button(
      imgBotonMusicaOff,
      459,
      141,
      imgBotonMusicaOff.width / 2,
      imgBotonMusicaOff.height / 2,
      () => {
        music = !music
        music ? musicBg.play() : musicBg.stop()
        localStorage.setItem('avanza:music', music)
      }
    )

    // Botón de instrucciones
    this.botonInstrucciones = new Button(
      imgBotonInstrucciones,
      459,
      221,
      imgBotonInstrucciones.width / 2,
      imgBotonInstrucciones.height / 2,
      () => (screen = new TutorialScreen())
    )
  }

  // Método para actualizar la pantalla
  update() {}

  // Método para dibujar la pantalla
  draw() {
    // Dibuja el fondo del menú
    image(imgMenuBg, 0, 0, width, height)

    // Dibuja los botones
    this.botonJugar.draw()
    this.botonInstrucciones.draw()
    if (music) {
      this.botonMusicaOn.draw()
    } else {
      this.botonMusicaOff.draw()
    }
  }

  // Método para manejar eventos de teclado
  keyPressed(event) {}

  // Método para manejar click del ratón
  mousePressed(event) {
    this.botonJugar.mousePressed()
    this.botonInstrucciones.mousePressed()

    if (music) {
      this.botonMusicaOn.mousePressed()
    } else {
      this.botonMusicaOff.mousePressed()
    }
  }

  // Método para manejar el movimiento del ratón
  mouseMoved(event) {
    // Actualizar el cursor según la posición del ratón
    if (
      this.botonJugar.isMouseOver() ||
      this.botonInstrucciones.isMouseOver() ||
      this.botonMusicaOn.isMouseOver() ||
      this.botonMusicaOff.isMouseOver()
    ) {
      cursor(HAND)
    } else {
      cursor(ARROW)
    }
  }
}
