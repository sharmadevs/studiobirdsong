import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import React from 'react';
import {SvgIconProps} from '../../src/utils/icons/SvgInconProps';
import {SvgIcon} from '../../src/utils/icons/SvgIcon';

export default function GoogleIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <Svg height={props.size} width={props.size} viewBox="0 0 12 12">
                <G clip-path="url(#clip0)" id="GoogleIcon">
                    <Path
                        d="M0.650757 3.317C1.07096 2.44684 1.68454 1.7403 2.45429 1.16392C4.56276 -0.405344 7.50047 -0.38675 9.58662 1.19738C9.70562 1.28663 9.81346 1.39075 9.92874 1.48C10.0105 1.54322 9.99195 1.58412 9.92874 1.64734C9.41928 2.15307 8.90983 2.6588 8.40782 3.16826C8.31485 3.26122 8.26651 3.23519 8.1847 3.16826C7.63062 2.68484 6.98358 2.42453 6.24729 2.38363C4.91602 2.31297 3.87853 2.85589 3.10133 3.92314C2.89681 4.20575 2.76294 4.52184 2.62907 4.84164C2.56213 4.87511 2.52866 4.81933 2.48776 4.78958C1.90765 4.35078 1.34242 3.89339 0.762316 3.45831C0.713974 3.42112 0.665631 3.38022 0.650757 3.317Z"
                        fill="#E94335"/>
                    <Path
                        d="M9.97328 10.5349C9.34112 11.1522 8.5788 11.5538 7.73095 11.7695C5.88279 12.2417 4.14248 12 2.55835 10.903C1.73281 10.3304 1.09321 9.58663 0.646973 8.683C0.665566 8.60491 0.73622 8.56772 0.795718 8.5231C1.33492 8.09918 1.87412 7.67897 2.42076 7.25876C2.48025 7.21042 2.53603 7.14349 2.629 7.15836C2.81493 7.61203 3.04177 8.03968 3.36529 8.41154C4.61474 9.83578 6.59677 9.92131 7.95407 9.10321C7.98382 9.08461 8.01729 9.06602 8.05075 9.05115C8.12513 9.04743 8.17719 9.09205 8.22925 9.13296C8.76101 9.54572 9.29277 9.96221 9.82825 10.375C9.88403 10.4159 9.95841 10.4494 9.97328 10.5349Z"
                        fill="#34A753"/>
                    <Path
                        d="M9.9732 10.5349C9.3336 10.0403 8.69027 9.54571 8.05067 9.05114C8.58615 8.6644 8.97661 8.16982 9.16626 7.5265C9.26666 7.18811 9.27038 7.18811 8.92827 7.18811C8.01349 7.18811 7.0987 7.18439 6.18392 7.19182C6.03518 7.19182 6.00171 7.15092 6.00171 7.00589C6.00915 6.35142 6.00915 5.69694 6.00171 5.03874C6.00171 4.90859 6.0389 4.87512 6.16905 4.87512C7.94283 4.87884 9.71661 4.87884 11.4904 4.87884C11.5759 4.87884 11.6391 4.87512 11.6577 4.99412C11.9441 7.06539 11.5685 8.93958 10.0476 10.4791C10.0215 10.4977 9.99551 10.5163 9.9732 10.5349Z"
                        fill="#4284F3"/>
                    <Path
                        d="M2.62902 7.15836C1.9671 7.66781 1.30891 8.17355 0.646994 8.683C-0.215727 6.89434 -0.219446 5.10568 0.650712 3.31702C1.30891 3.82647 1.97082 4.33592 2.62902 4.84537C2.48399 5.37342 2.40218 5.90518 2.47656 6.45554C2.51002 6.69353 2.5844 6.92037 2.62902 7.15836Z"
                        fill="#FABB05"/>
                </G>
                <Defs>
                    <ClipPath id="clip0">
                        <Rect width="11.7434" height="12" fill="white"/>
                    </ClipPath>
                </Defs>
            </Svg>
        </SvgIcon>
    );
}