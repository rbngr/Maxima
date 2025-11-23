import { Component } from "../components/component";

export function inBound(x, y, component: Component<any>): boolean {
  return (
    x >= component.x && x < (component.x + component.width) &&
    y >= component.y && y < (component.y + component.height)
  )
}
