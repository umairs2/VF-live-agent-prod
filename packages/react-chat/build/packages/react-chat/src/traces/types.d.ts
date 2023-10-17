import { useRuntime } from '@/hooks';
export declare type Trace = Exclude<Parameters<typeof useRuntime>[0]['traces'], undefined>[number];
