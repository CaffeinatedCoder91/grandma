"use client";

import styled from "styled-components";

export const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: fit-content;
`;

export const StepperButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.ivoryLine};
  border-radius: ${({ theme }) => theme.radii.input};
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.rose};
    background: ${({ theme }) => theme.colors.cream};
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.roseMist};
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const StepperCount = styled.div`
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  font-weight: 500;
  min-width: 40px;
  text-align: center;
`;
