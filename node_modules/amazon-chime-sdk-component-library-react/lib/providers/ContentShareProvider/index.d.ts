import React from 'react';
import { ContentShareState } from './state';
import { ContentShareControlContextType } from '../../types';
declare const ContentShareProvider: React.FC;
declare const useContentShareState: () => ContentShareState;
declare const useContentShareControls: () => ContentShareControlContextType;
export { ContentShareProvider, useContentShareState, useContentShareControls };
