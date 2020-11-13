import React from "react";
import "./question.styles.scss";
const Question = ({ key, addQuestion }) => {
  return (
    <div className="box">
      <div className="question-container">
        <input type="text" className="form-control" placeholder="Question" />
        <div className="answer-container">
          <div className="answer-type">
            <select class="form-control">
              <option value="Multi-choice">Multi-choice</option>
              <option value="Checkboxes">Checkboxes</option>
              <option value="Short Answer">Short Answer</option>
            </select>
          </div>
          <div className="answer-submission">
            <input
              type="text"
              className="form-control"
              placeholder="Option 1"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Option 2"
            />
          </div>
        </div>
      </div>
      <div className="buttons">
        <button type="button" className="btn btn-light">
          <i className="fas fa-trash"></i>
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => addQuestion()}
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Question;
