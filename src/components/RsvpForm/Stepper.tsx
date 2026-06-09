"use client";

import {
  StepperButton,
  StepperCount,
  StepperWrapper,
} from "./Stepper.styles";

interface StepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function Stepper({
  value,
  onChange,
  min = 1,
  max = 12,
}: StepperProps) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <StepperWrapper role="group" aria-label="Number attending">
      <StepperButton
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
        aria-label="Fewer attendees"
      >
        −
      </StepperButton>
      <StepperCount aria-live="polite" aria-atomic="true">
        {value}
      </StepperCount>
      <StepperButton
        type="button"
        onClick={handleIncrement}
        disabled={value >= max}
        aria-label="More attendees"
      >
        +
      </StepperButton>
    </StepperWrapper>
  );
}
