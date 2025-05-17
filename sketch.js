// Variables globales
let screen
let music = localStorage.getItem('avanza:music') === 'true'

// Método para cargar los assets
function preload() {
  // Sonidos
  musicBg = loadSound('assets/music.mp3')

  // Splash
  imgSplash = loadImage('assets/splash.png')

  // Intro
  imgIntroBg = loadImage('assets/intro-bg.png')
  imgBotonSaltar = loadImage('assets/boton-saltar.png')

  // Menu
  imgMenuBg = loadImage('assets/menu-bg.png')
  imgBotonJugar = loadImage('assets/boton-jugar.png')
  imgBotonMusicaOn = loadImage('assets/boton-musica-on.png')
  imgBotonMusicaOff = loadImage('assets/boton-musica-off.png')
  imgBotonInstrucciones = loadImage('assets/boton-instrucciones.png')

  // Tutorial
  imgTutorialBg = loadImage('assets/tutorial-bg.png')
  imgBotonAtras = loadImage('assets/boton-atras.png')

  // Juego
  imgMuro = loadImage('assets/muro.png')
  imgAbuelo = loadImage('assets/abuelo.png')
  imgBotonReiniciar = loadImage('assets/reiniciar.png')
  imgTransicion1Bg = loadImage('assets/transicion-1.png')
  imgTransicion2Bg = loadImage('assets/transicion-2.png')
}

// Método para inicializar el sketch
function setup() {
  // Inicializa el canvas
  createCanvas(720, 512)
  // Inicializa la pantalla
  screen = new SplashScreen()
  // Inicializa el sonido
  musicBg.setVolume(0.2)
  if (music) musicBg.play()
}

// Método para pintarizar el sketch
function draw() {
  // Pinta el fondo
  background('#E2FCFF')
  // Actualiza la pantalla actual
  screen?.update()
  // Dibuja la pantalla actual
  screen?.draw()
}

// Método para manejar eventos de teclado
function keyPressed(event) {
  screen?.keyPressed(event)
}

// Método para manejar click de mouse
function mousePressed(event) {
  if (event.target.tagName !== 'CANVAS') {
    return
  }

  screen?.mousePressed(event)
}

// Método para manejar el movimiento del mouse
function mouseMoved(event) {
  screen?.mouseMoved(event)
}
