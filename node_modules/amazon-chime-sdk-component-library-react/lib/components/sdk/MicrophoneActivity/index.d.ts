import React from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps {
    /** The Chime attendee ID */
    attendeeId: string;
}
export declare const MicrophoneActivity: React.FC<Props>;
export default MicrophoneActivity;
