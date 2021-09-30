const randomizerArray = (arr: any): [] => arr.sort(() => 0.5 - Math.random());

const tables = (level: string) => {
  switch (level) {
    case '1':
      return [1, 2, 3];
    case '2':
      return [4, 5, 6];
    case '3':
      return [7, 8, 9];
    case '4':
      return [1, 2, 3, 4, 5, 6, 7, 8, 9];
    default:
      return [];
  }
};

const getWrongOptions = (number: number) => {
  let responses: number[] = [];
  for (let i = responses.length; responses.length < 3; i++) {
    const numRandom = Math.random() * (number + 10 - 1) + 1;
    const rounded = Math.floor(numRandom);
    if (rounded != number && responses.indexOf(rounded) == -1) {
      responses.push(rounded);
    }
  }
  return randomizerArray(responses);
};

export const getTables = (level: string) => {
  const numbersByLevel = tables(level);
  let multiplier: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let operaciones: any[] = [];
  for (let number of numbersByLevel) {
    let array = multiplier.map((e: any) => ({
      table: number,
      multiplier: e,
      result: number * e,
      options: randomizerArray([...getWrongOptions(number * e), number * e]),
    }));
    operaciones.push(array);
  }
  return randomizerArray(operaciones.flat());
};

