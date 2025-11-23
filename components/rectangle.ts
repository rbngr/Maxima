import { ClickEvent, DragEvent, Event } from "../eventing/event";
import { Color } from "../graphics/color";
import { inBound } from "../helpers/constraints";
import { Component } from "./component";

export class Rectangle extends Component<RectangleState> {

  static of(props: RectangleProps) {
    const rect = new Rectangle()
    rect.background = props.background
    rect.x = props.x
    rect.y = props.y
    rect.width = props.width
    rect.height = props.height

    return rect
  }

  override draw() {
    mgraphics.set_source_rgba(this.background.color)
    mgraphics.rectangle(this.x, this.y, this.width, this.height)
    mgraphics.fill();
  }

  override ondrag(component: Component<RectangleState>, event: DragEvent): void {
    if(inBound(event.x, event.y, component)) {
      post("deine mutter")
    }
  }

  override onclick(component: Component<RectangleState>, event: ClickEvent): void {
    if(inBound(event.x, event.y, component)) {
      post(this._state.value)
    }
  }

}

export interface RectangleProps {
  x: number,
  y: number,
  width: number,
  height: number,
  background: Color
}

export interface RectangleState {
  value: number
}
