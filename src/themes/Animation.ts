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
