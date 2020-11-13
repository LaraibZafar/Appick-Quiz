import { useState } from "react";

export function useAddQuestion(initialValue) {
  const [questions, setQuestions] = useState(initialValue);
  return [questions, setQuestions];
}
