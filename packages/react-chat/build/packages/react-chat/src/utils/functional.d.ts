export declare const chain: <Args extends any[]>(...fns: (((...args: Args) => void) | undefined)[]) => (...args: Args) => void;
export declare const noop: () => void;
