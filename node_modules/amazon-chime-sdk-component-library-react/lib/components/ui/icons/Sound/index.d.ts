import React from 'react';
import { SvgProps } from '../Svg';
interface SoundProps extends SvgProps {
    /** Whether or not should show a sound off icon. */
    disabled?: boolean;
}
declare const Sound: React.SFC<SoundProps>;
export default Sound;
