import React from 'react';
import type { TextMessageProps } from '@/components/SystemResponse/types';
export interface DefaultTextProps {
    /**
     * text whether in string or slate format
     */
    text: TextMessageProps['text'];
    onFileUploaded?: (url: string) => void;
}
declare const FileUpload: React.FC<DefaultTextProps>;
export default FileUpload;
