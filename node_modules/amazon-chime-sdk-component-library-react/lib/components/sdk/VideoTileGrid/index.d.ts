import React from 'react';
import { Layout } from '../../ui/VideoGrid';
import { BaseProps } from '../../ui/Base';
interface Props extends BaseProps {
    /** A component to render when there are no remote videos present */
    noRemoteVideoView?: React.ReactNode;
    /** The layout of the grid. */
    layout?: Layout;
}
export declare const VideoTileGrid: React.FC<Props>;
export default VideoTileGrid;
