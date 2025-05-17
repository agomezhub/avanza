// Una clase para crear botones en el juego
class Button {
  constructor(img, x, y, width, height, onClick) {
    this.img = img
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.onClick = onClick
  }

  // Método para dibujar el botón
  draw() {
    image(this.img, this.x, this.y, this.width, this.height)
  }

  // Método para verificar si el mouse está sobre el botón
  isMouseOver() {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    )
  }

  // Método para verificar si el botón fue presionado
  mousePressed() {
    // Si el mouse está sobre el botón y se presiona el botón izquierdo del mouse
    if (this.isMouseOver()) {
      // Ejecutar la función onClick
      this.onClick()
    }
  }
}
