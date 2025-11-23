import { ComponentHandlerFunction } from "../eventing/event-registry";
import { ClickEvent, DragEvent, Event } from "../eventing/event";
import { Color } from "../graphics/color";
import { RectangleState } from "./rectangle";

export abstract class Component<T> {

  private _eventRegistry: Map<string, ComponentHandlerFunction> = new Map();

  protected _state: T

  x: number = 0
  y: number = 0
  width: number = 0
  height: number = 0
  background: Color = Color.from(255, 255, 255, 1)

  constructor() {
    this._initHandlers()
  }

  state(state: T) {
    this._state = state
    return this
  }

  private _initHandlers() {
    this._eventRegistry.set("drag", this.ondrag.bind(this))
    this._eventRegistry.set("click", this.onclick.bind(this))
  }

  draw() {

  }

  delegateEvent(event: Event) {
    const registryEvent = this._eventRegistry.get(event.eventName)
    // Check if click position of event is in bound of target

    if(registryEvent) {
      registryEvent(this, event, this._state)
    }
  }

  protected ondrag(component: Component<T>, event: DragEvent) {

  }

  protected onclick(component: Component<T>, event: ClickEvent) {

  }

  click(handler: (component: Component<T>, event: ClickEvent, state: T) => void) {
    this._eventRegistry.set("click", handler)
  }

  drag(handler: (component: Component<T>, event: DragEvent, state: T) => void) {
    this._eventRegistry.set("drag", handler)
  }
}
