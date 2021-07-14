import React from 'react';
import { useAudioInputs } from './AudioInputProvider';
import { useAudioOutputs } from './AudioOutputProvider';
import { useVideoInputs } from './VideoInputProvider';
declare const DevicesProvider: React.FC;
export { DevicesProvider, useAudioInputs, useAudioOutputs, useVideoInputs };
