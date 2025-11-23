# Maxima

> [!CAUTION]
> The repository has not been published to NPM/JSR.

Maxima is a v8ui / jsui graphical extension framework to build rich js interfaces in max / max4live

```ts
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
```
