import { Rectangle } from "./components/rectangle";
import { Toggle } from "./components/toggle";
import { ClickEvent, DragEvent } from "./eventing/event";
import { Color } from "./graphics/color";
import { Maxima } from "./graphics/maxima";

mgraphics.init();
mgraphics.autofill = 1;
mgraphics.relative_coords = 0;

const maxima = new Maxima()

const toggle = Toggle.of({
  x: 0,
  y: 0,
  width: 30,
  height: 30,
  onColor: Color.from(255, 255, 255, 1),
  offColor: Color.from(255, 255, 255, 0.2)
})

const toggle2 = Toggle.of({
  x: 100,
  y: 0,
  width: 30,
  height: 30,
  onColor: Color.from(255, 255, 255, 1),
  offColor: Color.from(255, 255, 255, 0.2)
}).collision(toggle)

maxima.add(toggle)
maxima.add(toggle2)

function paint() {
  maxima.draw()
}

function onclick(x: number, y: number) {
  maxima.bindEvent(new ClickEvent(x, y))
  mgraphics.redraw()
}

function ondrag(x: number, y: number, button: number) {
  maxima.bindEvent(new DragEvent(x, y, button))
  mgraphics.redraw()
}
