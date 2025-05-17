// Pantalla de introducción del juego
class IntroScreen {
  constructor() {
    cursor(ARROW)

    this.posicionTexto = height / 2
    this.textoIntro =
      'ESTE VIDEOJUEGO ES EL PROYECTO DE LA ASIGNATURA PROYECTO 3: APLICACIÓN INTERACTIVA DEL GRADO TÉCNICAS DE INTERACCIÓN DIGITAL Y MULTIMEDIA. EL PROPÓSITO DEL MISMO ES ENCONTRAR UN VALOR AÑADIDO AL MUNDO DE LOS JUEGOS BASADOS EN SOKOBAN, DESDE UNA PERSPECTIVA DE LA MEJORA DE LA MEMORIA COGNITIVA. PARA ELLO NOS BASAREMOS EN AUNAR EL ARQUETIPO CLÁSICO DE DICHOS JUEGOS, BASADOS EN EMPUJAR UN BLOQUE HASTA LLEGAR A SU OBJETIVO, JUNTO AL DESCUBRIMIENTO DE PALABRAS UBICADAS EN DIFERENTES CASILLAS QUE CONTENDRÁN CADA UNA DE ELLAS UNA LETRA, FORMANDO LA PALABRA EN CUESTIÓN. SERÁ UNA FORMA DE REPRESENTAR LA SOPA DE LETRAS CLÁSICA, POR LO QUE EL USUARIO SE ENFRENTARÁ A UN DOBLE RETO.'

    // Botón de saltar la introducción
    this.botonSaltar = new Button(
      imgBotonSaltar,
      50,
      height - 100,
      imgBotonSaltar.width / 2,
      imgBotonSaltar.height / 2,
      () => (screen = new MainMenuScreen())
    )
  }

  // Método para actualizar la pantalla
  update() {
    // Actualiza la posición del texto
    if (this.posicionTexto > -550) {
      this.posicionTexto -= 0.75
    } else {
      // Ir a la pantalla de menú principal después de un segundo
      setTimeout(() => {
        screen = new MainMenuScreen()
      }, 1000)
    }
  }

  // Método para dibujar la pantalla
  draw() {
    textSize(32)
    textAlign(CENTER, BASELINE)
    textWrap(WORD)
    fill(0)
    text(this.textoIntro, 20, this.posicionTexto, width - 40)

    image(imgIntroBg, 0, 0, width, height)
    this.botonSaltar.draw()
  }

  // Método para manejar eventos de teclado
  keyPressed(event) {
    if (event.key === ' ' || event.key === 'Enter' || event.key === 'Escape') {
      screen = new MainMenuScreen()
    }
  }

  // Método para manejar click del ratón
  mousePressed(event) {
    this.botonSaltar.mousePressed()
  }

  // Método para manejar el movimiento del ratón
  mouseMoved(event) {
    // Actualizar el cursor según la posición del ratón
    if (this.botonSaltar.isMouseOver()) {
      cursor(HAND)
    } else {
      cursor(ARROW)
    }
  }
}
