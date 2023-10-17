export declare const useLiveAgent: (runtime: any) => {
    isEnabled: boolean;
    talkToRobot: () => void;
    sendUserReply: (content: string[], attachmentUrls: any) => Promise<void>;
};
