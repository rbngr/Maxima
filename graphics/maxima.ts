import { ClickEvent, Event } from "../eventing/event";
import { Component } from "../components/component";

export class Maxima {

  private _registry: Component<any>[] = []

  add(component: Component<any>) {
    this._registry.push(component)
  }

  addAll(...components: Component<any>[]) {
    components.forEach(c => {
      this._registry.push(c)

    })
  }

  bindEvent(event: Event) {
    this._registry.forEach(c => {
      c.delegateEvent(event)
    })
  }

  draw() {
    this._registry.forEach(c => c.draw())
  }

}
