import Svg, { G, Path } from 'react-native-svg';
import React from 'react';
import { SvgIconProps } from '../../src/utils/icons/SvgInconProps';
import { SvgIcon } from '../../src/utils/icons/SvgIcon';

export default function ProfileIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <Svg height={props.size} width={props.size} viewBox="0 0 18 18">
                <G id="ProfileIcon">
                    <Path
                        d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM15.21 14.085L15.12 14.175C14.85 14.085 14.4 13.95 14.22 13.905C13.545 13.68 12.375 13.05 11.97 12.825C11.115 12.33 11.25 11.52 11.7 10.665C12.915 8.325 13.23 6.48 12.33 4.725C11.475 3.015 10.35 2.43 9 2.43C7.65 2.43 6.345 3.195 5.715 4.815C4.68 7.425 5.715 9.315 6.615 10.845C6.93 11.385 7.515 12.105 6.885 12.78C6.615 13.05 5.895 13.275 5.49 13.41C4.905 13.635 4.275 13.77 3.69 13.905C3.42 13.95 2.88 14.13 2.88 14.13C1.71 12.78 0.99 10.98 0.99 9C0.99 4.59 4.59 0.99 9 0.99C13.41 0.99 17.01 4.59 17.01 9C17.01 10.935 16.335 12.735 15.21 14.085Z"
                        fill="white"/>
                </G>
            </Svg>
        </SvgIcon>
    );
}
