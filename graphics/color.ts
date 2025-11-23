export class Color {

  _red: number;
  _green: number;
  _blue: number;
  _alpha: number;

  get color(): [number, number, number, number] {
    return [this._red, this._green, this._blue, this._alpha]
  }

  constructor(red: number, green: number, blue: number, alpha: number) {
    this._red = red / 255;
    this._green = green / 255;
    this._blue = blue / 255;
    this._alpha = alpha;
  }

  public static from(red: number, green: number, blue: number, alpha: number): Color {
    return new Color(red, green, blue, alpha)
  }

}
