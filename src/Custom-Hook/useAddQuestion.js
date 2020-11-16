import { useState } from "react";

export function useAddQuestion(initialValue) {
  const [questions, setQuestions] = useState(initialValue);
  return [questions, setQuestions];
}

export const addQuestion = (questions, setQuestions) => {
  var count = questions[questions.length - 1];
  if (!count) {
    count = 0;
  }
  count++;
  setQuestions(questions.concat([count]));
};

export const removeQuestion = (questionNumber, questions, setQuestions) => {
  setQuestions(questions.filter((question) => question !== questionNumber));
};
