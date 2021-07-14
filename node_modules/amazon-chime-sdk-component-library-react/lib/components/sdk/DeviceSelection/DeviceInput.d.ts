import React from 'react';
import { DeviceType, SelectedDeviceId } from '../../../types';
interface Props {
    label: string;
    notFoundMsg: string;
    devices: DeviceType[];
    selectedDeviceId: SelectedDeviceId;
    onChange: (deviceId: string) => void;
}
declare const DeviceInput: React.FC<Props>;
export default DeviceInput;
