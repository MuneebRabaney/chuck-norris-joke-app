import React from 'react';
import styled from 'styled-components';

const Ring = styled.div`
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 45px;
  height: 45px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 4px;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    ${({ preset }) => {
      let color = '#fff';
      if (preset === 'dark') color = '#000';
      return `
        border-top-color: ${color};
        border: 2px solid ${color};
      `;
    }}
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = ({ preset = 'dark' }) => (
  <Ring preset={preset}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </Ring>
);

export default LoadingSpinner;
