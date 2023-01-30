import { useState } from "react";

export function useGenerateDisplay() {
  const [lineDisplay, setLineDisplay] = useState({
    mainLine: [],
    verticalLine: [],
    loopLine: [],
  });

  function handleGenerateLineDisplay(event, formInputs) {
    event.preventDefault();

    let mainLine = [];
    let verticalLine = [];
    let loopLine = [];

    for (let index = 1; index <= formInputs.lineSize; index++) {
      if (index + 1 === formInputs.loopPosition) {
        verticalLine.push(" ║║ ");
        mainLine.push(":╝╝:");
      } else if (index === formInputs.loopPosition + formInputs.loopSize) {
        verticalLine.push(" ║║ ");
        mainLine.push(":╚╚:");
      } else {
        verticalLine.push("....");
        mainLine.push(":══:");
      }

      if (index + 1 === formInputs.loopPosition) {
        loopLine.push(" ╔╔:");
      } else if (index === formInputs.loopPosition + formInputs.loopSize) {
        loopLine.push(":╗╗ ");
      } else if (
        index >= formInputs.loopPosition &&
        index <= formInputs.loopPosition + formInputs.loopSize
      ) {
        loopLine.push(":══:");
      } else {
        loopLine.push("....");
      }
    }

    setLineDisplay({
      mainLine,
      verticalLine,
      loopLine,
    });
  }

  return {
    lineDisplay,
    handleGenerateLineDisplay,
  };
}

export default useGenerateDisplay;
