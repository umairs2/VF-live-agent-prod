import { FeedbackProps } from '../Feedback';
import { MessageProps } from './types';
export interface SystemMessageProps extends React.PropsWithChildren {
    /**
     * An image URL for an avatar to associate this message with.
     */
    avatar: string;
    /**
     * A unix timestamp indicating when this message was sent.
     */
    timestamp: number;
    /**
     * A single message to render with a {@link Message} component.
     */
    message?: MessageProps;
    /**
     * If true, renders an avatar next to the message.
     */
    withImage: boolean;
    /**
     * If provided, will display {@link Feedback} component.
     * @default false
     */
    feedback?: FeedbackProps | undefined;
}
declare const SystemMessage: React.FC<SystemMessageProps>;
/**
 * An individual message within a system response.
 */
export default SystemMessage;
