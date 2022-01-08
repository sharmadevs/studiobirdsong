
import Svg, { G, Path } from 'react-native-svg';
import React from 'react';
import { SvgIcon } from '../../src/utils/icons/SvgIcon';
import { SvgIconProps } from '../../src/utils/icons/SvgInconProps';
export default function ArrowIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <Svg height={10} width={21} viewBox="0 0 25 13">
                <G id="ArrowIcon">
                <Path d="M1 1L12.5 12L24 1" stroke="white" stroke-miterlimit="10" stroke-linecap="square"/>
                </G>
            </Svg>
        </SvgIcon>
    );
}
