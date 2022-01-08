import Svg, { G, Path } from 'react-native-svg';
import React from 'react';
import { SvgIconProps } from '../../src/utils/icons/SvgInconProps';
import { SvgIcon } from '../../src/utils/icons/SvgIcon';

export default function ArrowRightIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <Svg height={props.size} width={props.size} viewBox="0 0 7 13">
                <G id="ArrowRightIcon">
                    <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.29868 6.00576L1.05522e-05 11.3044L0.707118 12.0115L6.35934 6.35932L6.71289 6.00576L6.35934 5.65221L0.707119 -1.19691e-05L1.14787e-05 0.707095L5.29868 6.00576Z"
                        fill="white"
                    />
                </G>
            </Svg>
        </SvgIcon>
    );
}
