
import Svg, { G, Path } from 'react-native-svg';
import React from 'react';
import { SvgIcon } from '../../src/utils/icons/SvgIcon';
import { SvgIconProps } from '../../src/utils/icons/SvgInconProps';
export default function PhoneIcon(props: SvgIconProps) {
    return (
         //@ts-ignore
        <SvgIcon {...props}>
            <Svg height={props.size} width={props.size} fill="#4c529e" viewBox="0 0 24 24">
                <G id="PhoneIcon">
                    <Path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z" />
                </G>
            </Svg>
        </SvgIcon>
    );
}
