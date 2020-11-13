import React from "react";
import "./quiz-page.styles.scss";

import Question from "../../component/question-component/question.component";
import { useAddQuestion } from "../../Custom-Hook/useAddQuestion";

const QuizPage = () => {
  var count = 1;
  const [questions, setQuestions] = useAddQuestion([count]);
  const addQuestion = () => {
    count = questions[questions.length - 1];
    count++;
    setQuestions(questions.concat([count]));
  };
  const removeQuestion = (questionNumber) => {
    setQuestions(questions.filter((question) => question != questionNumber));
    console.log(questions);
  };

  return (
    <div className="quiz-page container">
      <h1>Create New Quiz</h1>

      {questions.map((question) => (
        <Question
          key={question}
          questionNumber={question}
          addQuestion={addQuestion}
          removeQuestion={removeQuestion}
        />
      ))}
    </div>
  );
};

export default QuizPage;
