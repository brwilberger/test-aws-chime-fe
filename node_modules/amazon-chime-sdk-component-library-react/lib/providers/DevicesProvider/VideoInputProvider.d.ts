import React from 'react';
import { DeviceTypeContext, DeviceConfig } from '../../types';
declare const VideoInputProvider: React.FC;
declare const useVideoInputs: (props?: DeviceConfig | undefined) => DeviceTypeContext;
export { VideoInputProvider, useVideoInputs };
