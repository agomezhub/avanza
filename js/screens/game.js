// Leyenda de los valores del tablero:
const VACIO = 0
const MURO = 1
const JUGADOR = 2

// Pantalla de juego
class GameScreen {
  constructor() {
    cursor(ARROW)

    // Niveles del juego
    this.NIVELES = [
      {
        palabra: 'HOLA',
        tablero: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 0, 'H', 0, 0, 0, 'O', 0, 1],
          [1, 0, 'L', 0, 2, 0, 'A', 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        palabra: 'CASA',
        tablero: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 1, 0, 0, 0, 0, 1],
          [1, 0, 'S', 1, 0, 2, 'A', 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 0, 0, 'C', 0, 'A', 0, 0, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        palabra: 'PIZZA',
        tablero: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 1, 0, 0, 0, 1],
          [1, 0, 'P', 0, 0, 0, 'A', 0, 1],
          [1, 0, 'Z', 0, 'Z', 'I', 2, 0, 1],
          [1, 0, 0, 0, 1, 0, 0, 0, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
    ]

    // Botón de reiniciar
    this.botonReiniciar = new Button(
      imgBotonReiniciar,
      550,
      24,
      imgBotonReiniciar.width / 2,
      imgBotonReiniciar.height / 2,
      this.reset.bind(this)
    )

    // Inicializa el juego
    this.nivel = 0
    this.transicion = false
    this.reset()
  }

  // Método para reiniciar el nivel
  reset() {
    // Copia el tablero del nivel actual
    this.tablero = this.NIVELES[this.nivel].tablero.map(fila => [...fila])
  }

  // Método para verificar si se ha ganado el nivel
  checkVictory() {
    // Verifica si la palabra del nivel actual está en el tablero
    const palabra = this.NIVELES[this.nivel].palabra
    const palabras = this.tablero.map(fila => fila.join(''))

    for (let i = 0; i < palabras.length; i++) {
      // Si la palabra está en el tablero...
      if (palabras[i].includes(palabra)) {
        // Incrementa el nivel
        this.nivel++

        // Si se ha alcanzado el último nivel, sale al menú principal
        if (this.nivel >= this.NIVELES.length) {
          this.nivel = 0
          setTimeout(() => {
            alert('Has ganado!')
            screen = new MainMenuScreen()
          }, 100)
          return
        }
        // Si no, inicia la transición
        this.transicion = true
        this.reset()
        return
      }
    }
  }

  // Método para actualizar la pantalla
  update() {}

  // Método para dibujar la pantalla
  draw() {
    // Si estamos en transición, dibuja la pantalla de transición
    if (this.transicion) {
      image(
        this.nivel === 1 ? imgTransicion1Bg : imgTransicion2Bg,
        0,
        0,
        width,
        height
      )
      return
    }

    // Dibuja el tablero
    push()
    translate(70, 70)
    for (let i = 0; i < this.tablero.length; i++) {
      for (let j = 0; j < this.tablero[i].length; j++) {
        // Guarda el valor de la casilla
        const casilla = this.tablero[i][j]

        noFill()
        rect(j * 64, i * 64, 64, 64)
        // Dibuja la casilla según su valor
        switch (casilla) {
          case VACIO:
            break
          case MURO:
            image(imgMuro, j * 64, i * 64, 64, 64)
            break
          case JUGADOR:
            image(imgAbuelo, j * 64, i * 64, 64, 64)
            break
          default:
            fill(0)
            textSize(40)
            textAlign(CENTER)
            text(casilla, j * 64, i * 64 + 15, 64, 64)
            break
        }
      }
    }
    pop()

    // Dibuja el botón de reiniciar
    this.botonReiniciar.draw()
  }

  // Método para manejar eventos de teclado
  keyPressed(event) {
    // Si se presiona Escape, ir a la pantalla de menú principal
    if (event.key === 'Escape') {
      screen = new MainMenuScreen()
      return
    }

    // Si se presiona R, reinicia el nivel
    if (event.key === 'r') {
      this.reset()
      return
    }

    // Si se presiona la barra espaciadora o Enter, termina la transición, si está activa
    if (event.key === ' ' || event.key === 'Enter') {
      this.transicion = false
      return
    }

    // Mueve al jugador según la tecla presionada
    if (
      event.key === 'ArrowUp' ||
      event.key === 'ArrowDown' ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight'
    ) {
      // Encuentra la posición del jugador
      const y = this.tablero.findIndex(fila => fila.includes(JUGADOR))
      const x = this.tablero[y].findIndex(casilla => casilla === JUGADOR)
      let newX = x
      let newY = y
      let postX = x
      let postY = y

      // Calcula la nueva posición del jugador y la posible letra según la tecla presionada
      if (event.key === 'ArrowUp') {
        newY = y - 1
        postY = y - 2
      } else if (event.key === 'ArrowRight') {
        newX = x + 1
        postX = x + 2
      } else if (event.key === 'ArrowDown') {
        newY = y + 1
        postY = y + 2
      } else if (event.key === 'ArrowLeft') {
        newX = x - 1
        postX = x - 2
      }

      // Si el movimiento es contra un muro, no se mueve
      if (this.tablero[newY][newX] === MURO) {
        return
      }
      // Si el movimiento es a un espacio vacío, mueve al jugador
      else if (this.tablero[newY][newX] === VACIO) {
        this.tablero[newY][newX] = JUGADOR
        this.tablero[y][x] = VACIO
      }
      // Si el movimiento es a una letra, y el siguiente espacio está vacío, mueve la letra
      else if (this.tablero[postY][postX] === VACIO) {
        this.tablero[postY][postX] = this.tablero[newY][newX]
        this.tablero[newY][newX] = JUGADOR
        this.tablero[y][x] = VACIO
        setTimeout(this.checkVictory.bind(this), 1000)
      }
    }
  }

  // Método para manejar click del ratón
  mousePressed(event) {
    this.transicion = false
    this.botonReiniciar.mousePressed()
  }

  // Método para manejar el movimiento del ratón
  mouseMoved(event) {
    // Actualizar el cursor según la posición del ratón
    if (this.botonReiniciar.isMouseOver()) {
      cursor(HAND)
    } else {
      cursor(ARROW)
    }
  }
}
