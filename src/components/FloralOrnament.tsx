"use client";

import styled from "styled-components";

const Ornament = styled.span<{ $small?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.rose};
  opacity: 0.85;

  &::before,
  &::after {
    content: "";
    width: ${({ $small }) => ($small ? "34px" : "46px")};
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.colors.ivoryLine}
    );
  }

  &::after {
    background: linear-gradient(
      to left,
      transparent,
      ${({ theme }) => theme.colors.ivoryLine}
    );
  }
`;

const Leaf = styled.span<{ $right?: boolean }>`
  width: 13px;
  height: 6px;
  border-radius: 0 100% 0 100%;
  background: ${({ theme }) => theme.colors.sage};
  opacity: 0.8;
  transform: ${({ $right }) => ($right ? "scaleX(-1)" : "none")};
`;

const Bud = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.rose};
  transform: rotate(45deg);
  box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.roseMist};
`;

export function FloralOrnament({ small = false }: { small?: boolean }) {
  return (
    <Ornament $small={small} aria-hidden="true">
      <Leaf />
      <Bud />
      <Leaf $right />
    </Ornament>
  );
}
