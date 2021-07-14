import React from 'react';
interface Props {
    /** The label that will be shown when microphone is muted , it defaults to `Mute`. */
    muteLabel?: string;
    /** The label that will be shown when microphone is unmuted, it defaults to `Unmute`. */
    unmuteLabel?: string;
}
declare const AudioInputControl: React.FC<Props>;
export default AudioInputControl;
