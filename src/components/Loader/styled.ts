import styled, { keyframes } from "styled-components";

export const LoaderWrapp = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 15;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const logoKeyframes = keyframes`
    0% {
		transform: scale3d(1, 1, 1);
	}
    20% {
		transform: scale3d(0.85, 0.85, 0.85);
	}
    45% {
		transform: scale3d(1, 1, 1);
	}
	50% {
		transform: scale3d(0.85, 0.85, 0.85);
	}
	70% {
        transform: scale3d(1, 1, 1);
    }
    85% {
        transform: scale3d(0.85, 0.85, 0.85);
    }
	100% {
		transform: scale3d(1, 1, 1) rotate(360deg);
	}
`;

export const LoaderLogo = styled.div<{ active?: boolean }>`
  position: relative;
  z-index: 1;

  animation: ${logoKeyframes} 5s ease-in-out infinite;

  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.4s 0.4s;

  img {
    max-width: 175px;
  }
`;

export const LoaderAnimate = styled.div<{ active?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  &::before,
  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    transition: 0.4s;
    background: #ffb8c4;
  }

  &::before {
    left: ${({ active }) => (!active ? "-100%" : 0)};
  }

  &::after {
    right: ${({ active }) => (!active ? "-100%" : 0)};
  }
`;
