import { Styled } from "./data-input.style";
import { useFormInputs } from "./../../hooks/useFormInputs.hook";
import useGenerateTasks from "../../hooks/useGenerateTasks.hook";

export function DataInput() {
  const { formInputs, handleChange, trainInfo, lineDisplay } = useFormInputs();
  const { taskList, generateTasks, railwayTaskDisplay } = useGenerateTasks();

  // console.log(trainInfo);
  // console.log(lineDisplay);

  function renderInstructions(taskList) {
    return taskList.map((task) => (
      <li>
        <p>{task}</p>
      </li>
    ));
  }

  // console.log(railwayTaskDisplay);

  return (
    <Styled>
      <aside>
        <h1>TCS</h1>
        <h3>Train Crossing Support</h3>

        <hr />
        <form>
          <h3>Line Information</h3>
          <div className="input-container">
            <label>Line Size</label>
            <input
              type="number"
              name="lineSize"
              autoComplete="off"
              value={formInputs.lineSize.value}
              onChange={handleChange}
              placeholder={0}
            />
          </div>
          <div className="input-container">
            <label>Loop Size</label>
            <input
              type="number"
              name="loopSize"
              autoComplete="off"
              value={formInputs.loopSize.value}
              onChange={handleChange}
              placeholder={0}
            />
          </div>
          <div className="input-container">
            <label>Loop Position</label>
            <input
              type="number"
              name="loopPosition"
              autoComplete="off"
              value={formInputs.loopPosition.value}
              onChange={handleChange}
              placeholder={0}
            />
          </div>
          <hr />

          <h3>Train 1</h3>
          <div className="input-container">
            <label>Size</label>
            <input
              type="number"
              name="trainSize1"
              autoComplete="off"
              value={formInputs.trainSize1.value}
              onChange={handleChange}
              placeholder={0}
            />
          </div>
          <div className="input-container">
            <label>Position</label>
            <input
              type="number"
              name="trainPosition1"
              autoComplete="off"
              value={formInputs.trainPosition1.value}
              onChange={handleChange}
              placeholder={0}
            />
          </div>

          <hr />
          <h3>Train 2</h3>
          <div className="input-container">
            <label>Size</label>
            <input
              type="number"
              name="trainSize2"
              autoComplete="off"
              value={formInputs.trainSize2.value}
              onChange={handleChange}
              placeholder={0}
            />
          </div>
          <div className="input-container">
            <label>Position</label>
            <input
              type="number"
              name="trainPosition2"
              autoComplete="off"
              value={formInputs.trainPosition2.value}
              onChange={handleChange}
              placeholder={0}
            />
          </div>

          <hr />
        </form>
        <button onClick={() => generateTasks(trainInfo, formInputs)}>
          CALCULATE
        </button>
      </aside>
      <main>
        <h1>Railway Preview</h1>
        <br />
        <div className="railway-preview">
          <p>'{lineDisplay.loopLine}.</p>
          <p>'{lineDisplay.verticalLine}.</p>
          <p>'{lineDisplay.mainLine}.</p>
          <p>'</p>
          <p>'{lineDisplay.counterLine}.</p>
        </div>
        <p className="subtitle">{`==: => Rail | [ ] => Train 1 Car  | { } => Train 2 Car | L => Loco | T => Train`}</p>

        <hr />
        <h1>TASK LIST</h1>

        <div className="railway-task-display">
          {railwayTaskDisplay.map((item, index) => {
            if (
              item.C_mainLine &&
              item.B_verticalLine &&
              item.A_loopLine &&
              item.D_counterLine
            ) {
              return (
                <div className="railway-preview" key={index}>
                  <p>{item.A_loopLine}</p>
                  <p>{item.B_verticalLine}</p>
                  <p>{item.C_mainLine}</p>
                  <p>{item.D_counterLine}</p>
                </div>
              );
            }
            return null;
          })}
        </div>

        <ol>{renderInstructions(taskList)}</ol>
      </main>
    </Styled>
  );
}

export default DataInput;
