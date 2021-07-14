import React from 'react';
import { SvgProps } from '../Svg';
interface DockProps extends SvgProps {
    /** Whether or not should show a undock icon. */
    undock?: boolean;
}
declare const Dock: React.SFC<DockProps>;
export default Dock;
