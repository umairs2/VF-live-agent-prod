import React from 'react';
import type { useRuntime } from '@/hooks';
export interface RuntimeAPIContext extends Pick<ReturnType<typeof useRuntime>, 'send' | 'setStatus'> {
}
export declare const RuntimeAPIContext: React.Context<RuntimeAPIContext>;
export declare const RuntimeAPIProvider: ({ children, ...api }: RuntimeAPIContext & React.PropsWithChildren) => JSX.Element;
