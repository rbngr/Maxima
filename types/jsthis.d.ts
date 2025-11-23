/**
 * Type definitions for `jsthis` (Max JS API).
 * Generated from the “jsthis” doc page.
 */

declare namespace MaxJS {
  interface JSThis {
    // — Properties —
    /** Whether automatic file reloading is on. */
    autowatch: boolean;

    /** The current object's box (read-only). */
    readonly box: MaxObj;

    /** Size of the font shown in the text editing window (points). */
    editfontsize: number;

    /** The inlet number which received the message triggering the currently executing function. */
    readonly inlet: number;

    /** Number of inlets for the current object instance. */
    inlets: number;

    /** Access arguments typed into the js object when instantiated. */
    readonly jsarguments: string[];

    /** Global Max instance (read-only). */
    readonly max: Max;

    /** Name of the message to the js object that invoked the method currently running (in global code this is nil). */
    readonly messagename: string;

    /** Number of outlets the js object should have. */
    outlets: number;

    // — Methods —
    anything(): void;
    arrayfromargs(message: string, args: IArguments): string[];
    assist(...args: any[]): void;
    bang(): void;
    declareattribute(
      attributeName: string,
      getterName?: string | null,
      setterName?: string | null,
      embed?: boolean,
      options?: object
    ): void;

    embedmessage(
      functionName: string,
      args: number | number[] | string | string[]
    ): void;

    getvalueof(): any | any[];
    hittest(x: number, y: number): number | boolean;
    list(...args: any[]): void;
    loadbang(): void;
    msg_array(value: any[]): void;
    msg_dictionary(value: object): void;
    msg_float(value: number): void;
    msg_int(value: number): void;
    msg_string(value: string): void;
    notifyclients(): void;
    notifydeleted(): void;

    onclick(
      x: number,
      y: number,
      button: number,
      mod1: number,
      shift: number,
      caps: number,
      opt: number,
      mod2: number
    ): void;

    ondblclick(
      x: number,
      y: number,
      button: number,
      mod1: number,
      shift: number,
      caps: number,
      opt: number,
      mod2: number
    ): void;

    ondrag(
      x: number,
      y: number,
      button: number,
      mod1: number,
      shift: number,
      caps: number,
      opt: number,
      mod2: number
    ): void;

    onidle(
      x: number,
      y: number,
      button: number,
      mod1: number,
      shift: number,
      caps: number,
      opt: number,
      mod2: number
    ): void;

    onidleout(
      x: number,
      y: number,
      button: number,
      mod1: number,
      shift: number,
      caps: number,
      opt: number,
      mod2: number
    ): void;

    onresize(width: number, height: number): void;

    outlet_array(n: number, array: any[]): void;
    outlet_dictionary(n: number, dictionary: object): void;
    outlet_string(n: number, str: string): void;
    outlet(n: number, ...args: any[]): void;

    paint(): void;
    refresh(): void;
    save(): void;
    setinletassist(n: number, callback: Function): void;
    setoutletassist(n: number, callback: Function): void;
    setvalueof(...args: number[] | string[]): void;
  }

  interface MaxObj {
    // minimal placeholder for the Max object reference
    rect?: number[];
    // you can extend with additional MaxObj methods/properties as needed
  }

  interface Max {
    preempt(arg: number): void;
    // add additional methods/properties from Max API if used
  }
}

/** Make the `jsthis` object available globally in the Max JS context */
declare const jsthis: MaxJS.JSThis;
