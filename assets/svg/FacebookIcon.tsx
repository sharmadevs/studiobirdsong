import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import React from 'react';
import { SvgIconProps } from '../../src/utils/icons/SvgInconProps';
import { SvgIcon } from '../../src/utils/icons/SvgIcon';

export default function FacebookIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <Svg height={props.size} width={props.size} viewBox="0 0 24 24">
                <G clip-path="url(#clip0)" id="FacebookIcon">
                    <Path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                        fill="#1877F1"
                    />
                   
                </G>
              
            </Svg>
        </SvgIcon>
    );
}
