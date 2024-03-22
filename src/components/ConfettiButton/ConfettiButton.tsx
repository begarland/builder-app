"use client";
import React from "react";
import Confetti from "react-confetti-boom";
import rgbHex from "rgb-hex";

export const defaultConfettiColors: string[] = [
  "#041020",
  "#A55552",
  "#1B774C",
  "#1E7A8C",
  "#242345",
];

type ConfettiButtonType = {
  className?: string;
  backgroundColor?: string;
  color?: string;
  buttonText?: string;
  confettiColors?: string[];
};

const ConfettiButton: React.FC<ConfettiButtonType> = ({
  className,
  backgroundColor,
  color,
  buttonText,
  confettiColors = [],
}) => {
  const [showConfetti, setShowConfetti] = React.useState<boolean>(false);

  const clickButton = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 1500);
  };

  //   const hexColors = defaultConfettiColors.map((color) => `#${rgbHex(color)}`);
  const hexColors = defaultConfettiColors;

  return (
    <>
      <button className="bg-green-700 text-white" onClick={clickButton}>
        {buttonText ?? "Add button text"}
      </button>
      {showConfetti ? (
        <Confetti
          colors={hexColors}
          particleCount={100}
          mode={"boom"}
          effectInterval={1500}
        />
      ) : null}
    </>
  );
};

export default ConfettiButton;
