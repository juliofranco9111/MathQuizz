export function getQuestion(level: number, prevQuestion?: number[]) {
 
  if (prevQuestion) {
    let [first, second] = prevQuestion;
    let question = [randomNumberByLevel(level), randomOnetoNine()];

    if (prevQuestion.every((value, index) => value === question[index])) {
      question = null;
      question = [randomNumberByLevel(level), randomOnetoNine()];
    }

    return question;
  }

  let question = [randomNumberByLevel(level), randomOnetoNine()];
  return question;
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

function randomNumberByLevel(level: number): number {
  switch (level) {
    case 1:
      // Math.floor(Math.random() * "maxNumber" ) + "minNumber";
      return Math.floor(Math.random() * 3) + 1;
    case 2:
      return Math.floor(Math.random() * 3) + 4;
    case 3:
      return Math.round(Math.random() * 3) + 7;
    case 4:
      return Math.round(Math.random() * 8) + 1;
  }
}

function randomOnetoNine(): number {
  return Math.round(Math.random() * (9 - 1) + 1);
}
