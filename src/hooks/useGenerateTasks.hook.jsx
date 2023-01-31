import { useState } from "react";
import { useFormInputs } from "./useFormInputs.hook";

export function useGenerateTasks() {
  const { generateRailwayDisplay, generateUpdatedFormInputs } = useFormInputs();

  const [taskList, setTaskList] = useState([]);
  const [railwayTaskDisplay, setRailwayTaskDisplay] = useState([
    {
      C_mainLine: "",
      B_verticalLine: "",
      A_loopLine: "",
      D_counterLine: "",
    },
  ]);

  function generateTasks(trainInfo, formInputs) {
    let xTrain1 = [...trainInfo.train1];
    let xTrain2 = [...trainInfo.train2];

    let mainLine = [...Array(formInputs.lineSize)].map(() => "═══:");
    let verticalLine = [...Array(formInputs.lineSize)].map(() => ".'.'");
    let loopLine = [...Array(formInputs.lineSize)].map(() => ".'.'");
    let counterLine = [...Array(formInputs.lineSize)].map(() => "");

    const loopSize = formInputs.loopSize;
    const loopStartPosition = formInputs.loopPosition - 1;
    const loopEndPosition = formInputs.loopPosition + loopSize + 1;

    const train1Size = xTrain1.length;
    const train2Size = xTrain2.length;

    let instructions = [];

    if (xTrain1[xTrain1.length - 1].carPosition < loopStartPosition) {
      // console.log("setar erro aqui: trem 1 posicao invalida");
    }

    if (xTrain2[0].carPosition > loopEndPosition) {
      // console.log("setar erro aqui: trem 2 posicao invalida");
    }

    if (
      xTrain1[xTrain1.length - 1].carPosition < loopStartPosition &&
      xTrain2[0].carPosition >= loopEndPosition
    ) {
      // console.log("Trens estao corretos");
      if (xTrain1.length <= loopSize) {
        console.log("Algum dos trens cabe no loop");
        instructions.push("Move TRAIN 1 to the loop");
        instructions.push("Cross the loop with TRAIN 2");
      } else if (xTrain2.length <= loopSize) {
        instructions.push("Move TRAIN 2 to the loop");
        instructions.push("Cross the loop with TRAIN 1");
      } else {
        instructions.push(
          `Move the T1 back ${
            xTrain2.length -
            (loopStartPosition - xTrain1[xTrain1.length - 1].carPosition) -
            1
          } positions`
        );

        instructions.push(
          `Move the L1 + ${loopSize - 1} cars forward ${
            loopEndPosition - xTrain1[xTrain1.length - 1].carPosition
          } positions into the loop.`
        );

        instructions.push(
          `Move the T2 forward ${
            xTrain2[0].carPosition - loopStartPosition + xTrain2.length
          } positions crossing the loop.`
        );

        instructions.push(
          `Move the L1 + ${loopSize - 1} CARS forward ${
            loopSize + xTrain2.length + 2
          } positions out of the loop.`
        );

        // REPEAT FROM HERE UNTIL DONE

        instructions.push(
          `Move the T2 back ${
            xTrain2.length + loopSize + 2
          } positions crossing back the loop.`
        );

        instructions.push(
          `Move only the L2 forward ${
            xTrain2[0].carPosition -
            xTrain1[xTrain1.length - 1].carPosition -
            loopSize +
            1
          } coupling with ${loopSize - 1} T1 CARS.`
        );

        instructions.push(`Move L2 + ${loopSize - 1} CARS into the loop.`);

        instructions.push(
          `Move only L2 back ${`###`} positions coupling with T2.`
        );

        instructions.push(`Move T2 forward ### positions accross the loop.`);

        instructions.push(
          `Move T1 back ### positions to the loop and couple with the CARS.`
        );

        instructions.push(`Move T1 forward ### positions out of the loop.`);
      }
    }

    if (xTrain1[0].carPosition > loopEndPosition) {
      instructions.push("Train 1 has passed the crossing loop");
    }
    if (xTrain2[xTrain2.length - 1].carPosition < loopStartPosition) {
      instructions.push("Train 2 has passed the crossing loop");
    }

    // console.log(xTrain1);
    // xTrain1[0].carPosition = 5;
    // console.log(xTrain1);

    let aaa = [1, 2, 3, 4];

    console.log(aaa);
    aaa[0] = 99;
    console.log(aaa);

    generateRailwayDisplay(
      formInputs,
      mainLine,
      verticalLine,
      loopLine,
      counterLine,
      xTrain1,
      xTrain2
    );

    console.log(mainLine);

    setRailwayTaskDisplay((prevState) => [
      ...prevState,
      {
        C_mainLine: mainLine.join(""),
        B_verticalLine: verticalLine.join(""),
        A_loopLine: loopLine.join(""),
        D_counterLine: counterLine.join(""),
      },
    ]);

    // console.log(instructions);
    setTaskList(instructions);
  }

  return { taskList, generateTasks, railwayTaskDisplay };
}

export default useGenerateTasks;
