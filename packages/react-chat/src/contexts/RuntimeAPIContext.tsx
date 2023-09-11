import React, { createContext, useMemo } from 'react';
import * as R from 'remeda';
import { createNanoEvents } from 'nanoevents';

import type { useRuntime } from '@/hooks';

export interface RuntimeEvents {
  live_agent: (platform: LiveAgentPlatform) => void; // Assuming LiveAgentPlatform is imported or defined elsewhere
}

export interface RuntimeAPIContext extends Pick<ReturnType<typeof useRuntime>, 'send' | 'setStatus'> {
  subscribe: <K extends keyof RuntimeEvents>(event: K, callback: RuntimeEvents[K]) => void;
}

const defaultContextValues: RuntimeAPIContext = {
  send: R.noop,
  setStatus: R.noop,
  subscribe: R.noop, // Default no-op function for initialization
};

export const RuntimeAPIContext = createContext<RuntimeAPIContext>(defaultContextValues);

export const RuntimeAPIProvider: React.FC<RuntimeAPIContext & React.PropsWithChildren> = ({ children, ...api }) => {
  const emitter = useMemo(() => createNanoEvents<RuntimeEvents>(), []);

  const subscribe = (event: keyof RuntimeEvents, callback: (data?: any) => void) => emitter.on(event, callback);

  const contextValue = {
    ...api,
    subscribe,
  };

  return <RuntimeAPIContext.Provider value={contextValue}>{children}</RuntimeAPIContext.Provider>;
};
