import { Component } from "../components/component"
import { Event } from "./event"

export class EventRegistry {

  private _events: Map<string, ComponentHandlerFunction[]> = new Map()

  register(eventType: string, handler: ComponentHandlerFunction) {
    if(!this._events.get(eventType)) {
     this._events.set(eventType, [])
    }

    this._events.get(eventType)?.push(handler)
  }

}

export type ComponentHandlerFunction = (component: Component<any>, event: Event, state: any) => void
