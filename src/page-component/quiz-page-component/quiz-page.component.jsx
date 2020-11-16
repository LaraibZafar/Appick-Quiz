import React from "react";
import "./quiz-page.styles.scss";

import Question from "../../component/question-component/question.component";
import {
  useAddQuestion,
  addQuestion,
  removeQuestion,
} from "../../Custom-Hook/useAddQuestion";

const QuizPage = () => {
  var count = 1;
  const [questions, setQuestions] = useAddQuestion([count]);

  return (
    <div className="quiz-page container">
      <div className="header">
        <h1>Create New Quiz</h1>
        <div className="buttons">
          <button className="btn">Save</button>
          <button className="btn">Cancel</button>
        </div>
      </div>
      <div className="question-format">
        <h3>Questions will be typed here</h3>
        <p>Correct Answers will be here</p>
      </div>
      {questions.map((question) => (
        <Question
          key={question}
          questionNumber={question}
          addQuestion={addQuestion}
          removeQuestion={removeQuestion}
          questions={questions}
          setQuestions={setQuestions}
        />
      ))}
    </div>
  );
};

export default QuizPage;
