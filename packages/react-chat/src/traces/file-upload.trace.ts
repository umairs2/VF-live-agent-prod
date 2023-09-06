import { CustomMessage } from '../custom-message.enum';
import { Trace } from './types';

export const FileUploadTrace: Trace = {
  canHandle: ({ type }) => type === 'file_upload',
  handle: ({ context }, trace) => {
    context.messages.push({
      type: CustomMessage.FILE_UPLOAD,
      text: `Her kan du laste opp en fil!`,
    });
    return context;
  },
};
