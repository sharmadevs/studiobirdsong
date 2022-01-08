
import Svg, { G, Path } from 'react-native-svg';
import React from 'react';
import { SvgIconProps } from 'utils/icons/SvgInconProps';
import { SvgIcon } from 'utils/icons/SvgIcon';
export default function BackIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <Svg height={props.size} width={props.size} viewBox="0 0 7 13">
                <G id="BackIcon">
                    <Path fill-rule="evenodd" clip-rule="evenodd"
                          d="M1.41421 6.00577L6.71288 0.707107L6.00577 0L0.353553 5.65222L0 6.00577L0.353553 6.35933L6.00577 12.0115L6.71288 11.3044L1.41421 6.00577Z"
                          fill="blue"/>
                </G>
            </Svg>
        </SvgIcon>
    );
}
