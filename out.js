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

// helpers/collision.ts
function collisionDetection(first, second) {
  return first.x < second.x + second.width && first.x + first.width > second.x && first.y < second.y + second.height && first.y + first.height > second.y;
}

// components/component.ts
var Component3 = class {
  constructor() {
    this._eventRegistry = /* @__PURE__ */ new Map();
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.background = Color.from(255, 255, 255, 1);
    this._collisionObjects = [];
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
  collision(component) {
    this._collisionObjects.push(component);
    return this;
  }
  delegateEvent(event) {
    const registryEvent = this._eventRegistry.get(event.eventName);
    let collisionDetected = false;
    this._collisionObjects.forEach((c) => {
      if (collisionDetection(this, c)) {
        collisionDetected = true;
      }
    });
    if (collisionDetected) {
      return;
    }
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
    return this;
  }
  drag(handler) {
    this._eventRegistry.set("drag", handler);
    return this;
  }
};

// components/toggle.ts
var Toggle = class _Toggle extends Component3 {
  constructor() {
    super(...arguments);
    this._state = {
      isDragging: false,
      on: false
    };
  }
  static of(props) {
    const rect = new _Toggle();
    rect.onColor = props.onColor, rect.offColor = props.offColor;
    rect.x = props.x;
    rect.y = props.y;
    rect.width = props.width;
    rect.height = props.height;
    return rect;
  }
  onclick(component, event) {
    if (inBound(event.x, event.y, component)) {
      this._state.on = !this._state.on;
    }
  }
  ondrag(component, event) {
    if (inBound(event.x, event.y, component)) {
      if (event.mouseUp === 1) {
        this._state.isDragging = true;
      }
    }
    if (event.mouseUp === 0) {
      this._state.isDragging = false;
    }
    if (this._state.isDragging) {
      this.x = event.x;
    }
  }
  draw() {
    if (this._state.on) {
      mgraphics.set_source_rgba(this.onColor.color);
    } else {
      mgraphics.set_source_rgba(this.offColor.color);
    }
    mgraphics.rectangle(this.x, this.y, this.width, this.height);
    mgraphics.fill();
  }
};

// eventing/event.ts
var Event2 = class {
  constraints() {
    return true;
  }
};
var ClickEvent3 = class extends Event2 {
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
var DragEvent3 = class extends Event2 {
  constructor(x, y, mouseUp) {
    super();
    this.eventName = "drag";
    this.x = 0;
    this.y = 0;
    this.mouseUp = 0;
    this.x = x, this.y = y;
    this.mouseUp = mouseUp;
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
    post(this._registry.length);
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
var toggle = Toggle.of({
  x: 0,
  y: 0,
  width: 30,
  height: 30,
  onColor: Color.from(255, 255, 255, 1),
  offColor: Color.from(255, 255, 255, 0.2)
});
var toggle2 = Toggle.of({
  x: 100,
  y: 0,
  width: 30,
  height: 30,
  onColor: Color.from(255, 255, 255, 1),
  offColor: Color.from(255, 255, 255, 0.2)
}).collision(toggle);
maxima.add(toggle);
maxima.add(toggle2);
function paint() {
  maxima.draw();
}
function onclick(x, y) {
  maxima.bindEvent(new ClickEvent3(x, y));
  mgraphics.redraw();
}
function ondrag(x, y, button) {
  maxima.bindEvent(new DragEvent3(x, y, button));
  mgraphics.redraw();
}
