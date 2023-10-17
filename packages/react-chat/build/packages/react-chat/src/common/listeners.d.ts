import * as PostMessage from './postMessage';
export interface MessageListener<T extends PostMessage.Type> {
    type: T;
    action: (listener: PostMessage.MessageTypeMap[T]) => void;
}
interface Context {
    listeners: MessageListener<any>[];
}
export declare const context: Context;
export declare const useListenMessage: <T extends PostMessage.Type>(type: T, action: (listener: PostMessage.MessageTypeMap<PostMessage.AnyMessage>[T]) => void) => void;
export {};
