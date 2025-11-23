// helpers/constraints.ts
function inBound(x, y, component) {
  return x >= component.x && x < component.x + component.width && y >= component.y && y < component.y + component.height;
}

// graphics/color.ts
var Color = class _Color {
  get color() {
    return [this._red, this._green, this._blue, this._alpha];
  }
  constructor(red, green, blue, alpha) {
    this._red = red / 255;
    this._green = green / 255;
    this._blue = blue / 255;
    this._alpha = alpha;
  }
  static from(red, green, blue, alpha) {
    return new _Color(red, green, blue, alpha);
  }
};

// components/component.ts
var Component2 = class {
  constructor() {
    this._eventRegistry = /* @__PURE__ */ new Map();
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.background = Color.from(255, 255, 255, 1);
    this._initHandlers();
  }
  state(state) {
    this._state = state;
    return this;
  }
  _initHandlers() {
    this._eventRegistry.set("drag", this.ondrag.bind(this));
    this._eventRegistry.set("click", this.onclick.bind(this));
  }
  draw() {
  }
  delegateEvent(event) {
    const registryEvent = this._eventRegistry.get(event.eventName);
    if (registryEvent) {
      registryEvent(this, event, this._state);
    }
  }
  ondrag(component, event) {
  }
  onclick(component, event) {
  }
  click(handler) {
    this._eventRegistry.set("click", handler);
  }
  drag(handler) {
    this._eventRegistry.set("drag", handler);
  }
};

// components/rectangle.ts
var Rectangle = class _Rectangle extends Component2 {
  static of(props) {
    const rect2 = new _Rectangle();
    rect2.background = props.background;
    rect2.x = props.x;
    rect2.y = props.y;
    rect2.width = props.width;
    rect2.height = props.height;
    return rect2;
  }
  draw() {
    mgraphics.set_source_rgba(this.background.color);
    mgraphics.rectangle(this.x, this.y, this.width, this.height);
    mgraphics.fill();
  }
  ondrag(component, event) {
    if (inBound(event.x, event.y, component)) {
      post("deine mutter");
    }
  }
  onclick(component, event) {
    if (inBound(event.x, event.y, component)) {
      post(this._state.value);
    }
  }
};

// eventing/event.ts
var Event3 = class {
  constraints() {
    return true;
  }
};
var ClickEvent3 = class extends Event3 {
  constructor(x, y) {
    super();
    this.eventName = "click";
    this.x = 0;
    this.y = 0;
    this.x = x, this.y = y;
  }
  constraints() {
    return true;
  }
};
var DragEvent3 = class extends Event3 {
  constructor(x, y) {
    super();
    this.eventName = "drag";
    this.x = 0;
    this.y = 0;
    this.x = x, this.y = y;
  }
  constraints() {
    return true;
  }
};

// graphics/maxima.ts
var Maxima = class {
  constructor() {
    this._registry = [];
  }
  add(component) {
    this._registry.push(component);
  }
  addAll(...components) {
    components.forEach((c) => {
      this._registry.push(c);
    });
  }
  bindEvent(event) {
    this._registry.forEach((c) => {
      c.delegateEvent(event);
    });
  }
  draw() {
    this._registry.forEach((c) => c.draw());
  }
};

// main.ts
mgraphics.init();
mgraphics.autofill = 1;
mgraphics.relative_coords = 0;
var maxima = new Maxima();
var rect = Rectangle.of({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  background: Color.from(255, 255, 255, 1)
}).state({
  value: 39
});
maxima.add(rect);
function paint() {
  maxima.draw();
}
function onclick(x, y) {
  maxima.bindEvent(new ClickEvent3(x, y));
}
function ondrag(x, y) {
  maxima.bindEvent(new DragEvent3(x, y));
}
