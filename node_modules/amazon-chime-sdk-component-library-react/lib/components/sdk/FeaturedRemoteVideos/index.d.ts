import React, { FC, HTMLAttributes } from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps, Omit<HTMLAttributes<HTMLDivElement>, 'css'> {
}
export declare const FeaturedRemoteVideos: FC<Props>;
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
