import { DeviceType } from '../types';
import { Device } from 'amazon-chime-sdk-js';
export declare const getFormattedDropdownDeviceOptions: (jsonObject: any) => DeviceType[];
export declare const videoInputSelectionToDevice: (deviceId: string) => Device;
export declare const audioInputSelectionToDevice: (deviceId: string) => Device;
export declare const isOptionActive: (meetingManagerDeviceId: string | null, currentDeviceId: string) => boolean;
export declare const supportsSetSinkId: () => boolean;
