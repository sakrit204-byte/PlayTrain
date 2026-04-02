import questionsData from "./questions.json";

/*
questionsData structure from JSON:

{
  cricket: [...],
  basketball: [...]
}
*/

export const questions = {};

// populate dictionary dynamically
Object.keys(questionsData).forEach((category) => {
  questions[category] = questionsData[category];
});

// optional helpers
export const categories = Object.keys(questions);