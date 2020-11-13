import React, { useEffect, useState } from "react";
import "./quiz-page.styles.scss";

import Question from "../../component/question-component/question.component";
import { useAddQuestion } from "../../Custom-Hook/useAddQuestion";

const QuizPage = () => {
  let array = [1];
  const [questions, setQuestions] = useState([1]);
  const addQuestion = () => {
    setQuestions(questions.concat([2]));
    //console.log(array);
  };
  useEffect(() => {
    console.log(questions);
  }, [array]);
  return (
    <div className="quiz-page container">
      <h1>Create New Quiz</h1>

      {questions.map((question) => (
        <Question key={question} addQuestion={addQuestion} />
      ))}
    </div>
  );
};

export default QuizPage;
