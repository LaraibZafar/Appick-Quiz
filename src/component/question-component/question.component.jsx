import React from "react";
import "./question.styles.scss";

import MultiChoice from "../multiple-choice-component/multiple-choice.component";

const Question = ({
  addQuestion,
  removeQuestion,
  questionNumber,
  questions,
  setQuestions,
}) => {
  return (
    <div className="box">
      <div className="question-container">
        <input type="text" className="form-control" placeholder="Question" />
        <div className="answer-container">
          <div className="answer-type">
            <select className="form-control">
              <option value="Multi-choice">Multi-choice</option>
              <option value="Checkboxes">Checkboxes</option>
              <option value="Short Answer">Short Answer</option>
            </select>
          </div>
          <MultiChoice />
        </div>
      </div>
      <div className="buttons">
        <button
          type="button"
          className="btn btn-light"
          onClick={() =>
            removeQuestion(questionNumber, questions, setQuestions)
          }
        >
          <i className="fas fa-trash"></i>
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => addQuestion(questions, setQuestions)}
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Question;
