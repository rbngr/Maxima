import { ClickEvent, DragEvent } from "../eventing/event"
import { Color } from "../graphics/color"
import { inBound } from "../helpers/constraints"
import { Component } from "./component"

export class Toggle extends Component<ToggleState> {

  protected _state: ToggleState = {
    isDragging: false,
    on: false
  }

  onColor: Color
  offColor: Color

  static of(props: ToggleProps) {
    const rect = new Toggle()
    rect.onColor = props.onColor,
    rect.offColor = props.offColor
    rect.x = props.x
    rect.y = props.y
    rect.width = props.width
    rect.height = props.height

    return rect
  }

  protected override onclick(component: Component<ToggleState>, event: ClickEvent): void {
    if(inBound(event.x, event.y, component)) {
      this._state.on = !this._state.on
    }
  }

  protected ondrag(component: Component<ToggleState>, event: DragEvent): void {

    if(inBound(event.x, event.y, component)) {
      if(event.mouseUp === 1) {
        this._state.isDragging = true
      }
    }

    if(event.mouseUp === 0) {
      this._state.isDragging = false
    }

    if(this._state.isDragging) {
        this.x = event.x
    }
  }

  override draw(): void {
    if(this._state.on) {
      mgraphics.set_source_rgba(this.onColor.color)
    } else {
      mgraphics.set_source_rgba(this.offColor.color)
    }

    mgraphics.rectangle(this.x, this.y, this.width, this.height)
    mgraphics.fill()
  }

}

export interface ToggleState {
  isDragging: boolean
  on: boolean
}


export interface ToggleProps {
  x: number,
  y: number,
  width: number,
  height: number,
  onColor: Color,
  offColor: Color
}
