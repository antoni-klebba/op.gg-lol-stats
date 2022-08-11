import "./ErrorMsg.scss";

const ErrorMsg = ({ errorMsg }) => {
  return (
    <div className="error-container">
      <p id="error-msg">{errorMsg}</p>
    </div>
  );
};

export default ErrorMsg;
