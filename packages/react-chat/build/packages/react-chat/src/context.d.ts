import { useRuntime } from '@/hooks';
import { LiveAgentPlatform } from '../../../shared/live-agent-platform.enum';
export interface RuntimeEvents {
    live_agent: (platform: LiveAgentPlatform) => void;
}
export interface RuntimeContextValue {
    runtime: ReturnType<typeof useRuntime>;
    subscribe: <K extends keyof RuntimeEvents>(event: K, callback: RuntimeEvents[K]) => void;
}
export declare const RuntimeContext: import("react").Context<RuntimeContextValue | null>;
export declare const RuntimeProvider: React.FC<React.PropsWithChildren>;
