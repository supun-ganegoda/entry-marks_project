const Spinner = ({ body }) => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="spinner"></div>
        <span className="waiting-message" style={{ marginLeft: "0" }}>
          {body}
        </span>
      </div>
    </div>
  );
};
export default Spinner;
