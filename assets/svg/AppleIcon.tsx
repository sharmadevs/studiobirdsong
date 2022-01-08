import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import React from 'react';
import {SvgIconProps} from '../../src/utils/icons/SvgInconProps';
import {SvgIcon} from '../../src/utils/icons/SvgIcon';

export default function AppleIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <Svg height={props.size} width={props.size} viewBox="0 0 12 12">
                <G clip-path="url(#clip0)" id="AppleIcon">
                    <Path
                        d="M9.741 4.03299C7.83852 5.10044 8.00028 7.90692 10.0645 8.80117C10.0047 8.96023 9.94848 9.11929 9.88518 9.27481C9.53704 10.1125 9.04471 10.8512 8.40469 11.491C8.1515 11.7455 7.84555 11.9187 7.48334 11.9682C7.17388 12.0106 6.882 11.9328 6.59364 11.8374C6.31231 11.7455 6.03802 11.6324 5.74966 11.5617C5.24678 11.4415 4.75446 11.5334 4.2762 11.7102C4.03004 11.8021 3.77684 11.8869 3.52365 11.954C3.12276 12.0601 2.76055 11.954 2.42647 11.7172C2.07832 11.4698 1.81106 11.1411 1.55083 10.8053C0.86158 9.91458 0.404422 8.91428 0.161776 7.81855C-0.0351538 6.92783 -0.0843863 6.03358 0.193425 5.15346C0.531019 4.07894 1.20972 3.3296 2.29635 2.98321C2.88363 2.79587 3.46387 2.85243 4.03707 3.06097C4.34302 3.17408 4.65599 3.27658 4.96897 3.36848C5.06392 3.39676 5.17997 3.39322 5.27492 3.36495C5.67229 3.24477 6.05912 3.09985 6.45649 2.97967C7.42356 2.68984 8.32029 2.85243 9.15021 3.41797C9.38231 3.58409 9.5722 3.79263 9.741 4.03299Z"
                        fill="white"/>
                    <Path
                        d="M7.5361 0C7.56071 0.293373 7.55016 0.583211 7.46225 0.862445C7.19147 1.71429 6.65343 2.33638 5.83758 2.70044C5.59493 2.81001 5.3347 2.83829 5.05689 2.81708C5.04986 2.76406 5.03931 2.71458 5.03931 2.6651C5.03228 1.93697 5.32064 1.32901 5.81296 0.820029C6.26309 0.353461 6.81519 0.081296 7.45873 0C7.47983 0 7.50445 0 7.5361 0Z"
                        fill="white"/>
                </G>
                <Defs>
                    <ClipPath id="clip0">
                        <Rect width="10.0645" height="12" fill="white"/>
                    </ClipPath>
                </Defs>
            </Svg>
        </SvgIcon>
    );
}