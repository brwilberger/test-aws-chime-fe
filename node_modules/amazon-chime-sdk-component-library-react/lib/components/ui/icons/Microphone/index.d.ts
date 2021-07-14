import React from 'react';
import { SvgProps } from '../Svg';
export interface MicrophoneProps extends SvgProps {
    /** Whether or not should show muted status. */
    muted?: boolean;
    /** Whether or not should show poor connected status. */
    poorConnection?: boolean;
}
declare const Microphone: React.SFC<MicrophoneProps>;
export default Microphone;
