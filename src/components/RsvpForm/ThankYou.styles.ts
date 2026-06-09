"use client";

import styled, { keyframes } from "styled-components";

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ThankYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  padding: 40px 30px;
  animation: ${riseIn} 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const CheckmarkIcon = styled.div`
  width: 64px;
  height: 64px;
  position: relative;

  &::after {
    align-items: center;
    background: ${({ theme }) => theme.colors.roseMist};
    border: 3px solid ${({ theme }) => theme.colors.rose};
    border-radius: 50%;
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.colors.rose};
    color: ${({ theme }) => theme.colors.rose};
    content: "✓";
    display: flex;
    font-size: 36px;
    font-weight: 600;
    height: 64px;
    justify-content: center;
    line-height: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`;

export const ThankYouMessage = styled.p`
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  line-height: 1.6;
  max-width: 380px;
`;
