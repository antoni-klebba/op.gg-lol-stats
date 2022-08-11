import "./Instruction.scss";

import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";

const Instruction = ({ setShowInstruction }) => {
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
          1. Visit
          <a href="https://eune.op.gg/" target="blank">
            OP.GG
          </a>
          and search for account you are intereseted in
        </p>
        <p>2. Change language to English:</p>
        <img src={img1} alt="first step" />
        <img src={img2} alt="second step" />
        <p>3. Select and copy data:</p>
        <img src={img4} alt="last step" />
        <p>4. Paste it to stats calculator.</p>
        <form method="dialog">
          <button onClick={() => setShowInstruction(false)}>Got it!</button>
        </form>
      </div>
    </>
  );
};

export default Instruction;
