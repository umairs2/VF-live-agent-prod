import React, { MouseEventHandler } from 'react';
interface SettingsScreenProps {
    handleResume: () => void;
    handleCloseSettings: () => void;
    onStart: MouseEventHandler<HTMLButtonElement> | undefined;
}
declare const SettingsScreen: React.FC<SettingsScreenProps>;
export default SettingsScreen;
