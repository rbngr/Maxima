// mgraphics.d.ts
// Type definitions for Max JS API — the global `mgraphics` object and possible instances

interface MGraphics {

  /** Interface for the MGraphics drawing context. */

    // — Properties —

    /** If 1, then any stroke will automatically trigger a fill. */
    autofill: 0 | 1;

    /** If 1, then painting of the global mgraphics object is turned on. */
    autopaint: 0 | 1;

    /** If 1, then the sketch layer is disabled and only mgraphics layer is displayed. */
    autosketch: 0 | 1;

    /** If 1, uses relative coordinates (-1 to +1) instead of device pixels. */
    relative_coords: 0 | 1;

    /** The current size of the canvas: [width, height]. Read‐only in global instance. */
    readonly size: [number, number];

    // — Constructors (for offscreen instances) —

    /** Create a new MGraphics instance of given width & height. */
    new (): MGraphics;  // too generic; but for completeness
    // Alternatively: constructor(width: number, height: number);

    /** Create offscreen MGraphics with width and height. */
    (width: number, height: number): MGraphics;

    // — Methods —

    init(): void;
    redraw(): void;
    save(): void;
    restore(): void;

    translate(x: number, y: number): void;
    rotate(angle: number): void;
    scale(x: number, y?: number): void;
    transform(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void;

    identity_matrix(): void;
    set_matrix(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void;
    get_matrix(): [number, number, number, number, number, number];

    device_to_user(pos: [number, number]): [number, number];
    user_to_device(pos: [number, number]): [number, number];

    new_path(): void;
    close_path(): void;
    copy_path(): MGraphicsPathHandle;
    append_path(path: MGraphicsPathHandle): void;

    move_to(x: number, y: number): void;
    line_to(x: number, y: number): void;
    rel_move_to(dx: number, dy: number): void;
    rel_line_to(dx: number, dy: number): void;
    curve_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    rel_curve_to(dx1: number, dy1: number, dx2: number, dy2: number, dx3: number, dy3: number): void;

    arc(xc: number, yc: number, radius: number, angle1: number, angle2: number): void;
    arc_negative(xc: number, yc: number, radius: number, angle1: number, angle2: number): void;
    ovalarc(xc: number, yc: number, radius: number, angle1: number, angle2: number): void;

    rectangle(x: number, y: number, width: number, height: number): void;
    rectangle_rounded(x: number, y: number, width: number, height: number, rx: number, ry: number): void;
    ellipse(x: number, y: number, width: number, height: number): void;

    path_roundcorners(radius: number): void;

    fill(): void;
    stroke(): void;
    fill_preserve(): void;
    stroke_preserve(): void;
    fill_with_alpha(alpha: number): void;
    fill_preserve_with_alpha(alpha: number): void;
    stroke_with_alpha(alpha: number): void;
    stroke_preserve_with_alpha(alpha: number): void;

    in_fill(pos: [number, number]): 0 | 1;
    fill_extent(): [number, number, number, number];
    get_current_point(): [number, number];

    select_font_face(face: string, slant?: number, weight?: number): void;
    set_font_size(size: number): void;
    font_extents(): { ascent: number; descent: number; height: number };
    text_path(text: string): void;
    show_text(text: string): void;
    text_measure(text: string): { x_bearing: number; y_bearing: number; width: number; height: number; x_advance: number; y_advance: number };

    set_line_width(width: number): void;
    get_line_width(): number;
    set_line_cap(cap: "butt" | "round" | "square"): void;
    get_line_cap(): "butt" | "round" | "square";
    set_line_join(join: "miter" | "round" | "bevel"): void;
    get_line_join(): "miter" | "round" | "bevel";

    set_source_rgb(r: number, g: number, b: number): void;
    set_source_rgba(r: number, g: number, b: number, a: number): void;
       set_source_rgba([r, g, b, a]): void;

    /** Set source to an image surface */
    set_source_surface(image: any /* Image object from Max JS */, dx?: number, dy?: number): void;

    /** Set source pattern (for gradients, etc) */
    set_source(pattern: MGraphicsPattern): void;

    /** Pattern creation routines */
    pattern_create_rgba(r: number, g: number, b: number, a: number): MGraphicsPattern;
    pattern_create_linear(x0: number, y0: number, x1: number, y1: number): MGraphicsPattern;
    pattern_create_radial(cx0: number, cy0: number, radius0: number, cx1: number, cy1: number, radius1: number): MGraphicsPattern;
    pattern_create_for_surface(surface: any /* Image */, extend?: number /* maybe enum */): MGraphicsPattern;

    scale_source_rgba(r: number, g: number, b: number, a: number): void;
    translate_source_rgba(r: number, g: number, b: number, a: number): void;

    image_surface_draw(image: any /* Image object */, source_rect?: [number, number, number, number]): void;

    svg_render(svg: any /* Svg object or filepath */, x?: number, y?: number, width?: number, height?: number): void;

    // … you can add more as needed
  }


export interface MGraphicsPattern {

}

export interface MGraphicsPathHandle {

}

declare global {
  const mgraphics: MGraphics;
}
