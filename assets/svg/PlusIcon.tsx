import Svg, { G, Rect } from 'react-native-svg';
import React from 'react';
import { SvgIconProps } from "../../src/utils/icons/SvgInconProps";
import { SvgIcon } from "../../src/utils/icons/SvgIcon";


export default function PlusIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <Svg height={props.size} width={props.size} viewBox="0 0 6 6">
                <G id="PlusIcon">
                    <Rect x="2.5" width="1" height="6" fill="black" />
                    <Rect x="6" y="2.5" width="1" height="6" transform="rotate(90 6 2.5)" fill="black"/>
                </G>
            </Svg>
        </SvgIcon>
    );
}
