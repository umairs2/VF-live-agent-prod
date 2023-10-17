import React from 'react';
export declare type Stringify<T> = T extends string | number ? T | `${T}` : T;
export declare type VariantProps<Variants extends Record<string, React.FC<any>>, Default extends keyof Variants = never> = {
    [K in keyof Variants]: (K extends Default ? {
        variant?: Stringify<K>;
    } : {
        variant: Stringify<K>;
    }) & React.ComponentProps<Variants[K]>;
}[keyof Variants];
export declare const bindVariants: <Variants extends Record<string, React.FC<any>>, Default extends keyof Variants = never>(variants: Variants, defaultVariant?: Default | undefined) => React.ForwardRefExoticComponent<React.PropsWithoutRef<VariantProps<Variants, Default>> & React.RefAttributes<HTMLElement>>;
