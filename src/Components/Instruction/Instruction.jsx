import { useState } from "react";

import "./Instruction.scss";

import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img4 from "../../img/4.jpg";

const Instruction = ({ setShowInstruction }) => {
  const [showInstructionCheckbox, setShowInstructionCheckbox] = useState(
    localStorage.getItem("instructionOnLoad")
  );
  const [checked, setChecked] = useState(
    localStorage.getItem("instructionOnLoad") === "true" ? false : true
  );

  const handleInstructionClose = () => {
    if (!showInstructionCheckbox && checked) {
      localStorage.setItem("instructionOnLoad", false);
      setChecked(true);
      setShowInstructionCheckbox(!showInstructionCheckbox);
    } else if (showInstructionCheckbox && !checked) {
      localStorage.setItem("instructionOnLoad", true);
      setChecked(false);
      setShowInstructionCheckbox(!showInstructionCheckbox);
    } else if (checked) {
      localStorage.setItem("instructionOnLoad", false);
    } else if (!checked) {
      localStorage.setItem("instructionOnLoad", true);
    }

    setShowInstruction(false);
  };

  return (
    <>
      <div
        className="backdrop"
        onClick={() => {
          setShowInstruction(false);
        }}></div>
      <div id="instruction">
        <h3>How to use stats calculator</h3>
        <p>
          1. Visit{" "}
          <a href="https://eune.op.gg/" target="blank">
            OP.GG
          </a>{" "}
          and search for account you are intereseted in
        </p>
        <p>2. Change language to English:</p>
        <img src={img1} alt="first step" />
        <img src={img2} alt="second step" />
        <p>3. Select and copy games you are interested in:</p>
        <img src={img4} alt="last step" />
        <p>4. Paste it to stats calculator.</p>
        <form className="btn-container" onSubmit={handleInstructionClose}>
          <button type="submit">Got it!</button>
          <div>
            <input
              type="checkbox"
              name="show-again"
              id="show-again"
              value={showInstructionCheckbox}
              checked={checked}
              onChange={() => {
                setShowInstructionCheckbox(!showInstructionCheckbox);
                setChecked(!checked);
              }}
            />
            <label htmlFor="show-again">Don't show it again</label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Instruction;
