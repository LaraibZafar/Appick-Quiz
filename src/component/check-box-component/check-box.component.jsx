import React from "react";
import "./check-box.styles.scss";

import {
  useAddQuestion,
  addQuestion,
  removeQuestion,
} from "../../Custom-Hook/useAddQuestion";

const CheckBoxes = () => {
  const [questions, setQuestions] = useAddQuestion([1, 2, 3]);

  return (
    <div className="check-box">
      {questions.map((question) => (
        <div key={question} className="input-control">
          <input className="form-control check-inp" type="checkbox" />
          <input
            type="text"
            className="form-control text-inp"
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

export default CheckBoxes;
