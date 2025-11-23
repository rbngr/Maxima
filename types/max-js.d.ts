// max-js.d.ts
// Type definitions for Max JS API — the global `max` object

declare namespace MaxJS {
  /** The singleton Max object, controlling the Max environment. */
  interface Max {
    // — Properties —
    readonly apppath: string;
    readonly arch: "arm64" | "x86" | "x64";
    readonly cmdkeydown: number;
    readonly ctrlkeydown: number;
    readonly frontpatcher: Patcher | null;
    readonly isplugin: number;
    readonly isruntime: number;
    readonly loadbangdisabled: number;
    readonly optionkeydown: number;
    readonly os: string;
    readonly osversion: string;
    readonly shiftkeydown: number;
    readonly time: number;        // current scheduler time in milliseconds
    readonly version: string;

    // — Methods —
    getattr(name: string): number | string | any[];
    getattrnames(): string[];
    getcolor(name: string): number[] | DictObj;
    setattr(name: string, value: any): void;
  }

  /** A minimal placeholder type for patcher objects. */
  interface Patcher {
    // you might extend this with relevant methods and properties
  }

  /** A placeholder type for Max dict objects. */
  interface DictObj {
    // you might extend this with keys/values etc.
  }
}

/** The global `max` object available inside Max JS contexts. */
declare const max: MaxJS.Max;
