export function getQuestion(level: number) {
  let randomNumOne: number;
  switch (level) {
    case 1:
      // Math.floor(Math.random() * "maxNumber" ) + "minNumber";
      randomNumOne = Math.floor(Math.random() * 3) + 1;
      break;
    case 2:
      randomNumOne = Math.floor(Math.random() * 3) + 4;
      break;
    case 3:
      randomNumOne = Math.round(Math.random() * 3) + 7;
      break;
  }
  const randomNumTwo = Math.round(Math.random() * (9 - 1) + 1);

  return [randomNumOne, randomNumTwo];
}

export function getWrongResponses(response: number) {
  let wrongAnswers = [];

  while (wrongAnswers.length < 3) {
    const random = Math.floor(Math.random() * (response + 5)) + 1;
    if (random !== response && !wrongAnswers.includes(random)) {
      wrongAnswers.push(random);
    }
  }

  const responses = [...wrongAnswers, response].sort(function () {
    return Math.random() - 0.5;
  });

  return responses;
}
