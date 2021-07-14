import React from 'react';
interface Props {
    /** The message that will be shown when no audio output speaker devices are found. */
    notFoundMsg?: string;
    /** The label that will be shown for speaker selection, it defaults to `Speaker source`. */
    label?: string;
    /** The callback fired when the selection is changed. It is required if you want to add testing functionality around speaker selection. */
    onChange?: (selectedAudioOutputDeviceId: string) => void;
}
export declare const SpeakerSelection: React.FC<Props>;
export default SpeakerSelection;
