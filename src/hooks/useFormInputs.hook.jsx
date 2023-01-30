import { useState } from "react";

export function useFormInputs() {
  const [formInputs, setFormInputs] = useState({
    lineSize: 0,
    loopSize: 0,
    loopPosition: 0,
    trainSize1: 0,
    trainPosition1: 0,
    trainSize2: 0,
    trainPosition2: 0,
  });

  const [trainInfo, setTrainInfo] = useState({
    train1: [{ id: "", carPosition: 0 }],
    train2: [{ id: "", carPosition: 0 }],
  });

  const [lineDisplay, setLineDisplay] = useState({
    mainLine: [],
    verticalLine: [],
    loopLine: [],
  });

  const generateUpdatedFormInputs = (prevFormInputs, event) => {
    const { name, value } = event.target;
    return {
      ...prevFormInputs,
      [name]: parseInt(value),
    };
  };

  const handleChange = (event) => {
    const updatedFormInputs = generateUpdatedFormInputs(formInputs, event);
    setFormInputs(updatedFormInputs);

    let mainLine = [...Array(updatedFormInputs.lineSize)].map(() => ":══:");
    let verticalLine = [...Array(updatedFormInputs.lineSize)].map(() => "....");
    let loopLine = [...Array(updatedFormInputs.lineSize)].map(() => "....");

    for (let index = 1; index <= updatedFormInputs.lineSize; index++) {
      if (index + 1 === updatedFormInputs.loopPosition) {
        verticalLine[index - 1] = " ║║ ";
        mainLine[index - 1] = ":╝╝:";
        loopLine[index - 1] = " ╔╔:";
      } else if (
        index ===
        updatedFormInputs.loopPosition + updatedFormInputs.loopSize
      ) {
        verticalLine[index - 1] = " ║║ ";
        mainLine[index - 1] = ":╚╚:";
        loopLine[index - 1] = ":╗╗ ";
      } else if (
        index >= updatedFormInputs.loopPosition &&
        index <= updatedFormInputs.loopPosition + updatedFormInputs.loopSize
      ) {
        loopLine[index - 1] = ":══:";
      }
    }

    const train1Cars = [];
    const train2Cars = [];

    for (let i = updatedFormInputs.trainSize1 - 1; i >= 0; i--) {
      let id = i < 10 ? `[0${i}]` : `[${i}]`;
      if (i === 0) id = "[L1]";

      train1Cars.push({
        id,
        carPosition:
          updatedFormInputs.trainPosition1 +
          updatedFormInputs.trainSize1 -
          1 -
          i,
      });
    }

    for (let i = 0; i < updatedFormInputs.trainSize2; i++) {
      let id = i < 10 ? `{0${i}}` : `{${i}}`;
      if (i === 0) id = "{L2}";

      train2Cars.push({
        id,
        carPosition: updatedFormInputs.trainPosition2 + i,
      });
    }

    train1Cars.forEach((train) => {
      if (train.carPosition > 0) {
        mainLine[train.carPosition - 1] = train.id;
      }
    });

    train2Cars.forEach((train) => {
      if (train.carPosition > 0) {
        mainLine[train.carPosition - 1] = train.id;
      }
    });

    setTrainInfo({
      train1: train1Cars,
      train2: train2Cars,
    });

    setLineDisplay({
      mainLine,
      verticalLine,
      loopLine,
    });
  };

  return {
    formInputs,
    handleChange,
    trainInfo,
    lineDisplay,
  };
}

export default useFormInputs;
