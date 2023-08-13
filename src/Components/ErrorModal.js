import React from "react";
import "../ErrorModal.css";

function ErrorModal({ show, setShowModal, errorMessage }) {
  if (!show) return null;

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Missing information</h4>
            <span className="close-icon" onClick={closeModal}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <p> {errorMessage} </p>
          </div>
          <div className="modal-footer">
            <button
              style={{ backgroundColor: "#768D86", borderRadius: "8px", padding: "5px" }}
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={closeModal}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorModal;
