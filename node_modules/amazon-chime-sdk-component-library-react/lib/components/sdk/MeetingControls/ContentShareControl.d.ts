import React from 'react';
interface Props {
    /** The label that will be shown for content share control, it defaults to `Content`. */
    label?: string;
    /** The label that will be shown for pausing content share button in content share control, it defaults to `Pause`. */
    pauseLabel?: string;
    /** The label that will be shown for unpausing content share button in content share control, it defaults to `Unpause`. */
    unpauseLabel?: string;
}
declare const ContentShareControl: React.FC<Props>;
export default ContentShareControl;
