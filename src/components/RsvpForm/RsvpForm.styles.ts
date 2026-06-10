"use client";

import styled from "styled-components";

export const Section = styled.section`
  padding: ${({ theme }) => theme.layout.sectionPadding} ${({ theme }) => theme.layout.pagePadding};

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    padding: ${({ theme }) => theme.layout.mobileSectionPadding} ${({ theme }) => theme.layout.pagePadding};
  }
`;

export const Panel = styled.div`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.surface},
    ${({ theme }) => theme.colors.creamDeep}
  );
  border: 1px solid ${({ theme }) => theme.colors.ivoryLine};
  border-radius: ${({ theme }) => theme.radii.rsvpPanel};
  box-shadow: ${({ theme }) => theme.shadows.rsvpPanel};
  margin: 44px auto 0;
  max-width: 520px;
  overflow: hidden;
  padding: 44px 40px 48px;
  position: relative;
  width: 100%;
  box-sizing: border-box;

  &::before {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.rose},
      ${({ theme }) => theme.colors.roseBright}
    );
    content: "";
    height: 3px;
    left: 0;
    opacity: 0.85;
    position: absolute;
    right: 0;
    top: 0;
  }

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    padding: 36px 28px 40px;
  }
`;

export const FormGrid = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 0 auto;
  max-width: 460px;
`;

export const NameRow = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.inkSoft};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const OptionalSuffix = styled.span`
  color: ${({ theme }) => theme.colors.inkFaint};
  font-size: 11.5px;
  font-weight: 400;
  text-transform: none;
`;

export const Input = styled.input<{ $error?: boolean }>`
  border: 1px solid
    ${({ $error, theme }) =>
      $error ? theme.colors.rose : theme.colors.ivoryLine};
  border-radius: ${({ theme }) => theme.radii.input};
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  padding: 14px 16px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.rose};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.roseMist};
    outline: none;
  }

  ${({ $error, theme }) =>
    $error &&
    `
    box-shadow: 0 0 0 3px ${theme.colors.roseMist};
  `}
`;

export const ChoicesGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`;

export const ChoicesGridWrapper = styled.div<{ $error?: boolean }>`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  padding: ${({ $error }) => ($error ? "12px" : "0")};
  border-radius: ${({ theme }) => theme.radii.input};
  transition: all 0.2s;

  ${({ $error, theme }) =>
    $error &&
    `
    box-shadow: 0 0 0 3px ${theme.colors.roseMist};
  `}

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`;

export const ChoiceButton = styled.button<{ $selected: boolean }>`
  background: ${({ $selected, theme }) =>
    $selected ? theme.colors.rose : theme.colors.surface};
  border: 1px solid
    ${({ $selected, theme }) =>
      $selected ? theme.colors.rose : theme.colors.ivoryLine};
  border-radius: ${({ theme }) => theme.radii.input};
  color: ${({ $selected, theme }) =>
    $selected ? theme.colors.surface : theme.colors.ink};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 15px;
  font-weight: 500;
  padding: 16px 14px;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.rose};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.roseMist};
    outline: none;
  }
`;

export const FieldError = styled.div`
  color: ${({ theme }) => theme.colors.rose};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  font-weight: 500;
  margin-top: 4px;
`;

export const Textarea = styled.textarea<{ $error?: boolean }>`
  border: 1px solid
    ${({ $error, theme }) =>
      $error ? theme.colors.rose : theme.colors.ivoryLine};
  border-radius: ${({ theme }) => theme.radii.input};
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  min-height: 84px;
  padding: 14px 16px;
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.rose};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.roseMist};
    outline: none;
  }

  ${({ $error, theme }) =>
    $error &&
    `
    box-shadow: 0 0 0 3px ${theme.colors.roseMist};
  `}
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.rose};
  border: none;
  border-radius: ${({ theme }) => theme.radii.input};
  color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 16px;
  font-weight: 600;
  margin-top: 8px;
  padding: 16px 24px;
  transition: background 0.2s, transform 0.2s;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.rosePressed};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
  }
`;

export const Note = styled.p`
  color: ${({ theme }) => theme.colors.inkFaint};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13.5px;
  margin-top: 22px;
  max-width: 40ch;
  text-align: center;
`;
