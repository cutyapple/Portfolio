import { keyframes } from 'styled-components';

export const Resilient = keyframes`
    0% {
        transform: scale3d(1,1,1);
    }
    30% {
        transform: scale3d(1.25,0.75,1);
    }
    40% {
        transform: scale3d(0.75,1.25,1);

    }
    50% {
        transform: scale3d(1.15,0.85,1);
    }
    65% {
        transform: scale3d(0.95,1.05,1);
    }
    75% {
        transform: scale3d(1.05,0.95,1);
    }
    100% {
        transform: scale3d(1,1,1);
    }
`;

export const BounceIn = keyframes`
    0% {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
        transform: scale3d(1.1, 1.1,1.1);
    }
    40% {
        transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
        transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
        transform: scale3d(1, 1, 1);
    }
`;

export const Rotate = keyframes`
    0% {
        transform: matrix3d(0,-1,0,0,1,0,0,0,0,0,1,0,0,0,0,1);
    }
    3.2% {
        transform: matrix3d(.652,-.763,0,0,.871,.501,0,0,0,0,1,0,0,0,0,1);
    }
    4.3% {
        transform: matrix3d(.797,-.614,0,0,.768,.649,0,0,0,0,1,0,0,0,0,1);
    }
    6.41% {
        transform: matrix3d(.953,-.325,0,0,.534,.853,0,0,0,0,1,0,0,0,0,1);
    }
    8.61% {
        transform: matrix3d(1.002,-.083,0,0,.296,.961,0,0,0,0,1,0,0,0,0,1);
    }
    12.71% {
        transform: matrix3d(.992,.149,0,0,-.001,1.003,0,0,0,0,1,0,0,0,0,1);
    }
    12.91% {
        transform: matrix3d(.991,.154,0,0,-.01,1.003,0,0,0,0,1,0,0,0,0,1);
    }
    17.22% {
        transform: matrix3d(.984,.181,0,0,-.111,.994,0,0,0,0,1,0,0,0,0,1);
    }
    18.92% {
        transform: matrix3d(.987,.163,0,0,-.116,.994,0,0,0,0,1,0,0,0,0,1);
    }
    25.23% {
        transform: matrix3d(.998,.066,0,0,-.067,.998,0,0,0,0,1,0,0,0,0,1);
    }
    28.33% {
        transform: matrix3d(1,.028,0,0,-.037,.999,0,0,0,0,1,0,0,0,0,1);
    }
    31.43% {
        transform: matrix3d(1,.004,0,0,-.015,1,0,0,0,0,1,0,0,0,0,1);
    }
    39.44% {
        transform: matrix3d(1,-.013,0,0,.007,1,0,0,0,0,1,0,0,0,0,1);
    }
    56.46% {
        transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
    }
    61.66% {
        transform: matrix3d(1,.001,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
    }
    81.48% {
        transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
    }
    83.98% {
        transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
    }
    100% {
        transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
    }
`;
