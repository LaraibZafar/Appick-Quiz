import { useState } from "react";

export function useQuestionSelector(initialValue) {
  const [questionType, setQuestionType] = useState(initialValue);
  return [questionType, setQuestionType];
}
