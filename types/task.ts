/**
 * Task class for Max JS (Cycling ’74)
 */
declare class Task {
  /**
   * Create a new Task.
   * @param fn - The function to execute
   * @param obj - The `this` object when the function executes (optional)
   * @param args - Arguments to pass to `fn` when called (optional)
   */
  constructor(fn: (...args: any[]) => void, obj?: object, args?: any[]);

  /** The arguments passed to the task function. */
  arguments: any[];

  /** The function executed in the Task. Can be reassigned. */
  function: (...args: any[]) => void;

  /** Time interval in milliseconds between repeats. Default is 500 ms. */
  interval: number;

  /** Number of times the task function has been called. Read-only. */
  readonly iterations: number;

  /** The `this` object for the task function. */
  object: object;

  /** Whether the task is currently running. Read-only. */
  readonly running: boolean;

  /** Whether the Task is valid / not yet freed. */
  valid: boolean;

  /**
   * Cancel any future executions of the Task.
   */
  cancel(): void;

  /**
   * Execute the task function **immediately** (with `arguments`).
   */
  execute(): void;

  /**
   * Invalidate the task so it can be garbage collected.
   */
  freepeer(): void;

  /**
   * Repeat the task function.
   * @param n - Number of repetitions. If omitted, repeats indefinitely until canceled.
   * @param initialdelay - Delay (ms) before the first execution (optional).
   */
  repeat(n?: number, initialdelay?: number): void;

  /**
   * Schedule the task function to run once after a delay.
   * @param delay - Delay in ms before execution (optional; if omitted, uses `interval` or immediate?).
   */
  schedule(delay?: number): void;
}
