import React from "react";
import "./question.styles.scss";

import { useQuestionSelector } from "../../Custom-Hook/useQuestionSelector";
import MultiChoice from "../multiple-choice-component/multiple-choice.component";
import Checkboxes from "../check-box-component/check-box.component";
import ShortAnswer from "../short-answer-component/short-answer.component";

const Question = ({
  addQuestion,
  removeQuestion,
  questionNumber,
  questions,
  setQuestions,
}) => {
  const [questionType, setQuestionType] = useQuestionSelector("Multi-choice");

  const handleChange = (event) => {
    setQuestionType(event.target.value);
  };

  return (
    <div className="box">
      <div className="question-container">
        <input type="text" className="form-control" placeholder="Question" />
        <div className="answer-container">
          <div className="answer-type">
            <select
              className="form-control"
              onChange={(event) => handleChange(event)}
              value={questionType}
            >
              <option value="Multi-choice">Multi-choice</option>
              <option value="Checkboxes">Checkboxes</option>
              <option value="Short Answer">Short Answer</option>
            </select>
          </div>
          {questionType === "Multi-choice" ? (
            <MultiChoice />
          ) : (
            [questionType === "Checkboxes" ? <Checkboxes /> : <ShortAnswer />]
          )}
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
