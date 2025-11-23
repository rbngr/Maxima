export abstract class Event {
  eventName: string

  constraints(): boolean {
    return true
  }
}

export class ClickEvent extends Event {

  constructor(x: number, y: number) {
    super()
    this.x = x,
    this.y = y
  }

  eventName: string = "click"
  x = 0
  y = 0

  constraints() {
    return true
  }
}

export class DragEvent extends Event {

  constructor(x, y, mouseUp) {
    super()
    this.x = x,
    this.y = y
    this.mouseUp = mouseUp
  }

  eventName: string = "drag"
  x = 0
  y = 0
  mouseUp = 0

  constraints() {
    return true
  }
}
