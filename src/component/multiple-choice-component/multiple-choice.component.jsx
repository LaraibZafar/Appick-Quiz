import React from "react";
import "./multiple-choice.styles.scss";

import {
  useAddQuestion,
  addQuestion,
  removeQuestion,
} from "../../Custom-Hook/useAddQuestion";

const MultipleChoice = () => {
  const [questions, setQuestions] = useAddQuestion([1, 2]);

  return (
    <div className="multi-choice">
      {questions.map((question) => (
        <div className="input-control">
          <input
            type="text"
            className="form-control"
            placeholder={`Option ${question}`}
          />
          <i className="far fa-check-circle tick"></i>
          <i
            onClick={() => removeQuestion(question, questions, setQuestions)}
            class="fas fa-times cross"
          ></i>
        </div>
      ))}
      <span onClick={() => addQuestion(questions, setQuestions)}>
        Add Question
      </span>
    </div>
  );
};

export default MultipleChoice;
