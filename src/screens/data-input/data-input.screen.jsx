import { Styled } from "./data-input.style";
import { useFormInputs } from "./../../hooks/useFormInputs.hook";

export function DataInput() {
  const { formInputs, handleChangeLine, trainInfo, lineDisplay } =
    useFormInputs();

  console.log(trainInfo);

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
              onChange={handleChangeLine}
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
              onChange={handleChangeLine}
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
              onChange={handleChangeLine}
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
              onChange={handleChangeLine}
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
              onChange={handleChangeLine}
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
              onChange={handleChangeLine}
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
              onChange={handleChangeLine}
              placeholder={0}
            />
          </div>

          <hr />

          <button>CALCULATE</button>
        </form>
      </aside>
      <main>
        <h1>LISTA DE TAREFAS</h1>
        <hr />
        <h3>Status</h3>
        <br />
        <p>{lineDisplay.loopLine}</p>
        <p>{lineDisplay.verticalLine}</p>
        <p>{lineDisplay.mainLine}</p>
      </main>
    </Styled>
  );
}

export default DataInput;
