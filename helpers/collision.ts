import { Component } from "../components/component";

export function collisionDetection(first: Component<any>, second: Component<any>) {
  return (
      first.x  < second.x + second.width &&
      first.x + first.width > second.x &&
      first.y < second.y + second.height &&
      first.y + first.height > second.y
    );
}
