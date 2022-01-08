
import Svg, { G, Path } from 'react-native-svg';
import React from 'react';
import { SvgIcon } from '../../src/utils/icons/SvgIcon';
import { SvgIconProps } from '../../src/utils/icons/SvgInconProps';
export default function MessageIcon(props: SvgIconProps) {
    return (
         //@ts-ignore
        <SvgIcon {...props}>
            <Svg height={props.size} width={props.size} fill="#4c529e" viewBox="0 0 24 24">
                <G id="MessageIcon">
                    <Path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </G>
            </Svg>
        </SvgIcon>
    );
}
