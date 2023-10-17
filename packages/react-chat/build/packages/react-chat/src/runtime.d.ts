import { TraceDeclaration } from '@voiceflow/sdk-runtime';
import type { SystemResponseProps } from './components/SystemResponse';
export interface RuntimeContext extends Pick<SystemResponseProps, 'messages' | 'actions'> {
}
export declare const MESSAGE_TRACES: TraceDeclaration<RuntimeContext, any>[];
