import { Rectangle } from "./components/rectangle";
import { ClickEvent, DragEvent } from "./eventing/event";
import { Color } from "./graphics/color";
import { Maxima } from "./graphics/maxima";

mgraphics.init();
mgraphics.autofill = 1;
mgraphics.relative_coords = 0;

const maxima = new Maxima()

const rect = Rectangle.of({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  background: Color.from(255, 255, 255, 1)
}).state({
  value: 39
})


maxima.add(rect)

function paint() {
  maxima.draw()
}

function onclick(x: number, y: number) {
  maxima.bindEvent(new ClickEvent(x, y))
}

function ondrag(x: number, y: number) {
  maxima.bindEvent(new DragEvent(x, y))
}
