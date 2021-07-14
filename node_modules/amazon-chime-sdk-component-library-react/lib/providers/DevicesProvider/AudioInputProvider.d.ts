import React from 'react';
import { DeviceTypeContext, DeviceConfig } from '../../types';
declare const AudioInputProvider: React.FC;
declare const useAudioInputs: (props?: DeviceConfig | undefined) => DeviceTypeContext;
export { AudioInputProvider, useAudioInputs };
