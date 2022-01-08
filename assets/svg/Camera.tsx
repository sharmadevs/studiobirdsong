import Svg, { G, Path,Circle } from 'react-native-svg';
import React from 'react';
import { SvgIconProps } from '../../src/utils/icons/SvgInconProps';
import { SvgIcon } from '../../src/utils/icons/SvgIcon';

export default function CameraIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <Svg height={props.size} width={props.size} stroke="#000" viewBox="0 0 24 24">
                <G id="CameraIcon">
                    <Path
                        d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                        fill="white"/>
                        <Circle cx="12" cy="13" r="4"/>
                </G>
            </Svg>
        </SvgIcon>
    );
}
